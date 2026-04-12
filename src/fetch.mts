import { SecurityScheme } from "./security_schemes.mjs";

export class BaseClient<const SecuritySchemes extends readonly SecurityScheme[]> {
    constructor(public security_schemes: SecuritySchemes) { }

    fetch(input: URL, init: RequestInit & { headers: Headers }): Promise<Response> {
        for (const security_scheme of this.security_schemes) {
            switch (security_scheme.type) {
                case "apiKey": {
                    switch (security_scheme.in) {
                        case "query": {
                            input.searchParams.append(security_scheme.name, security_scheme.token);

                            break;
                        }
                        case "header": {
                            init.headers.append(security_scheme.name, security_scheme.token);

                            break;
                        }
                        case "cookie": {
                            init.headers.append("cookie", `${security_scheme.name}=${security_scheme.token}`);

                            break;
                        }
                    }

                    break;
                }
                case "oauth2": {
                    init.headers.append("Authorization", `Bearer ${security_scheme.token}`);

                    break;
                }
            }
        }

        return globalThis.fetch(input, init);
    }
}
