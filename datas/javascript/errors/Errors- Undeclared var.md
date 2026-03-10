# ReferenceError: assignment to undeclared variable "x"

Source: https://devdocs.io/javascript/errors/undeclared_var

The JavaScript strict mode-only exception "Assignment to undeclared variable" occurs when the value has been assigned to an undeclared variable.

## Message

```
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Error type

ReferenceError in strict mode only.

## What went wrong?

You have an assignment of the form x = ..., but x has not been previously declared with the var, let, or const keyword. This error occurs in strict mode code only. In non-strict code, assignment to an undeclared variable implicitly creates a property on the global scope.

## Examples

### Invalid cases

In this case, the variable "bar" is an undeclared variable.

```
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Valid cases

To make "bar" a declared variable, you can add a let, const, or var keyword in front of it.

```
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## See also

- Strict mode
- var
- let
- const

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var
