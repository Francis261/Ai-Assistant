# SyntaxError: invalid identity escape in regular expression

Source: https://devdocs.io/javascript/errors/regex_invalid_identity_escape

The JavaScript exception "invalid identity escape in regular expression" occurs when a Unicode-aware regular expression pattern contains an escape sequence that does not represent a recognized escape sequence.

## Message

```
SyntaxError: Invalid regular expression: /\q/u: Invalid escape (V8-based)
SyntaxError: invalid identity escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Error type

## What went wrong?

In Unicode-unaware mode, \ could be used to escape any character, including those without a defined meaning. In these cases, the escaped character represents itself. For example, \q would match the character q. This severely limits the ability to add new escape sequences in the future, so in Unicode-aware mode, only recognized escape sequences are allowed. Do not add \ redundantly.

This error is also thrown when the \x character escape is not followed by two hexadecimal digits.

For an exhaustive list of available escape sequences, see the regular expressions reference. For a table of which characters can appear literally escaped or unescaped in each context, see literal characters.

## Examples

### Invalid cases

```
/[\f\v\n\t\ ]/u;
```

### Valid cases

```
// There's no need to escape the space
/[\f\v\n\t ]/u;
```

## See also

- Regular expressions
- Escape sequences
- Character escape: \n, \u{...}
- Literal character: a, b

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape
