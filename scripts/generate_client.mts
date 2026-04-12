import type { Schema } from "@adrien-simonnet/json-schema-to-typescript/types";

import type * as OpenAPI from "@adrien-simonnet/openapi-to-typescript/types";

import * as ConvertType from "./convert_type.mts"


import ts from "typescript";

export type SchemaConverter = (schema: Schema) => ts.TypeNode;

const importerSchemasIdentifier = "Schemas";

const factory = ts.factory;


const specialWords = {
    "dm": "DM"
}

function toPascalCase(snake_case: string, special_words: Record<string, string> = {}) {
    return snake_case.split('_').map(word => special_words[word] ?? word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function toCamelCase(snake_case: string, special_words: Record<string, string> = {}) {
    const pascalCase = toPascalCase(snake_case, special_words);
    return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
}

const withParams = {
    get: 0,
    patch: 0,
    put: 0,
    post: 0,
    delete: 0
};
const withBody = {
    get: 0,
    patch: 0,
    put: 0,
    post: 0,
    delete: 0
};
const methods = {
    get: 0,
    patch: 0,
    put: 0,
    post: 0,
    delete: 0
};

function generateSearchParams(parameters: OpenAPI.Parameter[], converter: SchemaConverter) {
    const queryParams = parameters.filter(param => param.in === "query");
    //queryParams.filter(param => !((param.schema.$ref === "#/components/schemas/SnowflakeType" || (typeof param.schema.type === "string" && ["integer", "boolean", "string", "number"].includes(param.schema.type))))).forEach(param => console.log(param.name, param.schema));
    const searchParamsIdentifier = factory.createIdentifier("searchParams");

    const declareSearchParams = factory.createVariableStatement(
        undefined,
        factory.createVariableDeclarationList(
            [
                factory.createVariableDeclaration(
                    searchParamsIdentifier,
                    undefined,
                    undefined,
                    factory.createNewExpression(
                        factory.createIdentifier("URLSearchParams"),
                        undefined,
                        []
                    )
                )
            ],
            ts.NodeFlags.Const
        )
    )
    const instructions: ts.Statement[] = [];

    for (const queryParam of queryParams) {
        const identifier = factory.createIdentifier(queryParam.name);
        const ifQueryPresent = factory.createIfStatement(
            factory.createBinaryExpression(
                identifier,
                ts.SyntaxKind.ExclamationEqualsEqualsToken,
                factory.createIdentifier("undefined")
            ),
            factory.createExpressionStatement(
                factory.createCallExpression(
                    factory.createPropertyAccessExpression(
                        searchParamsIdentifier,
                        "append"
                    ),
                    undefined,
                    [
                        factory.createStringLiteral(queryParam.name),
                        factory.createCallExpression(
                            factory.createPropertyAccessExpression(
                                identifier,
                                "toString"
                            ),
                            undefined,
                            []
                        )
                    ]
                )
            ),
            undefined
        )
        //instructions.push(ifQueryPresent)
    }

    const required = queryParams.some(param => param.required);
    const queryParamsObject = factory.createTypeLiteralNode(queryParams.map(param => factory.createPropertySignature(undefined, param.name, param.required ? undefined : factory.createToken(ts.SyntaxKind.QuestionToken), converter(param.schema))))

    const destructuredQueryParameters = factory.createObjectBindingPattern(queryParams.map(param => factory.createBindingElement(undefined, undefined, param.name)));
    const parameterDeclaration = factory.createParameterDeclaration(undefined, undefined, "parameters", undefined, queryParamsObject, required ? undefined : factory.createObjectLiteralExpression());

    return {
        parameter: parameterDeclaration,
        instructions,
        identifier: factory.createIdentifier("parameters")
    }
}


const formDataCustom = {
    create_message: `body.attachments ? getFormData(body, body.attachments) : body`,
    update_message: `body.attachments ? getFormData(body, body.attachments) : body`,
    create_thread: `"message" in body && body.message.attachments ? getFormData(body, body.message.attachments) : body`,
    create_interaction_response: `"data" in body && body.data && "attachments" in body.data && body.data.attachments ? getFormData(body, body.data.attachments) : body`,
    create_lobby_message: `body.attachments ? getFormData(body, body.attachments) : body`,
    execute_webhook: `body.attachments ? getFormData(body, body.attachments) : body`,
    update_original_webhook_message: `body.attachments ? getFormData(body, body.attachments) : body`,
    update_webhook_message: `body.attachments ? getFormData(body, body.attachments) : body`
}

export function generateMethodFromOperation(url: string, path: OpenAPI.PathItem, method: string, operation: OpenAPI.Operation, convertType: SchemaConverter) {
    const istructions = [];
    const initParameters: ts.ObjectLiteralElementLike[] = [];


    const functionParams = [];


    const parameters = path.parameters ? operation.parameters ? [...path.parameters, ...operation.parameters] : path.parameters : operation.parameters ?? [];

    const pathParams = parameters.filter(param => param.in === "path");
    console.assert(pathParams.every(param => param.required), "");
    const queryParams = parameters.filter(param => param.in === "query");

    if (queryParams.length > 0) {
        withParams[method as keyof typeof methods]++;
    }


    functionParams.push(...pathParams.map(param => factory.createParameterDeclaration(undefined, undefined, factory.createIdentifier(param.name), undefined, convertType(param.schema), undefined)))

    methods[method as keyof typeof methods]++
    if (operation.requestBody) withBody[method as keyof typeof withBody]++

    function parseFullURL(url: string) {
        const firstParamIndex = url.indexOf("{");

        if (firstParamIndex >= 0) {
            const head = url.slice(0, firstParamIndex);
            const spans = url.slice(firstParamIndex);

            return factory.createTemplateExpression(factory.createTemplateHead(head), parseURLSpans(spans)!);
        }
        else {
            return factory.createStringLiteral(url);
        }
    }

    function parseURLSpans(url: string): null | ts.TemplateSpan[] {
        const match = url.match(/^{(.*?)}([^{]*)(.*)$/);

        if (match) {
            const [, identifier, tail, rest] = match as [string, string, string, string];

            const next = parseURLSpans(rest);

            if (next !== null) {
                return [factory.createTemplateSpan(factory.createIdentifier(identifier), factory.createTemplateMiddle(tail)), ...next];
            }
            else {
                return [factory.createTemplateSpan(factory.createIdentifier(identifier), factory.createTemplateTail(tail))];
            }
        }
        else {
            return null;
        }
    }

    const fetchInput = parseFullURL(url);

    const apiCallArguments: ts.Expression[] = [];

    if (method === "get") {
        if (queryParams.length > 0) {
            const { parameter, instructions, identifier } = generateSearchParams(queryParams, convertType);
            istructions.push(...instructions);
            functionParams.push(parameter);
            apiCallArguments.push(identifier);
        }
    }
    else if (method === "delete") {
        {
            const reasonIdentifier = factory.createIdentifier("reason");
            functionParams.push(factory.createParameterDeclaration(undefined, undefined, "reason", factory.createToken(ts.SyntaxKind.QuestionToken), factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)))
            apiCallArguments.push(reasonIdentifier);
        }
        if (queryParams.length > 0) {
            const { parameter, instructions, identifier } = generateSearchParams(queryParams, convertType);
            istructions.push(...instructions);
            functionParams.push(parameter);
            apiCallArguments.push(identifier);
        }
    }
    else {
        if (operation.requestBody) {
            const bodyIdentifier = factory.createIdentifier("body");

            console.assert(operation.requestBody.required, operation.requestBody);

            const content = operation.requestBody.content;

            if (content["multipart/form-data"]) {
                const custom = formDataCustom[operation.operationId! as keyof typeof formDataCustom];

                if (custom && content["application/json"] && content["application/json"].schema) {
                    const bodyValue = factory.createIdentifier(formDataCustom[operation.operationId! as keyof typeof formDataCustom]);

                    functionParams.push(factory.createParameterDeclaration(undefined, undefined, factory.createIdentifier("body"), undefined, convertType(content["application/json"].schema), undefined));

                    apiCallArguments.push(bodyValue);
                }
                else {
                    const newFormData = ts.factory.createNewExpression(ts.factory.createIdentifier("FormData"), undefined, []);
                    const bodyValue = factory.createIdentifier("body");

                    functionParams.push(factory.createParameterDeclaration(undefined, undefined, factory.createIdentifier("body"), undefined, convertType(content["multipart/form-data"].schema), undefined));

                    apiCallArguments.push(bodyValue);
                }

            }
            else if (content["application/json"]) {
                functionParams.push(factory.createParameterDeclaration(undefined, undefined, bodyIdentifier, undefined, convertType(content["application/json"].schema), undefined));
                initParameters.push(ts.factory.createShorthandPropertyAssignment("body"));
                apiCallArguments.push(bodyIdentifier);
            }

        }
        else {
            apiCallArguments.push(factory.createIdentifier("undefined"));
        }

        {
            const reasonIdentifier = factory.createIdentifier("reason");
            functionParams.push(factory.createParameterDeclaration(undefined, undefined, "reason", factory.createToken(ts.SyntaxKind.QuestionToken), factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)))
            apiCallArguments.push(reasonIdentifier);
        }
        if (queryParams.length > 0) {
            const { parameter, instructions, identifier } = generateSearchParams(queryParams, convertType);
            istructions.push(...instructions);
            functionParams.push(parameter);
            apiCallArguments.push(identifier);
        }
    }

    function getReturnType(content: OpenAPI.Response["content"]) {
        if (content) {
            if (content["application/json"]) {
                if (content["application/json"].schema.$ref && !content["application/json"].schema.$ref.includes("Response")) {
                    console.log(content["application/json"].schema.$ref)
                }
                return convertType(content["application/json"].schema);
            }
            else {
                console.log(content);
                return factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
            }
        }
        else {
            return factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
        }
    }

    for (const code in operation.responses) {
        switch (code) {
            case "200":
            case "201":
            case "202":
            case "204": continue;
            default: {
                if (code.startsWith("4")) continue;
                else throw new Error(`Unexpected response code: ${code}`);
            }
        }
    }

    const returnType = factory.createTypeReferenceNode(
            "Promise", [factory.createUnionTypeNode(Object.entries(operation.responses).filter(([code]) => code.startsWith("2")).map(([, response]) => getReturnType(response.content)))]);

    const apiCall = ts.factory.createReturnStatement(factory.createAsExpression(factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(factory.createThis(), factory.createIdentifier(method.toLowerCase())),
        [],
        [
            fetchInput,
            ...apiCallArguments
        ]
    ), returnType));

    const body2 = factory.createBlock(
        [
            ...istructions,
            apiCall,
            //...responses,
            //ts.factory.createThrowStatement(ts.factory.createNewExpression(ts.factory.createIdentifier("Error"), undefined, [ts.factory.createStringLiteral("Unexpected response status")]))
        ],
        true
    );

    return factory.createMethodDeclaration(
        [], // async
        undefined,                     // asteriskToken (generator)
        toCamelCase(operation.operationId!, specialWords),                   // nom de la méthode
        undefined,
        undefined,                     // typeParameters
        functionParams,                    // paramètres
        undefined, // type de retour
        body2                            // corps
    );

    //return `async ${operation.operationId}(${stringParams}) { ${queryString ? `${queryString};\n` : ""}\n${apiCallString}\n${responses.join('\n')}\n}\n`;
}

export function generateMethods(paths: Record<string, OpenAPI.PathItem>, convertType: SchemaConverter) {
    return Object.entries(paths).flatMap(([url, path]) => Object.entries(path).filter(([method]) => ["get", "post", "put", "patch", "delete"].includes(method)).map(([method, operation]) => generateMethodFromOperation(url, path, method, operation, convertType)));
}

export function generateSourceFile2(paths: Record<string, OpenAPI.PathItem>, convertType: SchemaConverter) {
    return `import * as ${importerSchemasIdentifier} from "./types.mjs";
import { Client, getFormData } from "./fetch.mjs"

export class BaseClient extends Client {
    constructor(public token: string) {
        super(\`Bot \${token}\`);
    }

    ${generateMethods(paths, convertType)}
}`
}

export function generateClass(spec: OpenAPI.OpenAPI, convertType: SchemaConverter) {
    const methods = generateMethods(spec.paths, convertType);
    const servers = spec.servers && spec.servers.length > 0 ? spec.servers.map(server => server.url) : ["/"];

    return factory.createClassDeclaration(
        [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        "Client",
        [
            factory.createTypeParameterDeclaration([],
  "Authorization",
  factory.createUnionTypeNode([
    ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Bot")),
    ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("OAuth2")),
    factory.createLiteralTypeNode(factory.createNull())
  ]),
  undefined
)
        ],
        [factory.createHeritageClause(
            ts.SyntaxKind.ExtendsKeyword,
            [
                factory.createExpressionWithTypeArguments(
                    factory.createIdentifier("BaseClient"),
                    [factory.createTypeReferenceNode(factory.createIdentifier("Authorization"))]
                )
            ]
        )]
        ,
        [
            /*factory.createConstructorDeclaration(
                undefined,
                [
                    factory.createParameterDeclaration(
                        [factory.createModifier(ts.SyntaxKind.PublicKeyword)],
                        undefined,
                        "client",
                        undefined,
                        factory.createTypeReferenceNode(
                            "BaseClient",
                            [factory.createTypeReferenceNode("SecuritySchemes")]
                        ),
                        undefined
                    ),
                    factory.createParameterDeclaration(
                        [factory.createModifier(ts.SyntaxKind.PublicKeyword)],
                        undefined,
                        "server",
                        undefined,
                        factory.createUnionTypeNode(servers.map(server => factory.createLiteralTypeNode(factory.createStringLiteral(server)))),
                        factory.createStringLiteral(servers[0]!)
                    )
                ],
                factory.createBlock([], true)
            ),*/
            ...methods
        ]
    )
}

export function generateSourceFile(spec: OpenAPI.OpenAPI, convertType: SchemaConverter) {
    const import_schemas = factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
            false,
            undefined,
            factory.createNamespaceImport(
                factory.createIdentifier("Schemas")
            )
        ),
        factory.createStringLiteral("./types.mjs"),
        undefined
    )

    const import_base_client = factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
            false,
            undefined,
            factory.createNamedImports([
                factory.createImportSpecifier(false, undefined, factory.createIdentifier("BaseClient")),
                factory.createImportSpecifier(false, undefined, factory.createIdentifier("getFormData")),
                factory.createImportSpecifier(false, undefined, factory.createIdentifier("Bot")),
                factory.createImportSpecifier(false, undefined, factory.createIdentifier("OAuth2"))
            ])
        ),
        factory.createStringLiteral("./base_client.mjs"),
        undefined
    )

    const client_class = generateClass(spec, convertType);

    console.table([{ "name": "#Methods", ...methods }, { "name": "With Params", ...withParams }, { "name": "With Body", ...withBody }], ["name", "get",
        "patch",
        "put",
        "post",
        "delete"])

    return ts.factory.createSourceFile([import_schemas, import_base_client, client_class], ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.None);
}
