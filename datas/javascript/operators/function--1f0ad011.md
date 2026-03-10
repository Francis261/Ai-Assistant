# function* expression

Source: https://devdocs.io/javascript/operators/function*

The function* keyword can be used to define a generator function inside an expression.

You can also define generator functions using the function* declaration.

## Try it

```
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// Expected output: "abc"
```

## Syntax

```
function* (param0) {
  statements
}
function* (param0, param1) {
  statements
}
function* (param0, param1, /* …, */ paramN) {
  statements
}

function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

Note: An expression statement cannot begin with the keyword function to avoid ambiguity with a function* declaration. The function keyword only begins an expression when it appears in a context that cannot accept statements.

### Parameters

The function name. Can be omitted, in which case the function is anonymous. The name is only local to the function body.

The name of a formal parameter for the function. For the parameters' syntax, see the Functions reference.

The statements which comprise the body of the function.

## Description

A function* expression is very similar to, and has almost the same syntax as, a function* declaration. The main difference between a function* expression and a function* declaration is the function name, which can be omitted in function* expressions to create anonymous functions. A function* expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined, allowing you to create an ad-hoc iterable iterator object. See also the chapter about functions for more information.

## Examples

### Using function* expression

The following example defines an unnamed generator function and assigns it to x. The function yields the square of its argument:

```
const x = function* (y) {
  yield y * y;
};
```

## Specifications

## Browser compatibility

## See also

- Functions guide
- Functions
- function*
- GeneratorFunction
- Iteration protocols
- yield
- yield*

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*
