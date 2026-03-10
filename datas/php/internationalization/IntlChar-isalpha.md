# IntlChar::isalpha

Source: https://devdocs.io/php/intlchar.isalpha

(PHP 7, PHP 8)

IntlChar::isalpha — Check if code point is a letter character

### Description

```
public static IntlChar::isalpha(int|string $codepoint): ?bool
```

Determines whether the specified code point is a letter character. true for general categories "L" (letters).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a letter character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isalpha("A"));
var_dump(IntlChar::isalpha("1"));
var_dump(IntlChar::isalpha("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
```

### See Also

- IntlChar::isalnum() - Check if code point is an alphanumeric character
- IntlChar::isdigit() - Check if code point is a digit character
- ctype_alpha() - Check for alphabetic character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isalpha.php
