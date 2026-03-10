# SyntaxError: invalid regexp group

Source: https://devdocs.io/javascript/errors/regex_invalid_group

The JavaScript exception "invalid regexp group" occurs when the sequence (? does not start a valid group syntax. Recognized group syntaxes that start with (? include:

- (?: for non-capturing groups
- (?= for positive lookahead
- (?! for negative lookahead
- (?<= for positive lookbehind
- (?<! for negative lookbehind
- (?< for named capturing groups
- (?-i:, (?i:, (?m:, (?ims-:, etc. for modifiers

(? followed by any other character would cause this error.

## Message

```
SyntaxError: Invalid regular expression: /(?1)/: Invalid group (V8-based)
SyntaxError: invalid regexp group (Firefox)
SyntaxError: Invalid regular expression: unrecognized character after (? (Safari)
```

## Error type

## What went wrong?

? is not an atom, so it does not make sense to appear at the start of a capturing group (? is a quantifier and should be placed after an atom). Maybe you want to match the ? character literally, in which case you should escape it with a backslash (\?). Maybe you remembered the regex syntax wrong, and you intend to use one of the recognized group syntaxes listed above. Maybe you are using a feature that is not supported by the current JavaScript engine.

## Examples

### Invalid cases

```
/Hello(?|!)/;
// This is Perl syntax
/(?[\p{Thai}&\p{Digit}])/;
```

### Valid cases

```
/Hello(\?|!)/;
// This is JavaScript syntax for character set operations
/[\p{Thai}&&\p{Digit}]/v;
```

## See also

- Regular expressions
- Capturing group: (...)
- Lookahead assertion: (?=...), (?!...)
- Lookbehind assertion: (?<=...), (?<!...)
- Modifier: (?ims-ims:...)
- Named capturing group: (?<name>...)
- Non-capturing group: (?:...)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_group
