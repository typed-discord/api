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

export async function fetchapi<T>(path: string, parameters?: URLSearchParams, init?: RequestInit): Promise<T> {
    const host = "https://discord.com/api/v10";
    const url = parameters && parameters.size > 0 ? `${host}${path}?${parameters.toString()}` : `${host}${path}`;

    const response = await globalThis.fetch(url, init);

    switch (response.status) {
        case 200:
        case 201: return await response.json() as T;
        case 204: return undefined as T;
        case 429: throw new ClientRatelimitedResponse(response.statusText, await response.json() as RatelimitedResponse);
        default: {
            if (response.status >= 400 && response.status < 500) {
                throw new ClientErrorResponse(response.status, response.statusText, await response.json() as ErrorResponse);
            }
            else {
                throw new HTTPError(response.status, response.statusText);
            }
        }
    }
}

export class BaseClient {
    constructor(public authorization: string) {
    }

    get<T>(path: string, parameters?: URLSearchParams): Promise<T> {
        return fetchapi(path, parameters, {
            headers: {
                "Authorization": this.authorization
            }
        });
    }

    post<T>(path: string, body?: unknown, reason?: string, parameters?: URLSearchParams): Promise<T> {
        const headers = new Headers({
                "Authorization": this.authorization
            });
        const init: RequestInit = { method: "post", headers };

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
        return fetchapi(path, parameters, init);
    }
    
    put<T>(path: string, body?: unknown, reason?: string, parameters?: URLSearchParams): Promise<T> {
        const headers = new Headers({
                "Authorization": this.authorization
            });;
        const init: RequestInit = { method: "put", headers };

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
        return fetchapi(path, parameters, init);
    }
    
    patch<T>(path: string, body?: unknown, reason?: string, parameters?: URLSearchParams): Promise<T> {
        const headers = new Headers({
                "Authorization": this.authorization
            });;
        const init: RequestInit = { method: "patch", headers };

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
        return fetchapi(path, parameters, init);
    }
    
    delete<T>(path: string, reason?: string, parameters?: URLSearchParams): Promise<T> {
        const headers = new Headers({
            "Authorization": this.authorization
        });

        if (reason) headers.set("X-Audit-Log-Reason", reason);

        return fetchapi(path, parameters, { method: "delete", headers });
    }
}

export function getFormData<T>(json: T, attachments?: MessageAttachmentRequest[] | null) {
    if (attachments) {
        const formData = new FormData();
        formData.append("payload_json", JSON.stringify(json, (key, value) => {
            return value instanceof Blob ? undefined : value
        }));

        if (attachments) for (const { id, data, filename } of attachments as any) {
            formData.append(`files[${id}]`, data, filename ?? undefined);
        }

        return formData;
    }
    else {
        return json;
    }
}

