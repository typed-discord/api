import ts, { isStringLiteral } from "typescript";

const factory = ts.factory;

export function convertTypeToValue(type: ts.TypeNode): ts.NumericLiteral | ts.StringLiteral | undefined | ts.PropertyAccessExpression {
    if (ts.isLiteralTypeNode(type)) {
        if (ts.isNumericLiteral(type.literal)) {
            return factory.createNumericLiteral(type.literal.text);
        }
        if (isStringLiteral(type.literal)) {
            return factory.createStringLiteral(type.literal.text);
        }
    }
    if (ts.isTypeReferenceNode(type)) {
        if (ts.isQualifiedName(type.typeName)) {
            if (ts.isIdentifier(type.typeName.left)) return factory.createPropertyAccessExpression(ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("Schemas"), type.typeName.left), type.typeName.right)
        }
    }
    return undefined;
}

export function appendModuleReferenceToIdentifier(type: ts.Identifier) {
    return factory.createTypeReferenceNode(ts.factory.createQualifiedName(ts.factory.createIdentifier("Schemas"), type));
}

export function appendModuleReference(type?: ts.TypeNode): ts.TypeNode | undefined {
    if (type && ts.isTypeReferenceNode(type)) {
        const typeName = type.typeName;
        
        if (ts.isIdentifier(typeName)) {
            return appendModuleReferenceToIdentifier(typeName);
        }
    }

    return type;
}

export function getPropertyNameString(property_name: ts.PropertyName) {
    if (ts.isStringLiteral(property_name) || ts.isIdentifier(property_name)) {
        return property_name.text;
    }
    throw new Error("Unexpected property name type");
}

export function getStringLiteralFromPropertyName(property_name: ts.PropertyName) {
    if (ts.isStringLiteral(property_name)) return property_name;
    throw new Error("Unexpected property name type");
}

interface Property {
    name: ts.StringLiteral;
}

interface NonConstantProperty extends Property {
    type: ts.TypeNode;
}

interface ConstantRequiredProperty extends Property {
    value: ts.Expression;
}

export function generateBuilder(interface_declaration: ts.InterfaceDeclaration) {
    const typename = appendModuleReferenceToIdentifier(interface_declaration.name);

    const not_constants = new Array<NonConstantProperty>;
    const constants = new Array<ConstantRequiredProperty>;

    const properties = interface_declaration.members.filter(member => ts.isPropertySignature(member));
    const required_properties = properties.filter(property => property.questionToken === undefined);

    for (const property of required_properties) {
        if (property.type && ts.isStringLiteral(property.name)) {
            const constant = convertTypeToValue(property.type);

            if (constant) {
                constants.push({ name: property.name, value: constant })
            }
            else {
                not_constants.push({ name: property.name, type: property.type })
            }
        }
    }

    const parameters = not_constants.map(property => factory.createParameterDeclaration([], undefined, factory.createIdentifier(property.name.text), undefined, factory.createIndexedAccessTypeNode(
  typename,
  factory.createLiteralTypeNode(property.name)
) ));
    const constants_parameters = constants.map(member => factory.createPropertyAssignment(member.name, member.value));
    const not_constants_required_properties = not_constants.map(member => ts.factory.createShorthandPropertyAssignment(member.name.text));
    const object_properties: ts.ObjectLiteralElementLike[] = [...constants_parameters, ...not_constants_required_properties];
    if (required_properties.length < properties.length) {
        parameters.push(factory.createParameterDeclaration([], undefined, "optional", factory.createToken(ts.SyntaxKind.QuestionToken), constants.length > 0 || not_constants.length > 0 ? factory.createTypeReferenceNode(
            "Omit",
            [appendModuleReferenceToIdentifier(interface_declaration.name), factory.createUnionTypeNode([...constants.map(member => factory.createLiteralTypeNode(factory.createStringLiteral(member.name.text))), ...not_constants.map(member => factory.createLiteralTypeNode(factory.createStringLiteral(member.name.text)))])]
        ) : appendModuleReferenceToIdentifier(interface_declaration.name)));
        object_properties.push(factory.createSpreadAssignment(factory.createIdentifier("optional")));
    }
    const literal = factory.createObjectLiteralExpression(object_properties)
    const return_statement = factory.createReturnStatement(literal);

    return factory.createFunctionDeclaration([ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)], undefined, interface_declaration.name, undefined, parameters, appendModuleReferenceToIdentifier(interface_declaration.name), factory.createBlock([return_statement]))
}

export function generateSourceFile(source: ts.SourceFile) {
    const statements = source.statements;
    const interfaces = statements.filter(statement => ts.isInterfaceDeclaration(statement));
    const import_types = factory.createImportDeclaration([],
        factory.createImportClause(
            false,
            undefined,
            factory.createNamespaceImport(factory.createIdentifier("Schemas"))
        ),
        factory.createStringLiteral("./types.mjs"),
        undefined
    )
    return ts.factory.createSourceFile([import_types, ...interfaces.map(generateBuilder)], ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.None);
}
