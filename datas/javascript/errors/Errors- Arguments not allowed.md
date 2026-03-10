# SyntaxError: arguments is not valid in fields

Source: https://devdocs.io/javascript/errors/arguments_not_allowed

The JavaScript exception "SyntaxError: arguments is not valid in fields" occurs when the arguments identifier is read in a class field initializer or in a static initialization block, outside of a non-arrow function.

## Message

```
SyntaxError: 'arguments' is not allowed in class field initializer or static initialization block (V8-based)
SyntaxError: arguments is not valid in fields (Firefox)
SyntaxError: Unexpected identifier 'arguments'. Cannot reference 'arguments' in class field initializer. (Safari)
```

## Error type

## What went wrong?

A class field initializer expression or a class static initialization block does not have arguments in its scope. Trying to access it is a syntax error.

- This is true even if arguments is bound in a parent scope (such as when the class is nested in a non-arrow function).
- A non-arrow function declared within this scope will still bind its own arguments and read it normally.

## Examples

```
function makeOne() {
  class C {
    args = { ...arguments }; // SyntaxError: arguments is not valid in fields
  }
  return new C();
}
```

```
let CArgs;
class C {
  static {
    CArgs = arguments; // SyntaxError: arguments is not valid in fields
  }
}
```

```
class C {
  args = {};
  constructor() {
    this.args = arguments; // You can use arguments in constructors
  }
  myMethod() {
    this.args = arguments; // You can also use it in methods
  }
}
```

```
function makeOne() {
  const _arguments = arguments;
  class C {
    args = { ..._arguments }; // Only the identifier is forbidden
  }
  return new C();
}
```

## See also

- Classes
- Public class fields
- Static initialization blocks

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Arguments_not_allowed
