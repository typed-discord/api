import ts from "typescript";

const factory = ts.factory;

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const sourceFile = ts.createSourceFile(
    "generated.ts",
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
);

type BaseValue = string | number | boolean | null;

export interface OpenApiPathItem {
    parameters?: OpenApiParameter[];
    get?: OpenApiOperation;
    post?: OpenApiOperation;
    put?: OpenApiOperation;
    patch?: OpenApiOperation;
    delete?: OpenApiOperation;
    options?: OpenApiOperation;
    head?: OpenApiOperation;
    trace?: OpenApiOperation;
}

export interface OpenApiOperation {
    operationId?: string;
    summary?: string;
    description?: string;
    tags?: string[];
    parameters?: OpenApiParameter[];
    requestBody?: OpenApiRequestBody;
    responses: Record<string, OpenApiResponse>;
}

export interface OpenApiParameter {
    name: string;
    in: "path" | "query" | "header" | "cookie";
    required?: boolean;
    schema: Schema;
}

export interface OpenApiRequestBody {
    required?: boolean;
    content: Record<string, OpenApiMediaType>;
}

export interface OpenApiResponse {
    description: string;
    content?: Record<string, OpenApiMediaType>;
}

export interface OpenApiMediaType {
    schema: Schema;
}

interface Schema {
    type?: string | string[];
    properties?: { [key: string]: Schema };
    required?: string[];
    items?: Schema;
    $ref?: string;
    oneOf?: Schema[];
    allOf?: Schema[];
    anyOf?: Schema[];
    additionalProperties?: Schema;
    const?: BaseValue;
    enum?: BaseValue[];
}

/*
function filterPropsByType(type, props) {
  const typeMap = {
    string: ['maxLength','minLength','pattern','format'],
    number: ['minimum','maximum','exclusiveMinimum','exclusiveMaximum','multipleOf'],
    integer: ['minimum','maximum','exclusiveMinimum','exclusiveMaximum','multipleOf'],
    object: ['properties','required','additionalProperties','patternProperties','dependencies'],
    array: ['items','additionalItems','minItems','maxItems','uniqueItems'],
    boolean: [],
    null: []
  };
  const allowed = typeMap[type] || [];
  return Object.fromEntries(Object.entries(props).filter(([k]) => allowed.includes(k)));
}
*/
function extractRefName(ref: string) {
    const parts = ref.split('/');
    const schemaName = parts[parts.length - 1] as string;

    return factory.createTypeReferenceNode(
        ts.factory.createQualifiedName(
            ts.factory.createIdentifier("Schemas"),
            ts.factory.createIdentifier(schemaName)
        ),
        undefined
    );
}


function convertBaseValueToNode(value: BaseValue) {
    if (value === null) {
        return factory.createNull();
    }
    else switch (typeof value) {
        case "string": return factory.createStringLiteral(value);
        case "number": return factory.createNumericLiteral(value);
        case "boolean": return value ? factory.createTrue() : factory.createFalse();
        default: throw new Error(`Unexpected value: ${value}`);
    }
}

function convertBaseValueToTypeNode(value: BaseValue): ts.TypeNode {
    return factory.createLiteralTypeNode(convertBaseValueToNode(value));
}

export function convertType(schema: Schema): ts.TypeNode {
    if (schema.const !== undefined) return convertBaseValueToTypeNode(schema.const);
    if (schema.$ref) return extractRefName(schema.$ref);

    if (Array.isArray(schema.type)) return factory.createUnionTypeNode(schema.type.map(type => convertType({ ...schema, type })));

    if (schema.enum && schema.enum.length > 0) return schema.enum.length === 1 ? convertBaseValueToTypeNode(schema.enum[0]) : factory.createUnionTypeNode(schema.enum.map(convertBaseValueToTypeNode));
    if (schema.oneOf && schema.oneOf.length > 0) return factory.createUnionTypeNode(schema.oneOf.map(convertType));
    if (schema.allOf && schema.allOf.length > 0) return factory.createIntersectionTypeNode(schema.allOf.map(convertType));
    if (schema.anyOf && schema.anyOf.length > 0) return factory.createUnionTypeNode(schema.anyOf.map(convertType));

    switch (schema.type) {
        case 'number':
        case 'integer': return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
        case 'null': return factory.createLiteralTypeNode(factory.createNull());
        case 'string': return factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
        case 'boolean': return factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
        case 'array': return factory.createArrayTypeNode(convertType(schema.items!));
        case 'object':
            if (schema.properties) return factory.createTypeLiteralNode(Object.entries(schema.properties).map(([key, value]) => factory.createPropertySignature(undefined, ts.factory.createStringLiteral(key), schema.required?.includes(key) ? undefined : factory.createToken(ts.SyntaxKind.QuestionToken), convertType(value))));
            else if (schema.additionalProperties) {
                return factory.createTypeLiteralNode([
                    factory.createIndexSignature(undefined, [
                        ts.factory.createParameterDeclaration(undefined, undefined, "key", undefined, factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), undefined)
                    ], convertType(schema.additionalProperties))
                ]);
            } else return factory.createTypeLiteralNode([]);
        default:
            console.log(schema);
            return factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
    }
}

export function convertSchema(schema: Schema, schemaName: string) {
    const modifiers = [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)];
    const identifier = ts.factory.createIdentifier(schemaName);
    const type = convertType(schema);

    if (ts.isTypeLiteralNode(type)) return ts.factory.createInterfaceDeclaration(modifiers, identifier, undefined, undefined, type.members);
    else return ts.factory.createTypeAliasDeclaration(modifiers, identifier, undefined, type);
}

export function printType(type: ts.Node): string {
    return printer.printNode(ts.EmitHint.Unspecified, type, sourceFile)
}


export function printFile(nodes: ts.Statement[]) {
    const sourceFile = ts.factory.createSourceFile(nodes, ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.None);
    return printer.printFile(sourceFile);
}
