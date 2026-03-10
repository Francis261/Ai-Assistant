# IntlChar::isJavaIDPart

Source: https://devdocs.io/php/intlchar.isjavaidpart

(PHP 7, PHP 8)

IntlChar::isJavaIDPart — Check if code point is permissible in a Java identifier

### Description

```
public static IntlChar::isJavaIDPart(int|string $codepoint): ?bool
```

Determines if the specified character is permissible in a Java identifier.

In addition to IntlChar::isIDPart(), true for characters with general category "Sc" (currency symbols).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint may occur in a Java identifier, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isJavaIDPart("A"));
var_dump(IntlChar::isJavaIDPart("$"));
var_dump(IntlChar::isJavaIDPart("\n"));
var_dump(IntlChar::isJavaIDPart("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
bool(false)
```

### See Also

- IntlChar::isIDIgnorable() - Check if code point is an ignorable character
- IntlChar::isIDPart() - Check if code point is permissible in an identifier
- IntlChar::isJavaIDStart() - Check if code point is permissible as the first character in a Java identifier
- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::isdigit() - Check if code point is a digit character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isjavaidpart.php
