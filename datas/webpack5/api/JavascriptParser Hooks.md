# JavascriptParser Hooks

Source: https://devdocs.io/webpack~5/api/parser

The parser instance, found in the compiler, is used to parse each module being processed by webpack. The parser is yet another webpack class that extends tapable and provides a variety of tapable hooks that can be used by plugin authors to customize the parsing process.

The parser is found within NormalModuleFactory and therefore takes little more work to access:

```
compiler.hooks.normalModuleFactory.tap('MyPlugin', (factory) => {
  factory.hooks.parser
    .for('javascript/auto')
    .tap('MyPlugin', (parser, options) => {
      parser.hooks.someHook.tap(/* ... */);
    });
});
```

As with the compiler, tapAsync and tapPromise may also be available depending on the type of hook.

## Hooks

The following lifecycle hooks are exposed by the parser and can be accessed as such:

### evaluateTypeof

SyncBailHook

Triggered when evaluating an expression consisting in a typeof of a free variable

- Hook Parameters: identifier
- Callback Parameters: expression

```
parser.hooks.evaluateTypeof
  .for('myIdentifier')
  .tap('MyPlugin', (expression) => {
    /* ... */
    return expressionResult;
  });
```

This will trigger the evaluateTypeof hook:

```
const a = typeof myIdentifier;
```

This won't trigger:

```
const myIdentifier = 0;
const b = typeof myIdentifier;
```

### evaluate

SyncBailHook

Called when evaluating an expression.

- Hook parameters: expressionType
- Callback parameters: expression

For example:

index.js

```
const a = new String();
```

MyPlugin.js

```
parser.hooks.evaluate.for('NewExpression').tap('MyPlugin', (expression) => {
  /* ... */
  return expressionResult;
});
```

Where the expressions types are:

- 'ArrowFunctionExpression'
- 'AssignmentExpression'
- 'AwaitExpression'
- 'BinaryExpression'
- 'CallExpression'
- 'ClassExpression'
- 'ConditionalExpression'
- 'FunctionExpression'
- 'Identifier'
- 'LogicalExpression'
- 'MemberExpression'
- 'NewExpression'
- 'ObjectExpression'
- 'SequenceExpression'
- 'SpreadElement'
- 'TaggedTemplateExpression'
- 'TemplateLiteral'
- 'ThisExpression'
- 'UnaryExpression'
- 'UpdateExpression'

### evaluateIdentifier

SyncBailHook

Called when evaluating an identifier that is a free variable.

- Hook Parameters: identifier
- Callback Parameters: expression

### evaluateDefinedIdentifier

SyncBailHook

Called when evaluating an identifier that is a defined variable.

- Hook Parameters: identifier
- Callback Parameters: expression

### evaluateCallExpressionMember

SyncBailHook

Called when evaluating a call to a member function of a successfully evaluated expression.

- Hook Parameters: identifier
- Callback Parameters: expression param

This expression will trigger the hook:

index.js

```
const a = expression.myFunc();
```

MyPlugin.js

```
parser.hooks.evaluateCallExpressionMember
  .for('myFunc')
  .tap('MyPlugin', (expression, param) => {
    /* ... */
    return expressionResult;
  });
```

### statement

SyncBailHook

General purpose hook that is called for every parsed statement in a code fragment.

- Callback Parameters: statement

```
parser.hooks.statement.tap('MyPlugin', (statement) => {
  /* ... */
});
```

Where the statement.type could be:

- 'BlockStatement'
- 'VariableDeclaration'
- 'FunctionDeclaration'
- 'ReturnStatement'
- 'ClassDeclaration'
- 'ExpressionStatement'
- 'ImportDeclaration'
- 'ExportAllDeclaration'
- 'ExportDefaultDeclaration'
- 'ExportNamedDeclaration'
- 'IfStatement'
- 'SwitchStatement'
- 'ForInStatement'
- 'ForOfStatement'
- 'ForStatement'
- 'WhileStatement'
- 'DoWhileStatement'
- 'ThrowStatement'
- 'TryStatement'
- 'LabeledStatement'
- 'WithStatement'

### statementIf

SyncBailHook

Called when parsing an if statement. Same as the statement hook, but triggered only when statement.type == 'IfStatement'.

- Callback Parameters: statement

### label

SyncBailHook

Called when parsing statements with a label. Those statements have statement.type === 'LabeledStatement'.

- Hook Parameters: labelName
- Callback Parameters: statement

### import

SyncBailHook

Called for every import statement in a code fragment. The source parameter contains the name of the imported file.

- Callback Parameters: statement source

The following import statement will trigger the hook once:

index.js

```
import _ from 'lodash';
```

MyPlugin.js

```
parser.hooks.import.tap('MyPlugin', (statement, source) => {
  // source == 'lodash'
});
```

### importSpecifier

SyncBailHook

Called for every specifier of every import statement.

- Callback Parameters: statement source exportName identifierName

The following import statement will trigger the hook twice:

index.js

```
import _, { has } from 'lodash';
```

MyPlugin.js

```
parser.hooks.importSpecifier.tap(
  'MyPlugin',
  (statement, source, exportName, identifierName) => {
    /* First call
    source == 'lodash'
    exportName == 'default'
    identifierName == '_'
  */
    /* Second call
    source == 'lodash'
    exportName == 'has'
    identifierName == 'has'
  */
  }
);
```

### export

SyncBailHook

Called for every export statement in a code fragment.

- Callback Parameters: statement

### exportImport

SyncBailHook

Called for every export-import statement eg: export * from 'otherModule';.

- Callback Parameters: statement source

### exportDeclaration

SyncBailHook

Called for every export statement exporting a declaration.

- Callback Parameters: statement declaration

Those exports will trigger this hook:

```
export const myVar = 'hello'; // also var, let
export function FunctionName() {}
export class ClassName {}
```

### exportExpression

SyncBailHook

Called for every export statement exporting an expression e.g.export default expression;.

- Callback Parameters: statement declaration

### exportSpecifier

SyncBailHook

Called for every specifier of every export statement.

- Callback Parameters: statement identifierName exportName index

### exportImportSpecifier

SyncBailHook

Called for every specifier of every export-import statement.

- Callback Parameters: statement source identifierName exportName index

### varDeclaration

SyncBailHook

Called when parsing a variable declaration.

- Callback Parameters: declaration

### varDeclarationLet

SyncBailHook

Called when parsing a variable declaration defined using let

- Callback Parameters: declaration

### varDeclarationConst

SyncBailHook

Called when parsing a variable declaration defined using const

- Callback Parameters: declaration

### varDeclarationVar

SyncBailHook

Called when parsing a variable declaration defined using var

- Callback Parameters: declaration

### canRename

SyncBailHook

Triggered before renaming an identifier to determine if the renaming is allowed. This is usually used together with the rename hook.

- Hook Parameters: identifier
- Callback Parameters: expression

```
var a = b;

parser.hooks.canRename.for('b').tap('MyPlugin', (expression) => {
  // returning true allows renaming
  return true;
});
```

### rename

SyncBailHook

Triggered when renaming to get the new identifier. This hook will be called only if canRename returns true.

- Hook Parameters: identifier
- Callback Parameters: expression

```
var a = b;

parser.hooks.rename.for('b').tap('MyPlugin', (expression) => {});
```

### assigned

SyncBailHook

Called when parsing an AssignmentExpression before parsing the assigned expression.

- Hook Parameters: identifier
- Callback Parameters: expression

```
a += b;

parser.hooks.assigned.for('a').tap('MyPlugin', (expression) => {
  // this is called before parsing b
});
```

### assign

SyncBailHook

Called when parsing an AssignmentExpression before parsing the assign expression.

- Hook Parameters: identifier
- Callback Parameters: expression

```
a += b;

parser.hooks.assigned.for('a').tap('MyPlugin', (expression) => {
  // this is called before parsing a
});
```

### typeof

SyncBailHook

Triggered when parsing the typeof of an identifier

- Hook Parameters: identifier
- Callback Parameters: expression

### call

SyncBailHook

Called when parsing a function call.

- Hook Parameters: identifier
- Callback Parameters: expression

```
eval(/* something */);

parser.hooks.call.for('eval').tap('MyPlugin', (expression) => {});
```

### callMemberChain

SyncBailHook

Triggered when parsing a call to a member function of an object.

- Hook Parameters: objectIdentifier
- Callback Parameters: expression, properties

```
myObj.anyFunc();

parser.hooks.callMemberChain
  .for('myObj')
  .tap('MyPlugin', (expression, properties) => {});
```

### new

SyncBailHook

Invoked when parsing a new expression.

- Hook Parameters: identifier
- Callback Parameters: expression

```
new MyClass();

parser.hooks.new.for('MyClass').tap('MyPlugin', (expression) => {});
```

### expression

SyncBailHook

Called when parsing an expression.

- Hook Parameters: identifier
- Callback Parameters: expression

```
const a = this;

parser.hooks.expression.for('this').tap('MyPlugin', (expression) => {});
```

### expressionConditionalOperator

SyncBailHook

Called when parsing a ConditionalExpression e.g. condition ? a : b

- Callback Parameters: expression

### program

SyncBailHook

Get access to the abstract syntax tree (AST) of a code fragment

- Parameters: ast comments

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/parser
