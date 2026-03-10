# SyntaxError: rest parameter may not have a default

Source: https://devdocs.io/javascript/errors/rest_with_default

The JavaScript exception "rest parameter may not have a default" occurs when a rest parameter has a default value. Because the rest parameter always creates an array, the default value would never apply.

## Message

```
SyntaxError: Rest parameter may not have a default initializer (V8-based)
SyntaxError: rest parameter may not have a default (Firefox)
SyntaxError: Unexpected token '='. Expected a ')' or a ',' after a parameter declaration. (Safari)
```

## Error type

## What went wrong?

A default parameter gives a parameter a default value if the argument is not passed or passed as undefined. A rest parameter collects all the remaining arguments passed to the function and always creates an array. Therefore, it doesn't make sense to have a default value for a rest parameter.

## Examples

### Invalid cases

```
function doSomething(...args = []) {}
```

### Valid cases

```
function doSomething(...args) {
  // args is always an array
}
```

## See also

- Functions
- Default parameters
- Rest parameters

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Rest_with_default
