import type { SnowflakeType, ErrorResponse, RatelimitedResponse } from "./types.mts";

export class HTTPError extends Error {
    constructor(public status: number, public statusText: string) {
        super(`${status} ${statusText}`);
    }
}

export class ClientErrorResponse extends HTTPError {
    constructor(status: number, statusText: string, public response: ErrorResponse) {
        super(status, statusText);
    }
}

export class ClientRatelimitedResponse extends HTTPError {
    constructor(statusText: string, public response: RatelimitedResponse) {
        super(429, statusText);
    }
}

export type BaseParameter = string | number | boolean | null;
export type Parameter = BaseParameter | BaseParameter[];
export type Parameters = { [key: string]: Parameter };


class CircularArray<T> {
    private buffer: T[];
    private last = 0;

    constructor(size: number, default_value: T) {
        if (size > 0) this.buffer = Array(size).fill(default_value);
        else throw new Error("size must be > 0");
    }

    push(value: T): void {
        this.buffer[this.last++] = value;
        if (this.last >= this.buffer.length) this.last = 0;
    }

    getLast(): T {
        return this.buffer[this.last]!;
    }
}

interface Queue {
    resolve: (value?: unknown) => void,
    reject: (reason?: unknown) => void
}

interface Bucket {
    id: string | null;
    limit: number;
    remaining: number;
    reset: number;
    //resetAfter: number;
    queue: Queue[];
    busy: boolean;
}

interface RateLimit {
    global: CircularArray<number>;
    routes: Map<string, Map<SnowflakeType | null, Bucket>>;
}

const authorizations = new Map<string | null, RateLimit>();

function enterQueue(queue: Queue[]) {
    return new Promise((resolve, reject) => queue.push({ resolve, reject }));
}

const bucketsIDs = new Map<string, string>();

export async function request(route: string, majorParam: SnowflakeType | null, method: string, path: string, authorization: string | null, body?: unknown, parameters?: Parameters, reason?: string): Promise<unknown> {
    const { global, routes } = authorizations.getOrInsertComputed(authorization, () => ({
        global: new CircularArray(50, 0),
        routes: new Map()
    }));

    const buckets = routes.getOrInsertComputed(route, () => new Map);
    const bucket = buckets.getOrInsertComputed(majorParam, () => ({
        id: null,
        limit: 1,
        reset: 0,
        remaining: 1,
        queue: [],
        busy: false
    }));

    try {
        if (bucket.busy) await enterQueue(bucket.queue);
        else bucket.busy = true;

        const now1 = Date.now();
        if (bucket.remaining < 1 && bucket.reset > now1) await new Promise(resolve => setTimeout(resolve, bucket.reset - now1 - 1000));

        const now = Date.now();
        const last = global.getLast();

        // Last request more than 1s ago.
        if (last + 1000 < now) {
            global.push(now);

            const url = new URL(`https://discord.com/api/v10${path}`);

            if (parameters) {
                for (const [key, parameter] of Object.entries(parameters)) {
                    if (parameter != null) {
                        if (Array.isArray(parameter)) {
                            for (const value of parameter) {
                                if (value != null) url.searchParams.append(key, value.toString());
                            }
                        }
                        else url.searchParams.append(key, parameter.toString());
                    }
                }
            }

            const headers = new Headers;
            const init: RequestInit = { method, headers };

            if (authorization) headers.set("Authorization", authorization);
            if (reason) headers.set("X-Audit-Log-Reason", reason);
            if (body !== undefined) {
                if (body instanceof FormData || body instanceof URLSearchParams) {
                    init.body = body;
                }
                else {
                    init.body = JSON.stringify(body);
                    headers.set("Content-Type", "application/json");
                }
            }

            const response = await fetch(url, init);

            const limit = response.headers.get("X-RateLimit-Limit");
            const remaining = response.headers.get("X-RateLimit-remaining");
            //const reset = response.headers.get("X-RateLimit-reset");
            const resetAfter = response.headers.get("X-RateLimit-reset-after");
            const bucketID = response.headers.get("X-RateLimit-Bucket");
            
            if (bucketID) {
                const bucketRoute = bucketsIDs.getOrInsert(bucketID, route);
                if (bucketRoute !== route) console.warn(`${bucketRoute} and ${route} share the same bucket ID.`);
            }

            bucket.id = bucketID;
            bucket.limit = limit ? parseInt(limit) : 1;
            bucket.reset = Date.now() + (resetAfter ? parseFloat(resetAfter) * 1000 : 0);
            bucket.remaining = remaining ? parseInt(remaining) : 1;

            if (response.ok) {
                if (response.status === 204) return;

                const contentType = response.headers.get("Content-Type");

                switch (contentType) {
                    case "application/json": return await response.json();
                    case "image/png": return await response.blob();
                    case "text/csv": return await response.text();
                    default: throw new Error(`Unexpected Content-Type: ${contentType}`);
                }
            }
            else {
                if (response.status === 429) throw new ClientRatelimitedResponse(response.statusText, await response.json() as RatelimitedResponse);
                else if (response.status >= 400 && response.status < 500) throw new ClientErrorResponse(response.status, response.statusText, await response.json() as ErrorResponse);
                else throw new HTTPError(response.status, response.statusText);
            }

        }
        // Last request less than 1s ago.
        else {
            throw new Error("Global rate limited.");
        }
    }
    finally {
        const nextBucketRequest = bucket.queue.shift();

        if (nextBucketRequest) nextBucketRequest.resolve();
        else bucket.busy = false;
    }
}
