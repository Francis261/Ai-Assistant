# Character escape: \n, \u{...}

Source: https://devdocs.io/javascript/regular_expressions/character_escape

A character escape represents a character that may not be able to be conveniently represented in its literal form.

## Syntax

```
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \{, \}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

Note: , is not part of the syntax.

### Parameters

A hexadecimal number representing the Unicode code point of the character. The \xHH form must have two hexadecimal digits; the \uHHHH form must have four; the \u{HHH} form may have 1 to 6 hexadecimal digits.

## Description

The following character escapes are recognized in regular expressions:

Same as those in string literals, except \b, which represents a word boundary in regexes unless in a character class.

Represents the control character with value equal to the letter's character value modulo 32. For example, \cJ represents line break (\n), because the code point of J is 74, and 74 modulo 32 is 10, which is the code point of line break. Because an uppercase letter and its lowercase form differ by 32, \cJ and \cj are equivalent. You can represent control characters from 1 to 26 in this form.

Represents the U+0000 NUL character. Cannot be followed by a digit (which makes it a legacy octal escape sequence).

Represents the character itself. For example, \\ represents a backslash, and \( represents a left parenthesis. These are syntax characters in regexes (/ is the delimiter of a regex literal), so they require escaping unless in a character class.

Represents the character with the given hexadecimal Unicode code point. The hexadecimal number must be exactly two digits long.

Represents the character with the given hexadecimal Unicode code point. The hexadecimal number must be exactly four digits long. Two such escape sequences can be used to represent a surrogate pair in Unicode-aware mode. (In Unicode-unaware mode, they are always two separate characters.)

(Unicode-aware mode only) Represents the character with the given hexadecimal Unicode code point. The hexadecimal number can be from 1 to 6 digits long.

In Unicode-unaware mode, escape sequences that are not one of the above become identity escapes: they represent the character that follows the backslash. For example, \a represents the character a. This behavior limits the ability to introduce new escape sequences without causing backward compatibility issues, and is therefore forbidden in Unicode-aware mode.

In Unicode-unaware mode, ], {, and } may appear literally if it's not possible to parse them as the end of a character class or quantifier delimiters. This is a deprecated syntax for web compatibility, and you should not rely on it.

In Unicode-unaware mode, escape sequences within character classes of the form \cX where X is a number or _ are decoded in the same way as those with ASCII letters: \c0 is the same as \cP when taken modulo 32. In addition, if the form \cX is encountered anywhere where X is not one of the recognized characters, then the backslash is treated as a literal character. These syntaxes are also deprecated.

```
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Examples

### Using character escapes

Character escapes are useful when you want to match a character that is not easily represented in its literal form. For example, you cannot use a line break literally in a regex literal, so you must use a character escape:

```
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Specifications

## Browser compatibility

## See also

- Character classes guide
- Regular expressions
- Character class: [...], [^...]
- Character class escape: \d, \D, \w, \W, \s, \S
- Literal character: a, b
- Unicode character class escape: \p{...}, \P{...}
- Backreference: \1, \2
- Named backreference: \k<name>
- Word boundary assertion: \b, \B

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
