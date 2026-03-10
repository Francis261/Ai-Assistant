# SyntaxError: invalid named capture reference in regular expression

Source: https://devdocs.io/javascript/errors/regex_invalid_named_capture_reference

The JavaScript exception "invalid named capture reference in regular expression" occurs when a regular expression pattern contains a named backreference that does not refer to a named capture group before it. The similar error message "invalid named reference in regular expression" is thrown when the sequence \k is encountered but is not followed by <.

## Message

```
SyntaxError: Invalid regular expression: /\k<x>/u: Invalid named capture referenced (V8-based)
SyntaxError: invalid named capture reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid \k<> named backreference (Safari)

SyntaxError: Invalid regular expression: /\k/u: Invalid named reference (V8-based)
SyntaxError: invalid named reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Error type

## What went wrong?

You are using the escape sequence \k which is parsed as a named backreference, but the \k is either syntactically invalid or does not refer to a named capture group in the pattern.

\k only starts a named backreference when the pattern contains a named capturing group or when the pattern is Unicode-aware; otherwise, it is an identity escape for the character k.

## Examples

### Invalid cases

```
/\k<x>/u; // Does not refer to a named capture group
/(?<x>.+)\k<y>/u; // Does not refer to an existing named capture group
/(?<x>.+)\k{x}/u; // Invalid syntax
```

### Valid cases

```
/(?<x>.+)\k<x>/u; // Refers to an existing named capture group
```

## See also

- Regular expressions
- Named backreference: \k<name>
- Named capturing group: (?<name>...)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_named_capture_reference
