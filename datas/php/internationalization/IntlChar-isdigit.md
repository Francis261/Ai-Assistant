# IntlChar::isdigit

Source: https://devdocs.io/php/intlchar.isdigit

(PHP 7, PHP 8)

IntlChar::isdigit — Check if code point is a digit character

### Description

```
public static IntlChar::isdigit(int|string $codepoint): ?bool
```

Determines whether the specified code point is a digit character.

true for characters with general category "Nd" (decimal digit numbers). Beginning with Unicode 4, this is the same as testing for the Numeric_Type of Decimal.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a digit character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isdigit("A"));
var_dump(IntlChar::isdigit("1"));
var_dump(IntlChar::isdigit("\t"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
```

### See Also

- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::isalnum() - Check if code point is an alphanumeric character
- IntlChar::isxdigit() - Check if code point is a hexadecimal digit
- ctype_digit() - Check for numeric character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isdigit.php
