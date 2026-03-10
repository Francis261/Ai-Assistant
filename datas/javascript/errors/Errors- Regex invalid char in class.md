# SyntaxError: invalid character in class in regular expression

Source: https://devdocs.io/javascript/errors/regex_invalid_char_in_class

The JavaScript exception "invalid character in class in regular expression" occurs when a character appears in a v-mode character class but it's not allowed to appear literally.

## Message

```
SyntaxError: Invalid regular expression: /[|]/v: Invalid character in character class (V8-based)
SyntaxError: invalid character in class in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid class set character (Safari)
```

## Error type

## What went wrong?

Normally, character classes can contain almost all characters literally. However, the v mode made the character class syntax more sophisticated, and in order to leave room for future syntax extensions, some syntax characters are forbidden from appearing literally in a character class. They include: (, ), [, ], {, }, /, -, |. If you want to match these literal characters, escape them; for example: /[\|]/v.

## Examples

### Invalid cases

```
/[(){}]/v;
```

### Valid cases

```
/[\(\)\{\}]/v;
```

## See also

- Regular expressions
- Character class: [...], [^...]

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_char_in_class
