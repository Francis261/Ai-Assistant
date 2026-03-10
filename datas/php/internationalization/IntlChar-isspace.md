# IntlChar::isspace

Source: https://devdocs.io/php/intlchar.isspace

(PHP 7, PHP 8)

IntlChar::isspace — Check if code point is a space character

### Description

```
public static IntlChar::isspace(int|string $codepoint): ?bool
```

Determines if the specified character is a space character or not.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a space character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isspace("A"));
var_dump(IntlChar::isspace(" "));
var_dump(IntlChar::isspace("\n"));
var_dump(IntlChar::isspace("\t"));
var_dump(IntlChar::isspace("\u{00A0}"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)
```

### See Also

- IntlChar::isJavaSpaceChar() - Check if code point is a space character according to Java
- IntlChar::isWhitespace() - Check if code point is a whitespace character according to ICU
- IntlChar::isUWhiteSpace() - Check if code point has the White_Space Unicode property
- ctype_space() - Check for whitespace character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isspace.php
