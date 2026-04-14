import { SnowflakeType, ErrorResponse, RatelimitedResponse, MessageAttachmentRequest } from "./types.mjs";
import { fetch as fetchRateLimited } from "./fetch-rate-limit.mjs";

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

const enum Scope {

}

class Application {
    constructor(public id: SnowflakeType, public secret: string) { }

    async exchangeToken(client_id: SnowflakeType, client_secret: string, code: string, redirect_uri: string) {
        const { access_token, refresh_token, expires_in, scope } = await fetchAPI("/oauth2/token", undefined, {
            method: "POST",
            body: new URLSearchParams({ client_id, client_secret, code, "grant_type": "authorization_code", redirect_uri })
        }) as { access_token: string, refresh_token: string, expires_in: number, scope: string };

        return new OAuth2(this, access_token, refresh_token, new Date(Date.now() + expires_in * 1000), scope.split(" ") as unknown as Scope[]);
    }
}

export class OAuth2 {
    constructor(public application: Application, public access_token: string, public refresh_token: string, public expires: Date, public scopes: Scope[]) { }

    async refresh() {
        const tokens = await fetchAPI("/oauth2/token", undefined, {
            method: "POST",
            body: new URLSearchParams({ client_id: this.application.id, client_secret: this.application.secret, refresh_token: this.refresh_token, "grant_type": "refresh_token" })
        }) as { access_token: string, refresh_token: string, expires_in: number, scope: string };

        this.access_token = tokens.access_token;
        this.access_token = tokens.access_token;
        this.refresh_token = tokens.refresh_token;
        this.expires = new Date(Date.now() + tokens.expires_in * 1000);
        this.scopes = tokens.scope.split(" ") as unknown as Scope[];
    }

    toString() {
        return `Bearer ${this.access_token}`;
    }
}

async function fetchAPI(path: string, parameters?: Parameters, init?: RequestInit): Promise<unknown> {
    const url = new URL(`https://discord.com/api/v10${path}`);

    if (parameters) {
        for (const [key, value] of Object.entries(parameters)) {
            if (value !== null) url.searchParams.append(key, Array.isArray(value) ? value.filter(value => value !== null).map(value => value.toString()).join(",") : value.toString());
        }
    }

    const response = await fetchRateLimited(url, init);

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
    constructor(public authorization: Authorization) { }

    get(path: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { headers };

        if (this.authorization) headers.set("Authorization", this.authorization.toString());

        return fetchAPI(path, parameters, init);
    }

    post(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { method: "POST", headers };

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

        return fetchAPI(path, parameters, init);
    }

    put(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { method: "PUT", headers };

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

        return fetchAPI(path, parameters, init);
    }

    patch(path: string, body?: unknown, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        const init: RequestInit = { method: "PATCH", headers };

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

        return fetchAPI(path, parameters, init);
    }

    delete(path: string, reason?: string, parameters?: Parameters) {
        const headers = new Headers;
        if (this.authorization) headers.set("Authorization", this.authorization.toString());
        if (reason) headers.set("X-Audit-Log-Reason", reason);

        return fetchAPI(path, parameters, { method: "DELETE", headers });
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
