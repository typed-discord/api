import * as fs from 'fs';
import * as path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import ts from "typescript"
import type * as OpenAPI from "@adrien-simonnet/openapi-to-typescript/types";

import { generateSourceFile as generateBuildersSourceFile } from './generate_builders.mts';
import { generateMethods } from "@adrien-simonnet/openapi-to-typescript/generator";
import * as OpenAPIGenerator from "@adrien-simonnet/openapi-to-typescript";

const spec = await fetch("https://raw.githubusercontent.com/discord/discord-api-spec/refs/heads/main/specs/openapi.json").then(res => res.json()) as OpenAPI.OpenAPI;

const components = spec.components ?? {};
const schemas = components.schemas ?? {};

schemas["CreateMessageInteractionCallbackRequest"] = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "const": 4,
            "allOf": [
                {
                    "$ref": "#/components/schemas/InteractionCallbackTypes"
                }
            ]
        },
        "data": {
            "$ref": "#/components/schemas/IncomingWebhookInteractionRequest"
        }
    },
    "required": [
        "type",
        "data"
    ]
}

schemas["DeferredCreateMessageInteractionCallbackRequest"] = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "const": 5,
            "allOf": [
                {
                    "$ref": "#/components/schemas/InteractionCallbackTypes"
                }
            ]
        },
        "data": {
            "oneOf": [
                {
                    "type": "null"
                },
                {
                    "$ref": "#/components/schemas/IncomingWebhookInteractionRequest"
                }
            ]
        }
    },
    "required": [
        "type"
    ]
}

schemas["DeferredUpdateMessageInteractionCallbackRequest"] = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "const": 6,
            "allOf": [
                {
                    "$ref": "#/components/schemas/InteractionCallbackTypes"
                }
            ]
        }
    },
    "required": [
        "type"
    ]
}

schemas["UpdateMessageInteractionCallbackRequest"] = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "const": 7,
            "allOf": [
                {
                    "$ref": "#/components/schemas/InteractionCallbackTypes"
                }
            ]
        },
        "data": {
            "$ref": "#/components/schemas/IncomingWebhookUpdateForInteractionCallbackRequestPartial"
        }
    },
    "required": [
        "type",
        "data"
    ]
}

const interactions = [
    {
        "$ref": "#/components/schemas/ApplicationCommandAutocompleteCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/CreateMessageInteractionCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/DeferredCreateMessageInteractionCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/LaunchActivityInteractionCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/ModalInteractionCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/PongInteractionCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/UpdateMessageInteractionCallbackRequest"
    },
    {
        "$ref": "#/components/schemas/DeferredUpdateMessageInteractionCallbackRequest"
    }
]
const content = spec.paths["/interactions/{interaction_id}/{interaction_token}/callback"]!.post!.requestBody!.content!;

content["application/json"]!.schema!.anyOf! = interactions;
content["application/x-www-form-urlencoded"]!.schema!.anyOf! = interactions;
content["multipart/form-data"]!.schema!.anyOf! = interactions;

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

function printSourceFile(filename: string, source: ts.SourceFile) {
    const string = printer.printFile(source);
    fs.writeFileSync(filename, string);
}

const schemasSource = OpenAPIGenerator.SchemasGenerator.generateSchemasSourceFile(spec.components!.schemas);
printSourceFile("./types.mts", schemasSource);
const buildersSources = generateBuildersSourceFile(schemasSource);
printSourceFile("./builders.mts", buildersSources);
const clientMethods = generateMethods(spec.paths);

const sourceFile = ts.createSourceFile(
    "generated.ts",
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
);

fs.writeFileSync("./client.mts", `import * as Schemas from "./types.mjs";
import { BaseClient, getFormData } from "./fetch.mjs"

export class Client extends BaseClient {
    constructor(public token: string) {
        super(\`Bot \${token}\`);
    }

    ${clientMethods.map(method => printer.printNode(ts.EmitHint.Unspecified, method, sourceFile)).join("\n\n")}
}`);
