import ts from "typescript";
import type { Schema, SchemaOrBoolean, BaseValue } from "@adrien-simonnet/json-schema-to-typescript/types";

export type ReferenceResolver = (ref: string) => ts.EntityName;

const factory = ts.factory;

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


function extractRefSchemaName(ref: string) {
    const parts = ref.split('/');
    return parts[parts.length - 1] as string;
}

function extractRefName(ref: string) {
    const schemaName = extractRefSchemaName(ref);

    return factory.createTypeReferenceNode(ts.factory.createIdentifier(schemaName));
}

function extractFullRefName(ref: string) {
    const schemaName = extractRefSchemaName(ref);

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



const {
    createArrayTypeNode,
    createFalse,
    createKeywordTypeNode,
    createIndexSignature,
    createIntersectionTypeNode,
    createLiteralTypeNode,
    createNull,
    createNumericLiteral,
    createParameterDeclaration,
    createPropertySignature,
    createRestTypeNode,
    createStringLiteral,
    createToken,
    createTrue,
    createTupleTypeNode,
    createTypeLiteralNode,
    createUnionTypeNode
} = factory;

export function attachJSDoc<T extends ts.Node>(node: T, schema: SchemaOrBoolean): T {
    if (typeof schema === "object") {
        const comment = convertComment(schema);

        if (comment) {
            ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, comment, true);
        }
    }

    return node;
}

export function convertComment(comment: Schema): string {
    const comments = [];

    if (comment.description) comments.push(`${comment.description.replace(/\*\//g, "*\\/")}`);
    if (comment.default !== undefined) comments.push(`@default ${JSON.stringify(comment.default)}`);
    if (comment.deprecated) comments.push(`@deprecated`);
    if (comment.examples) comments.push(comment.examples.map(example => `@example ${JSON.stringify(example)}`));

    return comments.length > 0 ? `*\n * ${comments.join("\n * ")}\n ` : "";
}

const unknown = createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
const never = createKeywordTypeNode(ts.SyntaxKind.NeverKeyword);


class UnknownSchemaPatternError extends Error {
    schema: Schema;
    constructor(message: string, schema: Schema) {
        super(message);
        this.schema = schema;
    }
}

function checkAllowedKeys(o: Schema, keys: string[], message: string) {
    const unexpected = Object.keys(o).filter(key => !keys.includes(key))
    if (unexpected.length > 0) {
    }
}

function checkOnlyAllowedKeys(o: Schema, keys: string[]) {
    return Object.keys(o).filter(key => !keys.includes(key)).length === 0;
}

export function convertType(schema: SchemaOrBoolean, schemas: Record<string, SchemaOrBoolean>, resolver: ReferenceResolver): ts.TypeNode {
    if (typeof schema === "boolean") return schema ? unknown : never;

    // 'title' is only present in enum declarations.
    if (schema.title !== undefined) throw new UnknownSchemaPatternError("'title' should not be present.", schema);

    // 'const' is only present in enum declarations.
    if (schema.const !== undefined) throw new UnknownSchemaPatternError("'const' key is not expected outside of an enum.", schema);

    // '$ref' is expected to be alone.
    if (schema.$ref) {
        if (checkOnlyAllowedKeys(schema, ["$ref", "description"])) return factory.createTypeReferenceNode(resolver(schema.$ref));
        else throw new UnknownSchemaPatternError("Unexpected keys with '$ref'.", schema);
    }

    if (schema.enum) {
        const { enum: enumValue, allOf, type, ...rest } = schema;

        if (enumValue.every(value => Number.isInteger(value) ? type === "integer" : typeof value === type)) {
            if (checkOnlyAllowedKeys(rest, ["description", "format"])) {
                // Referencing an enum.
                if (allOf) {
                    if (allOf.length === 1 && allOf[0] && typeof allOf[0] === "object" && allOf[0].$ref && checkOnlyAllowedKeys(allOf[0], ["$ref"])) {
                        const enumTargetName = extractRefSchemaName(allOf[0].$ref);
                        const enumTargetSchema = schemas[enumTargetName];

                        if (enumTargetSchema) {
                            if (isEnum(enumTargetSchema)) {
                                const targets = enumValue.map(item => {
                                    const target = enumTargetSchema.oneOf.find(item2 => item2.const === item);

                                    if (target) return factory.createTypeReferenceNode(
                                        factory.createQualifiedName(
                                            factory.createIdentifier(enumTargetName),
                                            factory.createIdentifier(target.title)
                                        ),
                                        undefined
                                    )
                                    else throw new Error;
                                });
                                return targets.length === 1 ? targets[0]! : factory.createUnionTypeNode(targets);
                            }
                        }
                    }
                    else {
                        throw new UnknownSchemaPatternError("Expected an enum reference.", schema);
                    }
                }
                // Normal enum.
                else {
                    return enumValue.length === 1 ? convertBaseValueToTypeNode(enumValue[0]!) : factory.createUnionTypeNode(enumValue.map(convertBaseValueToTypeNode));
                }
            }
            else throw new UnknownSchemaPatternError("Unexpected keys with 'enum'.", schema);
        }
        else {
            throw new UnknownSchemaPatternError("Incompatible enum type.", schema);
        }
    }

    if (Array.isArray(schema.type)) {
        const unexpected = Object.keys(schema).filter(key => ["allOf", "anyOf", "oneOf"].includes(key))
        if (unexpected.length > 0) {
            console.error("Unexpected keys belong oneOf: ", unexpected);
        }

        return factory.createUnionTypeNode(schema.type.map(type => convertType({ ...schema, type }, schemas, resolver)));
    }
    if (schema.oneOf && schema.oneOf.length > 0) {
        const unexpected = Object.keys(schema).filter(key => !["oneOf", 'type', 'format'].includes(key))
        if (unexpected.length > 0) {
            console.error("Unexpected keys belong oneOf: ", unexpected);
        }

        return factory.createUnionTypeNode(schema.oneOf.map(item => convertType(item, schemas, resolver)));
    }


    if (schema.allOf && schema.allOf.length > 0) return factory.createIntersectionTypeNode(schema.allOf.map(schmea => convertType(schmea, schemas, resolver)));
    if (schema.anyOf && schema.anyOf.length > 0) {
        return factory.createUnionTypeNode(schema.anyOf.map(item => convertType(item, schemas, resolver)));
    }


    switch (schema.type) {
        case 'number':
        case 'integer': return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        case 'null': return factory.createLiteralTypeNode(factory.createNull());
        case 'string': {
            if (schema.format === "snowflake") return factory.createTemplateLiteralType(
                factory.createTemplateHead(""),
                [
                    factory.createTemplateLiteralTypeSpan(
                        factory.createKeywordTypeNode(ts.SyntaxKind.BigIntKeyword),
                        factory.createTemplateTail("")
                    )
                ]
            )
            else return factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
        }
        case 'boolean': return factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
        case 'array': return factory.createArrayTypeNode(convertType(schema.items!, schemas, resolver));
        case 'object': {
            if (schema.properties && Object.keys(schema.properties).length > 0) {
                if (typeof schema.additionalProperties === "object") console.warn(`"properties" and "additionalProperties" are not supported together, only "properties" are exported.`);

                const members = Object.entries(schema.properties).map(([key, value]) => {
                    const signature = factory.createPropertySignature(undefined, factory.createStringLiteral(key), schema.required?.includes(key) ? undefined : factory.createToken(ts.SyntaxKind.QuestionToken), convertType(value, schemas, resolver));
                    return attachJSDoc(signature, value);
                });

                return factory.createTypeLiteralNode(members);
            }
            else {
                const type = convertType(schema.additionalProperties ?? false, schemas, resolver);
                const signature = factory.createIndexSignature(undefined, [
                    factory.createParameterDeclaration(undefined, undefined, "additionalProperties", undefined, factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), undefined)
                ], type);
                return factory.createTypeLiteralNode([signature]);
            }
        }
        default:
            checkAllowedKeys(schema, [], "type not found in ");
            return factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
    }
}

export function isEnum(schema: SchemaOrBoolean): schema is { oneOf: { const: BaseValue; title: string }[] } {
    return (typeof schema === "object") && (schema.oneOf !== undefined) && schema.oneOf.every(item => typeof item === "object" && item.const !== undefined && item.title);
}

export function convertSchema(schema: SchemaOrBoolean, schemaName: string, schemas: Record<string, SchemaOrBoolean>, resolver: ReferenceResolver) {
    const exportModifier = ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);

    // Found an enum
    if (isEnum(schema)) {
        return factory.createEnumDeclaration(
            [
                exportModifier,
                factory.createModifier(ts.SyntaxKind.ConstKeyword)
            ],
            schemaName,
            schema.oneOf.map((item: any) => {
                const { title: name, const: value, ...rest } = item;

                return attachJSDoc(factory.createEnumMember(
                    factory.createStringLiteral(name!),
                    convertBaseValueToNode(value)
                ), rest);
            }
            ))

    }
    else {
        const identifier = ts.factory.createIdentifier(schemaName);
        const type = convertType(schema, schemas, resolver);

        if (ts.isTypeLiteralNode(type)) return ts.factory.createInterfaceDeclaration([exportModifier], identifier, undefined, undefined, type.members);
        else return ts.factory.createTypeAliasDeclaration([exportModifier], identifier, undefined, type);
    }
}




export function generateSourceFile(schemas: Record<string, SchemaOrBoolean>, resolver: ReferenceResolver) {
    return ts.factory.createSourceFile(Object.entries(schemas).flatMap(([key, schema]) => convertSchema(schema, key, schemas, resolver)), ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.None);
}
