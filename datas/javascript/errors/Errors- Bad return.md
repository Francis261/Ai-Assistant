# SyntaxError: return not in function

Source: https://devdocs.io/javascript/errors/bad_return

The JavaScript exception "return not in function" occurs when a return statement is called outside of a function.

## Message

```
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## Error type

SyntaxError.

## What went wrong?

A return statement is called outside of a function. Maybe there are missing curly braces somewhere? The return statement must be in a function, because it ends function execution and specifies a value to be returned to the function caller.

## Examples

### Missing curly braces

```
function cheer(score) {
  if (score === 147)
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

The curly braces look correct at a first glance, but this code snippet is missing a { after the first if statement. Correct would be:

```
function cheer(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}
```

## See also

- return

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_return
