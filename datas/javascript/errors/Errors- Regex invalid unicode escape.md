# SyntaxError: invalid unicode escape in regular expression

Source: https://devdocs.io/javascript/errors/regex_invalid_unicode_escape

The JavaScript exception "invalid unicode escape in regular expression" occurs when the \c and \u character escapes are not followed by valid characters.

## Message

```
SyntaxError: Invalid regular expression: /\u{123456}/u: Invalid Unicode escape (V8-based)
SyntaxError: invalid unicode escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid Unicode code point \u{} escape (Safari)
```

## Error type

## What went wrong?

In Unicode-aware mode mode, the \c escape sequence must be followed by a letter from A to Z or a to z, and the \u escape sequence must either be followed by 4 hexadecimal digits, or 1 to 6 hexadecimal digits enclosed in curly braces ({}). Furthermore, when using the \u{xxx} escape sequence, the digits must represent a valid Unicode code point, which means its value cannot exceed 10FFFF.

## Examples

### Invalid cases

```
/\u{123456}/u; // Unicode code point is too large
/\u65/u; // Not enough digits
/\c1/u; // Not a letter
```

### Valid cases

```
/\u0065/u; // Lowercase "e"
/\u{1f600}/u; // Grinning face emoji
/\cA/u; // U+0001 (Start of Heading)
```

## See also

- Regular expressions
- Character escape: \n, \u{...}

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_unicode_escape
