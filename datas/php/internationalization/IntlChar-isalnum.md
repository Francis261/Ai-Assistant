# IntlChar::isalnum

Source: https://devdocs.io/php/intlchar.isalnum

(PHP 7, PHP 8)

IntlChar::isalnum — Check if code point is an alphanumeric character

### Description

```
public static IntlChar::isalnum(int|string $codepoint): ?bool
```

Determines whether the specified code point is an alphanumeric character (letter or digit). true for characters with general categories "L" (letters) and "Nd" (decimal digit numbers).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is an alphanumeric character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isalnum("A"));
var_dump(IntlChar::isalnum("1"));
var_dump(IntlChar::isalnum("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
```

### See Also

- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::isdigit() - Check if code point is a digit character
- ctype_alnum() - Check for alphanumeric character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isalnum.php
