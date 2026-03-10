# IntlChar::isblank

Source: https://devdocs.io/php/intlchar.isblank

(PHP 7, PHP 8)

IntlChar::isblank — Check if code point is a "blank" or "horizontal space" character

### Description

```
public static IntlChar::isblank(int|string $codepoint): ?bool
```

Determines whether the specified code point is a "blank" or "horizontal space", a character that visibly separates words on a line.

The following are equivalent definitions:

- true for Unicode White_Space characters except for "vertical space controls" where "vertical space controls" are the following characters: U+000A (LF) U+000B (VT) U+000C (FF) U+000D (CR) U+0085 (NEL) U+2028 (LS) U+2029 (PS)
- true for U+0009 (TAB) and characters with general category "Zs" (space separators) except Zero Width Space (ZWSP, U+200B).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is either a "blank" or "horizontal space" character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isblank("A"));
var_dump(IntlChar::isblank(" "));
var_dump(IntlChar::isblank("\t"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(true)
```

### See Also

- IntlChar::isspace() - Check if code point is a space character
- IntlChar::isJavaSpaceChar() - Check if code point is a space character according to Java
- IntlChar::isUWhiteSpace() - Check if code point has the White_Space Unicode property
- IntlChar::isWhitespace() - Check if code point is a whitespace character according to ICU

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isblank.php
