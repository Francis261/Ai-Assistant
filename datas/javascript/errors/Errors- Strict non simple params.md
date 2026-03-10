# SyntaxError: "use strict" not allowed in function with non-simple parameters

Source: https://devdocs.io/javascript/errors/strict_non_simple_params

The JavaScript exception ""use strict" not allowed in function" occurs when a "use strict" directive is used at the top of a function with default parameters, rest parameters, or destructuring parameters.

## Message

```
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list (V8-based)
SyntaxError: "use strict" not allowed in function with default parameter (Firefox)
SyntaxError: "use strict" not allowed in function with rest parameter (Firefox)
SyntaxError: "use strict" not allowed in function with destructuring parameter (Firefox)
SyntaxError: 'use strict' directive not allowed inside a function with a non-simple parameter list. (Safari)
```

## Error type

SyntaxError.

## What went wrong?

A "use strict" directive is written at the top of a function that has one of the following parameters:

- Default parameters
- Rest parameters
- Destructuring parameters

A "use strict" directive is not allowed at the top of such functions per the ECMAScript specification.

## Examples

### Function statement

In this case, the function sum has default parameters a=1 and b=2:

```
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

If the function should be in strict mode, and the entire script or enclosing function is also okay to be in strict mode, you can move the "use strict" directive outside of the function:

```
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Function expression

A function expression can use yet another workaround:

```
const sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

This can be converted to the following expression:

```
const sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Arrow function

If an arrow function needs to access the this variable, you can use the arrow function as the enclosing function:

```
const callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

This can be converted to the following expression:

```
const callback = (() => {
  "use strict";
  return (...args) => this.run(args);
})();
```

## See also

- Strict mode
- function statement
- function expression
- Default parameters
- Rest parameters
- Destructuring parameters

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params
