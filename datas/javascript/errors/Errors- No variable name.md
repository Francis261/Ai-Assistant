# SyntaxError: missing variable name

Source: https://devdocs.io/javascript/errors/no_variable_name

The JavaScript exception "missing variable name" is a common error. It is usually caused by omitting a variable name or a typographic error.

## Message

```
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token '='. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Error type

## What went wrong?

A variable is missing a name. The cause is most likely a typo or a forgotten variable name. Make sure that you've provided the name of the variable before the = sign.

When declaring multiple variables at the same time, make sure that the previous lines/declaration does not end with a comma instead of a semicolon.

## Examples

### Missing a variable name

```
const = "foo";
```

It is easy to forget to assign a name for your variable!

```
const description = "foo";
```

### Reserved keywords can't be variable names

There are a few variable names that are reserved keywords. You can't use these. Sorry :(

```
const debugger = "whoop";
// SyntaxError: missing variable name
```

### Declaring multiple variables

Pay special attention to commas when declaring multiple variables. Is there an excess comma, or did you use commas instead of semicolons? Did you remember to assign values for all your const variables?

```
let x, y = "foo",
const z, = "foo"

const first = document.getElementById("one"),
const second = document.getElementById("two"),

// SyntaxError: missing variable name
```

The fixed version:

```
let x,
  y = "foo";
const z = "foo";

const first = document.getElementById("one");
const second = document.getElementById("two");
```

### Arrays

Array literals in JavaScript need square brackets around the values. This won't work:

```
const arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

This would be correct:

```
const arr = [1, 2, 3, 4, 5];
```

## See also

- Lexical grammar
- var
- Grammar and types guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_variable_name
