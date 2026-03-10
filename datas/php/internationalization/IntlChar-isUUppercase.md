# IntlChar::isUUppercase

Source: https://devdocs.io/php/intlchar.isuuppercase

(PHP 7, PHP 8)

IntlChar::isUUppercase — Check if code point has the Uppercase Unicode property

### Description

```
public static IntlChar::isUUppercase(int|string $codepoint): ?bool
```

Check if a code point has the Uppercase Unicode property.

This is the same as IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_UPPERCASE)

Note:

This is different than IntlChar::isupper() and will return true for more characters.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint has the Uppercase Unicode property, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isUUppercase("A"));
var_dump(IntlChar::isUUppercase("a"));
var_dump(IntlChar::isUUppercase("Φ"));
var_dump(IntlChar::isUUppercase("φ"));
var_dump(IntlChar::isUUppercase("1"));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)
```

### See Also

- IntlChar::isupper() - Check if code point has the general category "Lu" (uppercase letter)
- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::PROPERTY_UPPERCASE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isuuppercase.php
