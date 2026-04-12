export interface APIKey {
    type: "apiKey";
    name: string;
    in: "query" | "header" | "cookie";
    token: string;
}

export interface OAuth2 {
    type: "oauth2";
    token: string;
}

export type SecurityScheme = APIKey | OAuth2;
