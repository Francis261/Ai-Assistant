# IntlChar::isupper

Source: https://devdocs.io/php/intlchar.isupper

(PHP 7, PHP 8)

IntlChar::isupper — Check if code point has the general category "Lu" (uppercase letter)

### Description

```
public static IntlChar::isupper(int|string $codepoint): ?bool
```

Determines whether the specified code point has the general category "Lu" (uppercase letter).

Note:

This misses some characters that are also uppercase but have a different general category value. In order to include those, use IntlChar::isUUppercase().

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is an Lu uppercase letter, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isupper("A"));
var_dump(IntlChar::isupper("a"));
var_dump(IntlChar::isupper("Φ"));
var_dump(IntlChar::isupper("φ"));
var_dump(IntlChar::isupper("1"));
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

- IntlChar::islower() - Check if code point is a lowercase letter
- IntlChar::istitle() - Check if code point is a titlecase letter
- IntlChar::tolower() - Make Unicode character lowercase
- IntlChar::toupper() - Make Unicode character uppercase
- IntlChar::PROPERTY_UPPERCASE
- ctype_upper() - Check for uppercase character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isupper.php
