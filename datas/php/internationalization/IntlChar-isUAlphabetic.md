# IntlChar::isUAlphabetic

Source: https://devdocs.io/php/intlchar.isualphabetic

(PHP 7, PHP 8)

IntlChar::isUAlphabetic — Check if code point has the Alphabetic Unicode property

### Description

```
public static IntlChar::isUAlphabetic(int|string $codepoint): ?bool
```

Check if a code point has the Alphabetic Unicode property.

This is the same as IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_ALPHABETIC)

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint has the Alphabetic Unicode property, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isUAlphabetic("A"));
var_dump(IntlChar::isUAlphabetic("1"));
var_dump(IntlChar::isUAlphabetic("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
```

### See Also

- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::PROPERTY_ALPHABETIC

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isualphabetic.php
