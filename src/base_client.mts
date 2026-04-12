import { ErrorResponse, RatelimitedResponse, MessageAttachmentRequest } from "./types.mjs";

class HTTPError extends Error {
    constructor(public status: number, public statusText: string) {
        super(`${status} ${statusText}`);
    }
}

class ClientErrorResponse extends HTTPError {
    constructor(status: number, statusText: string, public response: ErrorResponse) {
        super(status, statusText);
    }
}

class ClientRatelimitedResponse extends ClientErrorResponse {
    constructor(statusText: string, public response: RatelimitedResponse) {
        super(429, statusText, response);
    }
}

type BaseParameter = string | number | boolean | null;
type Parameter = BaseParameter | BaseParameter[];
type Parameters = { [k: string]: Parameter };

export class Bot {
    constructor(private token: string) { }

    toString() {
        return `Bot ${this.token}`;
    }
}
export class OAuth2 {
    constructor(private token: string) { }

    toString() {
        return `Bearer ${this.token}`;
    }
}

export class BaseClient<Authorization extends Bot | OAuth2 | null> {
    constructor(public authorization: Authorization) { }

    async fetch(path: string, parameters?: Parameters, init?: RequestInit): Promise<unknown> {
        const url = new URL(`https://discord.com/api/v10${path}`);

        if (parameters) {
            for (const [key, value] of Object.entries(parameters)) {
                if (value !== null) url.searchParams.append(key, Array.isArray(value) ? value.filter(value => value !== null).map(value => value.toString()).join(",") : value.toString());
            }
        }

        const response = await globalThis.fetch(url, init);

        if (response.ok) {
            const contentType = response.headers.get("Content-Type");

            if (contentType === null) return;
            else switch (contentType) {
                case "application/json": return await response.json();
                case "image/png": return await response.blob();
                case "text/csv": return await response.text();
                default: throw new Error("Unexpected Content-Type");
            }
        }
        else {
            if (response.status === 429) throw new ClientRatelimitedResponse(response.statusText, await response.json() as RatelimitedResponse);
            else if (response.status >= 400 && response.status < 500) throw new ClientErrorResponse(response.status, response.statusText, await response.json() as ErrorResponse);
            else throw new HTTPError(response.status, response.statusText);
        }
    }

    get(path: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { headers };

        if (this.authorization) headers.set("Authorization", this.authorization.toString());

        return this.fetch(path, parameters, init);
    }

    post(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { headers };
        
        if (this.authorization) headers.set("Authorization", this.authorization.toString());
        if (reason) headers.set("X-Audit-Log-Reason", reason);
        if (body) {
            if (body instanceof FormData || body instanceof URLSearchParams) {
                init.body = body;
            }
            else {
                init.body = JSON.stringify(body);
                headers.set("Content-Type", "application/json");
            }
        }

        return this.fetch(path, parameters, init);
    }

    put(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { headers };
        
        if (this.authorization) headers.set("Authorization", this.authorization.toString());
        if (reason) headers.set("X-Audit-Log-Reason", reason);
        if (body) {
            if (body instanceof FormData || body instanceof URLSearchParams) {
                init.body = body;
            }
            else {
                init.body = JSON.stringify(body);
                headers.set("Content-Type", "application/json");
            }
        }

        return this.fetch(path, parameters, init);
    }

    patch(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { headers };
        
        if (this.authorization) headers.set("Authorization", this.authorization.toString());
        if (reason) headers.set("X-Audit-Log-Reason", reason);
        if (body) {
            if (body instanceof FormData || body instanceof URLSearchParams) {
                init.body = body;
            }
            else {
                init.body = JSON.stringify(body);
                headers.set("Content-Type", "application/json");
            }
        }

        return this.fetch(path, parameters, init);
    }

    delete(path: string, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        if (this.authorization) headers.set("Authorization", this.authorization.toString());
        if (reason) headers.set("X-Audit-Log-Reason", reason);

        return this.fetch(path, parameters, { method: "delete", headers });
    }
}

export function getFormData<T>(json: T, attachments: MessageAttachmentRequest[]) {
    const formData = new FormData();
    formData.append("payload_json", JSON.stringify(json, (key, value) => {
        return value instanceof Blob ? undefined : value
    }));

    for (const { id, data, filename } of attachments) {
        formData.append(`files[${id}]`, data, filename ?? undefined);
    }

    return formData;
}
