# SyntaxError: invalid decimal escape in regular expression

Source: https://devdocs.io/javascript/errors/regex_invalid_decimal_escape

The JavaScript exception "invalid decimal escape in regular expression" occurs when a legacy octal escape sequence is used in a Unicode-aware regular expression pattern.

## Message

```
SyntaxError: Invalid regular expression: /\00/u: Invalid decimal escape (V8-based)
SyntaxError: invalid decimal escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid octal escape for Unicode pattern (Safari)
```

## Error type

## What went wrong?

In a regular expression, \0 followed by another digit is a legacy octal escape sequence. The same syntax is banned in template strings and strict-mode string literals. In regexes, this feature is disabled by the Unicode-aware modes (u and v). \0 not followed by another digit is a valid escape sequence that represents the null character (U+0000).

\ followed by a non-zero digit is a backreference, and is invalid in Unicode-aware mode if it doesn't refer to a capturing group; see invalid identity escape for more information.

## Examples

### Invalid cases

```
/\00/u;
/\01/u;
```

### Valid cases

```
// If you want to match NULL followed by a digit, use a character class
/[\0]0/u;
// If you want to match a character by its character value, use \x
/\x01/u;
```

## See also

- Regular expressions
- Escape sequences
- Character escape: \n, \u{...}

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_decimal_escape
