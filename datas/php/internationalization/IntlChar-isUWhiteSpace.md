# IntlChar::isUWhiteSpace

Source: https://devdocs.io/php/intlchar.isuwhitespace

(PHP 7, PHP 8)

IntlChar::isUWhiteSpace — Check if code point has the White_Space Unicode property

### Description

```
public static IntlChar::isUWhiteSpace(int|string $codepoint): ?bool
```

Check if a code point has the White_Space Unicode property.

This is the same as IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_WHITE_SPACE)

Note:

This is different from both IntlChar::isspace() and IntlChar::isWhitespace().

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint has the White_Space Unicode property, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isUWhiteSpace("A"));
var_dump(IntlChar::isUWhiteSpace(" "));
var_dump(IntlChar::isUWhiteSpace("\n"));
var_dump(IntlChar::isUWhiteSpace("\t"));
var_dump(IntlChar::isUWhiteSpace("\u{00A0}"));
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

- IntlChar::isspace() - Check if code point is a space character
- IntlChar::isWhitespace() - Check if code point is a whitespace character according to ICU
- IntlChar::isJavaSpaceChar() - Check if code point is a space character according to Java
- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::PROPERTY_WHITE_SPACE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isuwhitespace.php
