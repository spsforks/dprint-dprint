# Implemented Nodes

This file is automatically generated with the help of [ts-morph](https://github.com/dsherret/ts-morph).

## Implemented

**Total:** 157

* ArrayExpression
    * :heavy_check_mark: elements
* ArrayPattern
    * :heavy_check_mark: elements
    * :x: decorators
    * :heavy_check_mark: typeAnnotation
* ArrowFunctionExpression
    * :heavy_check_mark: params
    * :heavy_check_mark: body
    * :heavy_check_mark: async
    * ~~expression~~ - Don't care about this boolean because the body contains this info.
    * ~~generator~~ - Arrow function expressions can't be generators.
    * :heavy_check_mark: returnType
    * :heavy_check_mark: typeParameters
* AssignmentExpression
    * :heavy_check_mark: operator
    * :heavy_check_mark: left
    * :heavy_check_mark: right
* AssignmentPattern
    * :heavy_check_mark: left
    * :heavy_check_mark: right
    * :x: decorators
    * ~~typeAnnotation~~ - Flow.
* AwaitExpression
    * :heavy_check_mark: argument
* BigIntLiteral
    * :heavy_check_mark: value
* BinaryExpression
    * :heavy_check_mark: operator
    * :heavy_check_mark: left
    * :heavy_check_mark: right
* LogicalExpression
    * :heavy_check_mark: operator
    * :heavy_check_mark: left
    * :heavy_check_mark: right
* BlockStatement
    * :heavy_check_mark: body
    * :heavy_check_mark: directives
* Program
    * :heavy_check_mark: body
    * :heavy_check_mark: directives
    * ~~sourceType~~ - Not useful.
    * :heavy_check_mark: interpreter
    * ~~sourceFile~~ - Not useful.
* TSModuleBlock
    * :heavy_check_mark: body
* CatchClause
    * :heavy_check_mark: param
    * :heavy_check_mark: body
* DoWhileStatement
    * :heavy_check_mark: test
    * :heavy_check_mark: body
* ForInStatement
    * :heavy_check_mark: left
    * :heavy_check_mark: right
    * :heavy_check_mark: body
* ForStatement
    * :heavy_check_mark: init
    * :heavy_check_mark: test
    * :heavy_check_mark: update
    * :heavy_check_mark: body
* FunctionDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: params
    * :heavy_check_mark: body
    * :heavy_check_mark: generator
    * :heavy_check_mark: async
    * :heavy_check_mark: declare
    * :heavy_check_mark: returnType
    * :heavy_check_mark: typeParameters
* FunctionExpression
    * :heavy_check_mark: id
    * :heavy_check_mark: params
    * :heavy_check_mark: body
    * :heavy_check_mark: generator
    * :heavy_check_mark: async
    * :heavy_check_mark: returnType
    * :heavy_check_mark: typeParameters
* ObjectMethod
    * :heavy_check_mark: kind
    * :heavy_check_mark: key
    * :heavy_check_mark: params
    * :heavy_check_mark: body
    * :heavy_check_mark: computed
    * :heavy_check_mark: async
    * :x: decorators
    * :heavy_check_mark: generator
    * :heavy_check_mark: returnType
    * :heavy_check_mark: typeParameters
* SwitchStatement
    * :heavy_check_mark: discriminant
    * :heavy_check_mark: cases
* WhileStatement
    * :heavy_check_mark: test
    * :heavy_check_mark: body
* ForOfStatement
    * :heavy_check_mark: left
    * :heavy_check_mark: right
    * :heavy_check_mark: body
    * :heavy_check_mark: await
* ClassMethod
    * :heavy_check_mark: kind
    * :heavy_check_mark: key
    * :heavy_check_mark: params
    * :heavy_check_mark: body
    * :heavy_check_mark: computed
    * :heavy_check_mark: static
    * :heavy_check_mark: abstract
    * ~~access~~ - Flow.
    * :heavy_check_mark: accessibility
    * :heavy_check_mark: async
    * :heavy_check_mark: decorators
    * :heavy_check_mark: generator
    * :heavy_check_mark: optional
    * :heavy_check_mark: returnType
    * :heavy_check_mark: typeParameters
* BooleanLiteral
    * :heavy_check_mark: value
* BreakStatement
    * :heavy_check_mark: label
* CallExpression
    * :heavy_check_mark: callee
    * :heavy_check_mark: arguments
    * :heavy_check_mark: optional
    * :heavy_check_mark: typeArguments
    * :heavy_check_mark: typeParameters
* ClassDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: superClass
    * :heavy_check_mark: body
    * :heavy_check_mark: decorators
    * :heavy_check_mark: abstract
    * :heavy_check_mark: declare
    * :heavy_check_mark: implements
    * ~~mixins~~ - Probably flow... doesn't seem to be used.
    * :heavy_check_mark: superTypeParameters
    * :heavy_check_mark: typeParameters
* ClassExpression
    * :heavy_check_mark: id
    * :heavy_check_mark: superClass
    * :heavy_check_mark: body
    * :heavy_check_mark: decorators
    * :heavy_check_mark: implements
    * ~~mixins~~ - Probably flow... doesn't seem to be used.
    * :heavy_check_mark: superTypeParameters
    * :heavy_check_mark: typeParameters
* ClassBody
    * :heavy_check_mark: body
* ClassProperty
    * :heavy_check_mark: key
    * :heavy_check_mark: value
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: decorators
    * :heavy_check_mark: computed
    * :heavy_check_mark: abstract
    * :heavy_check_mark: accessibility
    * :heavy_check_mark: definite
    * :heavy_check_mark: optional
    * :heavy_check_mark: readonly
    * :heavy_check_mark: static
* ContinueStatement
    * :heavy_check_mark: label
* ReturnStatement
    * :heavy_check_mark: argument
* ThrowStatement
    * :heavy_check_mark: argument
* ConditionalExpression
    * :heavy_check_mark: test
    * :heavy_check_mark: consequent
    * :heavy_check_mark: alternate
* IfStatement
    * :heavy_check_mark: test
    * :heavy_check_mark: consequent
    * :heavy_check_mark: alternate
* DebuggerStatement
* VariableDeclaration
    * :heavy_check_mark: kind
    * :heavy_check_mark: declarations
    * :heavy_check_mark: declare
* ExportAllDeclaration
    * :heavy_check_mark: source
* ExportDefaultDeclaration
    * :heavy_check_mark: declaration
* ExportNamedDeclaration
    * :heavy_check_mark: declaration
    * :heavy_check_mark: specifiers
    * :heavy_check_mark: source
    * ~~exportKind~~ - Flow?
* ImportDeclaration
    * :heavy_check_mark: specifiers
    * :heavy_check_mark: source
    * ~~importKind~~ - Flow?
* TSDeclareFunction
    * :heavy_check_mark: id
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: params
    * :heavy_check_mark: returnType
    * :heavy_check_mark: async
    * :heavy_check_mark: declare
    * :heavy_check_mark: generator
* TSInterfaceDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: extends
    * :heavy_check_mark: body
    * :heavy_check_mark: declare
* TSTypeAliasDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: declare
* TSEnumDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: members
    * :heavy_check_mark: const
    * :heavy_check_mark: declare
    * :x: initializer
* TSModuleDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: body
    * :heavy_check_mark: declare
    * :heavy_check_mark: global
* Decorator
    * :heavy_check_mark: expression
* Directive
    * :heavy_check_mark: value
* DirectiveLiteral
    * :heavy_check_mark: value
* EmptyStatement
* ExportDefaultSpecifier
    * :heavy_check_mark: exported
* ExportNamespaceSpecifier
    * :heavy_check_mark: exported
* ExportSpecifier
    * :heavy_check_mark: local
    * :heavy_check_mark: exported
* Identifier
    * :heavy_check_mark: name
    * :x: decorators
    * :heavy_check_mark: optional
    * :heavy_check_mark: typeAnnotation
* StringLiteral
    * :heavy_check_mark: value
* NumericLiteral
    * :heavy_check_mark: value
* NullLiteral
* RegExpLiteral
    * :heavy_check_mark: pattern
    * :heavy_check_mark: flags
* MemberExpression
    * :heavy_check_mark: object
    * :heavy_check_mark: property
    * :heavy_check_mark: computed
    * :x: optional
* NewExpression
    * :heavy_check_mark: callee
    * :heavy_check_mark: arguments
    * :x: optional
    * ~~typeArguments~~ - Flow.
    * :heavy_check_mark: typeParameters
* ObjectExpression
    * :heavy_check_mark: properties
* SequenceExpression
    * :heavy_check_mark: expressions
* ThisExpression
* UnaryExpression
    * :heavy_check_mark: operator
    * :heavy_check_mark: argument
    * :heavy_check_mark: prefix
* UpdateExpression
    * :heavy_check_mark: operator
    * :heavy_check_mark: argument
    * :heavy_check_mark: prefix
* MetaProperty
    * :heavy_check_mark: meta
    * :heavy_check_mark: property
* Super
* TaggedTemplateExpression
    * :heavy_check_mark: tag
    * :heavy_check_mark: quasi
    * :heavy_check_mark: typeParameters
* TemplateLiteral
    * :heavy_check_mark: quasis
    * :heavy_check_mark: expressions
* YieldExpression
    * :heavy_check_mark: argument
    * :heavy_check_mark: delegate
* JSXElement
    * :heavy_check_mark: openingElement
    * :heavy_check_mark: closingElement
    * :heavy_check_mark: children
    * :heavy_check_mark: selfClosing
* JSXFragment
    * :heavy_check_mark: openingFragment
    * :heavy_check_mark: closingFragment
    * :heavy_check_mark: children
* OptionalMemberExpression
    * :heavy_check_mark: object
    * :heavy_check_mark: property
    * :heavy_check_mark: computed
    * :heavy_check_mark: optional
* OptionalCallExpression
    * :heavy_check_mark: callee
    * :heavy_check_mark: arguments
    * :heavy_check_mark: optional
    * :heavy_check_mark: typeArguments
    * :heavy_check_mark: typeParameters
* Import
* TSAsExpression
    * :heavy_check_mark: expression
    * :heavy_check_mark: typeAnnotation
* TSTypeAssertion
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: expression
* TSNonNullExpression
    * :heavy_check_mark: expression
* ExpressionStatement
    * :heavy_check_mark: expression
* File
    * :heavy_check_mark: program
    * :heavy_check_mark: comments
    * :heavy_check_mark: tokens
* JSXAttribute
    * :heavy_check_mark: name
    * :heavy_check_mark: value
* JSXClosingElement
    * :heavy_check_mark: name
* JSXExpressionContainer
    * :heavy_check_mark: expression
* JSXSpreadChild
    * :heavy_check_mark: expression
* JSXOpeningElement
    * :heavy_check_mark: name
    * :heavy_check_mark: attributes
    * :heavy_check_mark: selfClosing
    * :heavy_check_mark: typeParameters
* JSXText
    * :heavy_check_mark: value
* JSXOpeningFragment
* JSXClosingFragment
* ImportDefaultSpecifier
    * :heavy_check_mark: local
* ImportNamespaceSpecifier
    * :heavy_check_mark: local
* ImportSpecifier
    * :heavy_check_mark: local
    * :heavy_check_mark: imported
    * ~~importKind~~ - Not sure what this is, but doesn't seem to be useful?
* InterpreterDirective
    * :heavy_check_mark: value
* JSXEmptyExpression
* JSXIdentifier
    * :heavy_check_mark: name
* JSXMemberExpression
    * :heavy_check_mark: object
    * :heavy_check_mark: property
* JSXNamespacedName
    * :heavy_check_mark: namespace
    * :heavy_check_mark: name
* JSXSpreadAttribute
    * :heavy_check_mark: argument
* RestElement
    * :heavy_check_mark: argument
    * :x: decorators
    * :heavy_check_mark: typeAnnotation
* ObjectPattern
    * :heavy_check_mark: properties
    * :x: decorators
    * :heavy_check_mark: typeAnnotation
* TSParameterProperty
    * :heavy_check_mark: parameter
    * :heavy_check_mark: accessibility
    * :heavy_check_mark: readonly
* LabeledStatement
    * :heavy_check_mark: label
    * :heavy_check_mark: body
* ObjectProperty
    * :heavy_check_mark: key
    * :heavy_check_mark: value
    * :heavy_check_mark: computed
    * :heavy_check_mark: shorthand
    * :x: decorators
* SpreadElement
    * :heavy_check_mark: argument
* TryStatement
    * :heavy_check_mark: block
    * :heavy_check_mark: handler
    * :heavy_check_mark: finalizer
* TSImportEqualsDeclaration
    * :heavy_check_mark: id
    * :heavy_check_mark: moduleReference
    * :heavy_check_mark: isExport
* TSExportAssignment
    * :heavy_check_mark: expression
* TSNamespaceExportDeclaration
    * :heavy_check_mark: id
* SwitchCase
    * :heavy_check_mark: test
    * :heavy_check_mark: consequent
* TSAnyKeyword
* TSArrayType
    * :heavy_check_mark: elementType
* TSBooleanKeyword
* TSCallSignatureDeclaration
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: parameters
    * :heavy_check_mark: typeAnnotation
* TSConditionalType
    * :heavy_check_mark: checkType
    * :heavy_check_mark: extendsType
    * :heavy_check_mark: trueType
    * :heavy_check_mark: falseType
* TSConstructSignatureDeclaration
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: parameters
    * :heavy_check_mark: typeAnnotation
* TSConstructorType
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: parameters
    * :heavy_check_mark: typeAnnotation
* TSDeclareMethod
    * :heavy_check_mark: decorators
    * :heavy_check_mark: key
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: params
    * :heavy_check_mark: returnType
    * :heavy_check_mark: abstract
    * ~~access~~ - Flow.
    * :heavy_check_mark: accessibility
    * :heavy_check_mark: async
    * :heavy_check_mark: computed
    * :heavy_check_mark: generator
    * :heavy_check_mark: kind
    * :heavy_check_mark: optional
    * :heavy_check_mark: static
* TSQualifiedName
    * :heavy_check_mark: left
    * :heavy_check_mark: right
* TSEnumMember
    * :heavy_check_mark: id
    * :heavy_check_mark: initializer
* TSExpressionWithTypeArguments
    * :heavy_check_mark: expression
    * :heavy_check_mark: typeParameters
* TSExternalModuleReference
    * :heavy_check_mark: expression
* TSFunctionType
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: parameters
    * :heavy_check_mark: typeAnnotation
* TSImportType
    * :heavy_check_mark: argument
    * :heavy_check_mark: qualifier
    * :heavy_check_mark: typeParameters
* TSIndexSignature
    * :heavy_check_mark: parameters
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: readonly
* TSIndexedAccessType
    * :heavy_check_mark: objectType
    * :heavy_check_mark: indexType
* TSInferType
    * :heavy_check_mark: typeParameter
* TSInterfaceBody
    * :heavy_check_mark: body
* TSIntersectionType
    * :heavy_check_mark: types
* TSLiteralType
    * :heavy_check_mark: literal
* TSMappedType
    * :heavy_check_mark: typeParameter
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: optional
    * :heavy_check_mark: readonly
* TSMethodSignature
    * :heavy_check_mark: key
    * :heavy_check_mark: typeParameters
    * :heavy_check_mark: parameters
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: computed
    * :heavy_check_mark: optional
* TSNeverKeyword
* TSNullKeyword
* TSNumberKeyword
* TSObjectKeyword
* TSOptionalType
    * :heavy_check_mark: typeAnnotation
* TSParenthesizedType
    * :heavy_check_mark: typeAnnotation
* TSPropertySignature
    * :heavy_check_mark: key
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: initializer
    * :heavy_check_mark: computed
    * :heavy_check_mark: optional
    * :heavy_check_mark: readonly
* TSRestType
    * :heavy_check_mark: typeAnnotation
* TSStringKeyword
* TSSymbolKeyword
* TSThisType
* TSTupleType
    * :heavy_check_mark: elementTypes
* TSUnknownKeyword
* TSVoidKeyword
* TSUndefinedKeyword
* TSTypeReference
    * :heavy_check_mark: typeName
    * :heavy_check_mark: typeParameters
* TSTypePredicate
    * :heavy_check_mark: parameterName
    * :heavy_check_mark: typeAnnotation
* TSTypeQuery
    * :heavy_check_mark: exprName
* TSTypeLiteral
    * :heavy_check_mark: members
* TSUnionType
    * :heavy_check_mark: types
* TSTypeOperator
    * :heavy_check_mark: typeAnnotation
    * :heavy_check_mark: operator
* TSTypeAnnotation
    * :heavy_check_mark: typeAnnotation
* TSTypeParameter
    * :heavy_check_mark: constraint
    * :heavy_check_mark: default
    * :heavy_check_mark: name
* TSTypeParameterDeclaration
    * :heavy_check_mark: params
* TSTypeParameterInstantiation
    * :heavy_check_mark: params
* TemplateElement
    * :heavy_check_mark: value
    * :heavy_check_mark: tail
* VariableDeclarator
    * :heavy_check_mark: id
    * :heavy_check_mark: init
    * :heavy_check_mark: definite

## Not implemented

**Total:** 0


## Ignored

These are ignored for now because they are new language features or not supported (ex. WithStatement).
Please open an issue if you see a mistake here or would like any of these supported.

**Total:** 13

* ArgumentPlaceholder
* BindExpression
* ClassPrivateMethod
* ClassPrivateProperty
* DoExpression
* Noop
* ParenthesizedExpression
* PrivateName
* PipelineBareFunction
* PipelineTopicExpression
* PipelinePrimaryTopicReference
* Placeholder
* WithStatement

## Ignored - Flow

These nodes are ignored because Flow is not supported and probably never will be.
Please open an issue if you see a mistake here.

**Total:** 53

* AnyTypeAnnotation
* ArrayTypeAnnotation
* BooleanLiteralTypeAnnotation
* BooleanTypeAnnotation
* ClassImplements
* DeclareClass
* DeclareExportAllDeclaration
* DeclareExportDeclaration
* DeclareFunction
* DeclareInterface
* DeclareModule
* DeclareModuleExports
* DeclareOpaqueType
* DeclareTypeAlias
* DeclareVariable
* DeclaredPredicate
* EmptyTypeAnnotation
* ExistsTypeAnnotation
* FunctionTypeAnnotation
* FunctionTypeParam
* GenericTypeAnnotation
* InferredPredicate
* InterfaceDeclaration
* InterfaceExtends
* InterfaceTypeAnnotation
* IntersectionTypeAnnotation
* MixedTypeAnnotation
* NullLiteralTypeAnnotation
* NullableTypeAnnotation
* NumberLiteralTypeAnnotation
* NumberTypeAnnotation
* ObjectTypeAnnotation
* ObjectTypeCallProperty
* ObjectTypeIndexer
* ObjectTypeInternalSlot
* ObjectTypeProperty
* ObjectTypeSpreadProperty
* OpaqueType
* QualifiedTypeIdentifier
* StringLiteralTypeAnnotation
* StringTypeAnnotation
* ThisTypeAnnotation
* TupleTypeAnnotation
* TypeAlias
* TypeAnnotation
* TypeCastExpression
* TypeParameter
* TypeParameterDeclaration
* TypeParameterInstantiation
* TypeofTypeAnnotation
* UnionTypeAnnotation
* Variance
* VoidTypeAnnotation
