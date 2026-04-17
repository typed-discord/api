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

function getRoutePath(path: string) {
    const route = path.split("/").slice(1);

    switch (route[0]) {
        case "channels":
        case "guilds": return route.length > 2 ? `/${route[0]}/${route[1]}/${route.slice(2).map(node => /^[0-9]+$/.test(node) ? "{id}" : node).join("/")}` : `/${route[0]}/${route[1]}`;
        default: return `/${route[0]}/${route.slice(1).map(node => /^[0-9]+$/.test(node) ? "{id}" : node).join("/")}`;
    }
}

function getRoute(method: string, path: string) {
    return `${method} ${getRoutePath(path)}`;
}

interface Queue {
    resolve: (value?: unknown) => void,
    reject: (reason?: unknown) => void
}



interface Bucket {
    remaining: number,
    reset: number,
    resetAfter: number,
    queue: Queue[],
    busy: boolean
}

interface Route {
    bucket_id: string,
    busy: boolean,
    queue: Queue[]
}

interface RateLimit {
    global: CircularArray<number>,
    routes: Map<string, Route>,
    buckets: Map<string, Bucket>
}

const authorizations = new Map<string | null, RateLimit>();

function enterQueue(queue: Queue[]) {
    return new Promise((resolve, reject) => queue.push({ resolve, reject }));
}

export async function fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> {
    const request = new Request(input, init);
    const authorization = request.headers.get("Authorization");
    const method = request.method;
    const url = new URL(request.url);
    const path = url.pathname.slice("/api/v10".length);

    let authorizationLimits = authorizations.get(authorization);

    if (authorizationLimits === undefined) {
        authorizationLimits = {
            global: new CircularArray(50, 0),
            routes: new Map(),
            buckets: new Map()
        }

        authorizations.set(authorization!, authorizationLimits);
    }

    const { global, routes, buckets } = authorizationLimits;

    const route = getRoute(method, path);

    let routeData = routes.get(route);

    if (routeData === undefined) {
        routeData = {
            bucket_id: "",
            busy: false,
            queue: []
        }

        routes.set(route, routeData);
    }

    if (routeData.busy) await enterQueue(routeData.queue);
    else routeData.busy = true;

    const bucket = buckets.get(routeData.bucket_id);

    if (bucket) {
        if (bucket.busy) await enterQueue(bucket.queue);
        else bucket.busy = true;
    }

    try {
        if (bucket && bucket.remaining <= 0 && bucket.reset > Date.now()) await new Promise(resolve => setTimeout(resolve, bucket.resetAfter));

        const now = Date.now();
        const last = global.getLast();

        // Last request more than 1s ago.
        if (last + 1000 < now) {
            global.push(now);

            const response = await globalThis.fetch(input, init);

            const remaining = response.headers.get("X-RateLimit-remaining");
            const reset = response.headers.get("X-RateLimit-reset");
            const resetAfter = response.headers.get("X-RateLimit-reset-after");
            const bucketID = response.headers.get("X-RateLimit-Bucket");

            if (bucketID && remaining && reset && resetAfter) {
                const bucket = buckets.get(bucketID);

                if (bucket) {
                    bucket.remaining = parseInt(remaining);
                    bucket.reset = parseInt(reset) * 1000;
                    bucket.resetAfter = parseInt(resetAfter) * 1000;
                }
                else {
                    buckets.set(bucketID, {
                        remaining: parseInt(remaining),
                        resetAfter: parseInt(resetAfter) * 1000,
                        queue: [],
                        busy: false,
                        reset: parseInt(reset) * 1000
                    });
                }

                routeData.bucket_id = bucketID;
            }

            return response;
        }
        // Last request less than 1s ago.
        else {
            throw new Error("Global rate limited");
        }
    }
    finally {
        const nextRouteRequest = routeData.queue.shift();

        if (nextRouteRequest) nextRouteRequest.resolve();
        else routeData.busy = false;

        if (bucket) {
            const nextBucketRequest = bucket.queue.shift();

            if (nextBucketRequest) nextBucketRequest.resolve();
            else bucket.busy = false;
        }
    }
}
