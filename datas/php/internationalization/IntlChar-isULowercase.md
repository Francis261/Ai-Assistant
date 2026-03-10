# IntlChar::isULowercase

Source: https://devdocs.io/php/intlchar.isulowercase

(PHP 7, PHP 8)

IntlChar::isULowercase — Check if code point has the Lowercase Unicode property

### Description

```
public static IntlChar::isULowercase(int|string $codepoint): ?bool
```

Check if a code point has the Lowercase Unicode property.

This is the same as IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_LOWERCASE)

Note:

This is different than IntlChar::islower() and will return true for more characters.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint has the Lowercase Unicode property, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isULowercase("A"));
var_dump(IntlChar::isULowercase("a"));
var_dump(IntlChar::isULowercase("Φ"));
var_dump(IntlChar::isULowercase("φ"));
var_dump(IntlChar::isULowercase("1"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
bool(true)
bool(false)
```

### See Also

- IntlChar::islower() - Check if code point is a lowercase letter
- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::PROPERTY_LOWERCASE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isulowercase.php
