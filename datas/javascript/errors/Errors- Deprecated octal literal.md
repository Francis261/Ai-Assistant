# SyntaxError: "0"-prefixed octal literals are deprecated

Source: https://devdocs.io/javascript/errors/deprecated_octal_literal

The JavaScript strict mode-only exception "0-prefixed octal literals are deprecated; use the "0o" prefix instead" occurs when deprecated octal literals (0 followed by digits) are used.

## Message

```
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: Decimals with leading zeros are not allowed in strict mode. (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)
```

## Error type

SyntaxError in strict mode only.

## What went wrong?

Octal literals are deprecated. When you prefix a decimal integer with 0, you actually change it to an octal literal, which may be surprising. The standardized syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (0o or 0O).

Leading zeros are always forbidden, even when the literal is not valid octal literal syntax (such as when the literal contains the digits 8 or 9, or it has a decimal point). A number literal may only start with 0 if that 0 is its units place.

## Examples

### "0"-prefixed octal literals

```
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### Valid octal numbers

Use a leading zero followed by the letter "o" or "O":

```
0o3;
```

## See also

- Lexical grammar

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal
