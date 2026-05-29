import type { SnowflakeType, ErrorResponse, RatelimitedResponse } from "./types.mts";

/**
 * Base class for HTTP failures returned by the Discord API.
 */
export class HTTPError extends Error {
    /**
     * Create a generic HTTP error from Discord response metadata.
     * @param status Response status code.
     * @param statusText Response status text.
     */
    constructor(public status: number, public statusText: string) {
        super(`${status} ${statusText}`);
    }
}

/**
 * Error thrown when Discord returns a structured JSON client error payload.
 */
export class ClientErrorResponse extends HTTPError {
    /**
     * @param status HTTP status code.
     * @param statusText HTTP status text.
     * @param response Parsed Discord error response body.
     */
    constructor(status: number, statusText: string, public response: ErrorResponse) {
        super(status, statusText);
    }
}

/**
 * Error thrown when a request is rate limited by Discord.
 */
export class ClientRatelimitedResponse extends HTTPError {
    /**
     * @param statusText HTTP status text.
     * @param response Parsed Discord ratelimit response body.
     */
    constructor(statusText: string, public response: RatelimitedResponse) {
        super(429, statusText);
    }
}

/**
 * Base primitive type allowed for request query parameters.
 */
export type BaseParameter = string | number | boolean | null;

/**
 * Parameter type that supports repeated values for query string arrays.
 */
export type Parameter = BaseParameter | BaseParameter[];

/**
 * Query parameter dictionary for encoded Discord request URLs.
 */
export type Parameters = { [key: string]: Parameter };

/**
 * Fixed-size circular buffer storing recent timestamps.
 * Used to manage rate limit timing without unbounded memory growth.
 */
class CircularArray<T> {
    private buffer: T[];
    private last = 0;

    /**
     * Initialize the circular buffer.
     * @param size Buffer size, must be greater than zero.
     * @param default_value Default value for each slot.
     */
    constructor(size: number, default_value: T) {
        if (size > 0) this.buffer = Array(size).fill(default_value);
        else throw new Error("size must be > 0");
    }

    /**
     * Push a value into the buffer, overwriting the oldest entry when full.
     */
    push(value: T): void {
        this.buffer[this.last++] = value;
        if (this.last >= this.buffer.length) this.last = 0;
    }

    /**
     * Read the last written value from the buffer.
     */
    getLast(): T {
        return this.buffer[this.last]!;
    }
}

/**
 * Promise handlers stored in a request queue.
 */
interface Queue {
    resolve: (value?: unknown) => void,
    reject: (reason?: unknown) => void
}

/**
 * Bucket metadata for Discord rate limiting.
 */
interface Bucket {
    /** Bucket identifier returned by Discord headers. */
    id: string | null;
    /** Maximum requests allowed for this bucket in the current window. */
    limit: number;
    /** Remaining requests available before the bucket is exhausted. */
    remaining: number;
    /** Unix timestamp in milliseconds when the bucket resets. */
    reset: number;
    queue: Queue[];
    busy: boolean;
}

/**
 * Global rate limit state grouped by authorization and route.
 */
interface RateLimit {
    global: CircularArray<number>;
    routes: Map<string, Map<SnowflakeType | null, Bucket>>;
}

/**
 * Rate limit state keyed by authorization token.
 */
const authorizations = new Map<string | null, RateLimit>();

/**
 * Await the next queued request slot for a rate-limited bucket.
 */
function enterQueue(queue: Queue[]) {
    return new Promise((resolve, reject) => queue.push({ resolve, reject }));
}

/**
 * Cache mapping Discord bucket IDs to their canonical route.
 */
const bucketsIDs = new Map<string, string>();

/**
 * Perform an HTTP request against the Discord REST API with built-in rate limit handling.
 *
 * This function enforces Discord's global and per-route rate limits, serializes request bodies,
 * and parses common response content types.
 *
 * @param route Route key used for Discord bucket tracking.
 * @param majorParam Snowflake identifier for route-specific rate limiting.
 * @param method HTTP method to use for the request.
 * @param path Full Discord API path, including leading slash.
 * @param authorization Authorization header value or null for unauthenticated requests.
 * @param body Request payload to send as JSON or form data.
 * @param parameters Query string parameters for the request URL.
 * @param reason Optional audit log reason header.
 * @returns Parsed response payload, blob, text, or undefined for 204 No Content.
 */
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
        if (bucket.remaining < 1 && bucket.reset > now1) await new Promise(resolve => setTimeout(resolve, bucket.reset - now1));

        const now = Date.now();
        const last = global.getLast();

        // Last request more than 1 second ago.
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
