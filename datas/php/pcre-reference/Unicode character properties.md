# Unicode character properties

Source: https://devdocs.io/php/regexp.reference.unicode

## Unicode character properties

Since 5.1.0, three additional escape sequences to match generic character types are available when UTF-8 mode is selected. They are:

The property names represented by xx above are limited to the Unicode general category properties. Each character has exactly one such property, specified by a two-letter abbreviation. For compatibility with Perl, negation can be specified by including a circumflex between the opening brace and the property name. For example, \p{^Lu} is the same as \P{Lu}.

If only one letter is specified with \p or \P, it includes all the properties that start with that letter. In this case, in the absence of negation, the curly brackets in the escape sequence are optional; these two examples have the same effect:

```
\p{L}
\pL
```

Extended properties such as InMusicalSymbols are not supported by PCRE.

Specifying case-insensitive (caseless) matching does not affect these escape sequences. For example, \p{Lu} always matches only upper case letters.

Sets of Unicode characters are defined as belonging to certain scripts. A character from one of these sets can be matched using a script name. For example:

- \p{Greek}
- \P{Han}

Those that are not part of an identified script are lumped together as Common. The current list of scripts is:

The \X escape matches a Unicode extended grapheme cluster. An extended grapheme cluster is one or more Unicode characters that combine to form a single glyph. In effect, this can be thought of as the Unicode equivalent of . as it will match one composed character, regardless of how many individual characters are actually used to render it.

In versions of PCRE older than 8.32 (which corresponds to PHP versions before 5.4.14 when using the bundled PCRE library), \X is equivalent to (?>\PM\pM*). That is, it matches a character without the "mark" property, followed by zero or more characters with the "mark" property, and treats the sequence as an atomic group (see below). Characters with the "mark" property are typically accents that affect the preceding character.

Matching characters by Unicode property is not fast, because PCRE has to search a structure that contains data for over fifteen thousand characters. That is why the traditional escape sequences such as \d and \w do not use Unicode properties in PCRE.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.unicode.php
