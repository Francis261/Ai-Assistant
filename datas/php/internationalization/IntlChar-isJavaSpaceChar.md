# IntlChar::isJavaSpaceChar

Source: https://devdocs.io/php/intlchar.isjavaspacechar

(PHP 7, PHP 8)

IntlChar::isJavaSpaceChar — Check if code point is a space character according to Java

### Description

```
public static IntlChar::isJavaSpaceChar(int|string $codepoint): ?bool
```

Determine if the specified code point is a space character according to Java.

true for characters with general categories "Z" (separators), which does not include control codes (e.g., TAB or Line Feed).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a space character according to Java, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isJavaSpaceChar("A"));
var_dump(IntlChar::isJavaSpaceChar(" "));
var_dump(IntlChar::isJavaSpaceChar("\n"));
var_dump(IntlChar::isJavaSpaceChar("\t"));
var_dump(IntlChar::isJavaSpaceChar("\u{00A0}"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
bool(false)
bool(true)
```

### See Also

- IntlChar::isspace() - Check if code point is a space character
- IntlChar::isWhitespace() - Check if code point is a whitespace character according to ICU
- IntlChar::isUWhiteSpace() - Check if code point has the White_Space Unicode property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isjavaspacechar.php
