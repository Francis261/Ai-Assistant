# SyntaxError: negated character class with strings in regular expression

Source: https://devdocs.io/javascript/errors/regex_negated_char_class_with_strings

The JavaScript exception "negated character class with strings in regular expression" occurs when a v-mode character class is negated and may be able to match a string (more than one character).

## Message

```
SyntaxError: Invalid regular expression: /[^\p{RGI_Emoji_Flag_Sequence}]/v: Negated character class may contain strings (V8-based)
SyntaxError: negated character class with strings in regular expression (Firefox)
SyntaxError: Invalid regular expression: negated class set may contain strings (Safari)
```

## Error type

## What went wrong?

In v mode, character classes are able to match more than 1 character. For example, /[\q{abc}]/v would match the sequence "abc", and /[\p{RGI_Emoji_Flag_Sequence}]/v would match any character sequence that represents an emoji flag. However, negated character classes [^...] are not allowed to match strings, so /[^\p{RGI_Emoji_Flag_Sequence}]/v is invalid, because it's unclear how many characters it should match. For more information, see the v-mode character class reference.

## Examples

### Invalid cases

```
/[^\p{RGI_Emoji_Flag_Sequence}]/v;
```

### Valid cases

```
// Matches two characters that are not an emoji flag sequence
/(?!\p{RGI_Emoji_Flag_Sequence})../v;
```

## See also

- Regular expressions
- Character class: [...], [^...]
- Unicode character class escape: \p{...}, \P{...}

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_negated_char_class_with_strings
