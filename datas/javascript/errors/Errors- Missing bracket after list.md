# SyntaxError: missing ] after element list

Source: https://devdocs.io/javascript/errors/missing_bracket_after_list

The JavaScript exception "missing ] after element list" occurs when there is an error with the array initializer syntax somewhere. Likely there is a closing square bracket (]) or a comma (,) missing.

## Message

```
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## Error type

SyntaxError.

## What went wrong?

There is an error with the array initializer syntax somewhere. Likely there is a closing square bracket (]) or a comma (,) missing.

## Examples

### Incomplete array initializer

```
const list = [1, 2,

const instruments = [
  "Ukulele",
  "Guitar",
  "Piano",
};

const data = [{ foo: "bar" } { bar: "foo" }];
```

Correct would be:

```
const list = [1, 2];

const instruments = ["Ukulele", "Guitar", "Piano"];

const data = [{ foo: "bar" }, { bar: "foo" }];
```

## See also

- Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_bracket_after_list
