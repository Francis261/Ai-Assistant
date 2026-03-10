# SyntaxError: function statement requires a name

Source: https://devdocs.io/javascript/errors/unnamed_function_statement

The JavaScript exception "function statement requires a name" occurs when there is a function statement in the code that requires a name.

## Message

```
SyntaxError: Function statements require a function name (V8-based)
SyntaxError: function statement requires a name (Firefox)
SyntaxError: Function statements must have a name. (Safari)
```

## Error type

## What went wrong?

There is a function statement in the code that requires a name. You'll need to check how functions are defined and if you need to provide a name for it, or if the function in question needs to be a function expression, an IIFE, or if the function code is placed correctly in this context at all.

## Examples

### Statements vs. expressions

A function statement (or function declaration) requires a name. This won't work:

```
function () {
  return "Hello world";
}
// SyntaxError: function statement requires a name
```

You can use a function expression (assignment) instead:

```
const greet = function () {
  return "Hello world";
};
```

If your function is intended to be an IIFE (Immediately Invoked Function Expression, which is a function that runs as soon as it is defined) you will need to add a few more braces:

```
(function () {
  // …
})();
```

### Labeled functions

Labels are an entirely different feature from function names. You can't use a label as a function name.

```
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

In addition, labeled function declarations themselves are a deprecated feature. Use regular function declarations instead.

```
function Greeter() {
  function german() {
    return "Moin";
  }
}
```

### Object methods

If you intended to create a method of an object, you will need to create an object. The following syntax without a name after the function keyword is valid then.

```
const greeter = {
  german: function () {
    return "Moin";
  },
};
```

You can also use the method syntax.

```
const greeter = {
  german() {
    return "Moin";
  },
};
```

### Callback syntax

Also, check your syntax when using callbacks. Braces and commas can quickly get confusing.

```
promise.then(
  function () {
    console.log("success");
  });
  function () {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

Correct would be:

```
promise.then(
  function () {
    console.log("success");
  },
  function () {
    console.log("error");
  },
);
```

## See also

- Functions guide
- function
- function expression
- IIFE
- Labeled statement

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unnamed_function_statement
