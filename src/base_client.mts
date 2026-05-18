import type { SnowflakeType, ErrorResponse, RatelimitedResponse, MessageAttachmentRequest, OAuth2Scopes } from "./types.mjs";

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
    constructor(statusText: string, response: RatelimitedResponse) {
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

class Application {
    constructor(public id: SnowflakeType, public secret: string) { }

    async exchangeToken(client_id: SnowflakeType, client_secret: string, code: string, redirect_uri: string) {
        const { access_token, refresh_token, expires_in, scope } = await fetchAPI("POST", "/oauth2/token", undefined, undefined, new URLSearchParams({ client_id, client_secret, code, "grant_type": "authorization_code", redirect_uri })) as { access_token: string, refresh_token: string, expires_in: number, scope: string };

        return new OAuth2(this, access_token, refresh_token, new Date(Date.now() + expires_in * 1000), scope.split(" ") as unknown as OAuth2Scopes[]);
    }
}

export class OAuth2 {
    constructor(public application: Application, public access_token: string, public refresh_token: string, public expires: Date, public scopes: OAuth2Scopes[]) { }

    async refresh() {
        const tokens = await fetchAPI("POST", "/oauth2/token", undefined, undefined, new URLSearchParams({ client_id: this.application.id, client_secret: this.application.secret, refresh_token: this.refresh_token, "grant_type": "refresh_token" })) as { access_token: string, refresh_token: string, expires_in: number, scope: string };

        this.access_token = tokens.access_token;
        this.access_token = tokens.access_token;
        this.refresh_token = tokens.refresh_token;
        this.expires = new Date(Date.now() + tokens.expires_in * 1000);
        this.scopes = tokens.scope.split(" ") as unknown as OAuth2Scopes[];
    }

    toString() {
        return `Bearer ${this.access_token}`;
    }
}

async function fetchAPI(method: string, path: string, authorization?: string, parameters?: Parameters, body?: unknown, reason?: string, fetch?: typeof globalThis.fetch): Promise<unknown> {
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
    if (body) {
        if (body instanceof FormData || body instanceof URLSearchParams) {
            init.body = body;
        }
        else {
            init.body = JSON.stringify(body);
            headers.set("Content-Type", "application/json");
        }
    }

    const response = await (fetch ?? globalThis.fetch)(url, init);

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

export class BaseClient<Authorization extends Bot | OAuth2 | null> {
    constructor(public authorization: Authorization, public fetch = globalThis.fetch) { }

    get(path: string, parameters?: Parameters) {
        return fetchAPI("GET", path, this.authorization?.toString(), parameters, this.fetch);
    }

    post(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        return fetchAPI("POST", path, this.authorization?.toString(), parameters, body, reason, this.fetch);
    }

    put(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        return fetchAPI("PUT", path, this.authorization?.toString(), parameters, body, reason, this.fetch);
    }

    patch(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        return fetchAPI("PATCH", path, this.authorization?.toString(), parameters, body, reason, this.fetch);
    }

    delete(path: string, reason?: string, parameters?: Parameters) {
        return fetchAPI("DELETE", path, this.authorization?.toString(), parameters, undefined, reason, this.fetch);
    }
}

export function getFormData<T>(json: T, attachments: MessageAttachmentRequest[]) {
    const formData = new FormData();
    formData.append("payload_json", JSON.stringify(json, (_key, value) => {
        return value instanceof Blob ? undefined : value
    }));

    for (const { id, data, filename } of attachments) {
        formData.append(`files[${id}]`, data, filename ?? undefined);
    }

    return formData;
}
