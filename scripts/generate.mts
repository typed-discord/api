import * as fs from 'fs';
import * as path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import ts from "typescript"
import type * as OpenAPI from "@adrien-simonnet/openapi-to-typescript/types";

import { generateSourceFile as generateBuildersSourceFile } from './generate_builders.mts';
//import { generateSourceFile } from "@adrien-simonnet/openapi-to-typescript/client-generator";
import { generateSourceFile } from "./generate_client.mts"
import * as OpenAPIGenerator from "@adrien-simonnet/openapi-to-typescript";

const spec = await fetch("https://raw.githubusercontent.com/discord/discord-api-spec/refs/heads/main/specs/openapi.json").then(res => res.json()) as OpenAPI.OpenAPI;

const components = spec.components ?? {};
const schemas = components.schemas ?? {};

schemas["CreateMessageInteractionCallbackRequest"] = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "enum": [4],
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
            "enum": [5],
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
            "enum": [6],
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
            "enum": [7],
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

import * as Schemas from "./convert_type.mts"

import { factory } from 'typescript';

function extractRefSchemaName(ref: string) {
    const parts = ref.split('/');
    return parts[parts.length - 1] as string;
}

function extractRefName(ref: string) {
    const schemaName = extractRefSchemaName(ref);

    return ts.factory.createIdentifier(schemaName);
}

function extractFullRefName(ref: string) {
    const schemaName = extractRefSchemaName(ref);

    return ts.factory.createQualifiedName(
            ts.factory.createIdentifier("Schemas"),
            ts.factory.createIdentifier(schemaName)
        )
}

//const schemasSource = OpenAPIGenerator.SchemasGenerator.generateSchemasSourceFile(spec.components!.schemas);
const schemasSource = Schemas.generateSourceFile(schemas, extractRefName);
printSourceFile("./types.mts", schemasSource);

//const securitySchemasSource = OpenAPIGenerator.SecuritySchemeGenerator.generateSecuritySchemesSourceFile(spec.components!.securitySchemes!);
//printSourceFile("./security.mts", securitySchemasSource);

const buildersSources = generateBuildersSourceFile(schemasSource);
printSourceFile("./builders.mts", buildersSources);
const clientSource = generateSourceFile(spec, schema => Schemas.convertType(schema, schemas, extractFullRefName));
printSourceFile("./client.mts", clientSource);


/*const sourceFile = ts.createSourceFile(
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
}`);*/
/*
export class BaseClient<Authorizations extends readonly unknown[]> {
    constructor(public authorizations: Authorizations) {
    }

}

export class Client<SecuritySchemes extends readonly SecurityScheme[]> {
    constructor(public client: BaseClient<SecuritySchemes>) {}

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
*/