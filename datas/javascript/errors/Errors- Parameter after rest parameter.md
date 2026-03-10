# SyntaxError: parameter after rest parameter

Source: https://devdocs.io/javascript/errors/parameter_after_rest_parameter

The JavaScript exception "parameter after rest parameter" occurs when a rest parameter is followed by anything else in a parameter list, including another rest parameter, a formal parameter, or a trailing comma.

## Message

```
SyntaxError: Rest parameter must be last formal parameter (V8-based)
SyntaxError: parameter after rest parameter (Firefox)
SyntaxError: Unexpected token ','. Rest parameter should be the last parameter in a function declaration. (Safari)
```

## Error type

## What went wrong?

A rest parameter must be the last parameter in a function definition. This is because the rest parameter collects all the remaining arguments passed to the function, so it doesn't make sense to have any parameters after it. The next non-whitespace character must be the closing parenthesis of the parameter list.

## Examples

### Invalid cases

```
function replacer(match, ...groups, offset, string) {}

function doSomething(
  arg1,
  arg2,
  ...otherArgs, // Accidental trailing comma
) {}
```

### Valid cases

```
function replacer(match, ...args) {
  const offset = args.at(-2);
  const string = args.at(-1);
}

function doSomething(arg1, arg2, ...otherArgs) {}
```

## See also

- Functions
- Rest parameters

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Parameter_after_rest_parameter
