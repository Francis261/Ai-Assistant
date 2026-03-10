# IntlChar::isxdigit

Source: https://devdocs.io/php/intlchar.isxdigit

(PHP 7, PHP 8)

IntlChar::isxdigit — Check if code point is a hexadecimal digit

### Description

```
public static IntlChar::isxdigit(int|string $codepoint): ?bool
```

Determines whether the specified code point is a hexadecimal digit.

true for characters with general category "Nd" (decimal digit numbers) as well as Latin letters a-f and A-F in both ASCII and Fullwidth ASCII. (That is, for letters with code points 0041..0046, 0061..0066, FF21..FF26, FF41..FF46.)

This is equivalent to IntlChar::digit($codepoint, 16) >= 0.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a hexadecimal character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isxdigit("A"));
var_dump(IntlChar::isxdigit("1"));
var_dump(IntlChar::isxdigit("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
```

### Notes

Note:

In order to narrow the definition of hexadecimal digits to only ASCII characters use:

```
<?php
$isASCIIHexadecimal = IntlChar::ord($codepoint) <= 0x7F && IntlChar::isxdigit($codepoint);
?>
```

### See Also

- IntlChar::isdigit() - Check if code point is a digit character
- ctype_xdigit() - Check for character(s) representing a hexadecimal digit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isxdigit.php
