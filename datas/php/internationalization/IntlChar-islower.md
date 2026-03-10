# IntlChar::islower

Source: https://devdocs.io/php/intlchar.islower

(PHP 7, PHP 8)

IntlChar::islower — Check if code point is a lowercase letter

### Description

```
public static IntlChar::islower(int|string $codepoint): ?bool
```

Determines whether the specified code point has the general category "Ll" (lowercase letter).

Note:

This misses some characters that are also lowercase but have a different general category value. In order to include those, use IntlChar::isULowercase().

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is an Ll lowercase letter, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::islower("A"));
var_dump(IntlChar::islower("a"));
var_dump(IntlChar::islower("Φ"));
var_dump(IntlChar::islower("φ"));
var_dump(IntlChar::islower("1"));
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

- IntlChar::isupper() - Check if code point has the general category "Lu" (uppercase letter)
- IntlChar::istitle() - Check if code point is a titlecase letter
- IntlChar::tolower() - Make Unicode character lowercase
- IntlChar::toupper() - Make Unicode character uppercase
- IntlChar::PROPERTY_LOWERCASE
- ctype_lower() - Check for lowercase character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.islower.php
