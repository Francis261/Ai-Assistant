# IntlChar::isJavaIDStart

Source: https://devdocs.io/php/intlchar.isjavaidstart

(PHP 7, PHP 8)

IntlChar::isJavaIDStart — Check if code point is permissible as the first character in a Java identifier

### Description

```
public static IntlChar::isJavaIDStart(int|string $codepoint): ?bool
```

Determines if the specified character is permissible as the start of a Java identifier.

In addition to IntlChar::isIDStart(), true for characters with general categories "Sc" (currency symbols) and "Pc" (connecting punctuation).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint may start a Java identifier, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isJavaIDStart("A"));
var_dump(IntlChar::isJavaIDStart("$"));
var_dump(IntlChar::isJavaIDStart("\n"));
var_dump(IntlChar::isJavaIDStart("\u{2603}"));
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

- IntlChar::isIDStart() - Check if code point is permissible as the first character in an identifier
- IntlChar::isJavaIDPart() - Check if code point is permissible in a Java identifier
- IntlChar::isalpha() - Check if code point is a letter character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isjavaidstart.php
