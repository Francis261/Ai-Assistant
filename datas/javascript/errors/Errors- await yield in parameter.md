# SyntaxError: await/yield expression can't be used in parameter

Source: https://devdocs.io/javascript/errors/await_yield_in_parameter

The JavaScript exception "await expression can't be used in parameter" or "yield expression can't be used in parameter" occurs when the default parameter expression contains the await or yield keyword and has the effect of pausing default parameter evaluation.

## Message

```
SyntaxError: Illegal await-expression in formal parameters of async function (V8-based)
SyntaxError: await expression can't be used in parameter (Firefox)
SyntaxError: Cannot use 'await' within a parameter default expression. (Safari)

SyntaxError: Yield expression not allowed in formal parameter (V8-based)
SyntaxError: yield expression can't be used in parameter (Firefox)
SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression within parameters. (Safari)
```

## Error type

## What went wrong?

The default expression must be able to evaluate synchronously. If it contains an await or yield expression, it will pause the evaluation of the default expression, which is not allowed.

Note: This error is only generated when await or yield are valid operators in this function context. Otherwise, await or yield would be parsed as an identifier, and either not cause an error, or cause an error like "reserved identifier", or "unexpected token" if there's an expression following it.

## Examples

### Invalid cases

```
function *gen(a = yield 1) {}

async function f(a = await Promise.resolve(1)) {}
```

### Valid cases

You can use the nullish coalescing assignment to provide a default value instead. If you want to treat null and undefined differently, you would need to use a condition.

```
function* gen(a) {
  a ??= yield 1;
}

async function f(a) {
  a ??= await Promise.resolve(1);
}
```

You are also allowed to use await or yield if the expression is contained in a function expression of the initializer and would not pause the evaluation of the default expression.

```
async function f(a = (async () => await Promise.resolve(1))()) {}
```

## See also

- Default parameters
- await
- yield

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/await_yield_in_parameter
