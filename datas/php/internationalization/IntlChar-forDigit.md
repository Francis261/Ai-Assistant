# IntlChar::forDigit

Source: https://devdocs.io/php/intlchar.fordigit

(PHP 7, PHP 8)

IntlChar::forDigit — Get character representation for a given digit and radix

### Description

```
public static IntlChar::forDigit(int $digit, int $base = 10): int
```

Determines the character representation for a specific digit in the specified radix.

If the value of radix is not a valid radix, or the value of digit is not a valid digit in the specified radix, the null character (U+0000) is returned.

The radix argument is valid if it is greater than or equal to 2 and less than or equal to 36. The digit argument is valid if 0 <= digit < radix.

If the digit is less than 10, then '0' + digit is returned. Otherwise, the value 'a' + digit - 10 is returned.

### Parameters

The number to convert to a character.

The radix (defaults to 10).

### Return Values

The character representation (as a int) of the specified digit in the specified radix.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::forDigit(0));
var_dump(IntlChar::forDigit(3));
var_dump(IntlChar::forDigit(3, 10));
var_dump(IntlChar::forDigit(10));
var_dump(IntlChar::forDigit(10, 16));
?>
```

The above example will output:

```
int(48)
int(51)
int(51)
int(0)
int(97)
```

### See Also

- IntlChar::digit() - Get the decimal digit value of a code point for a given radix
- IntlChar::charDigitValue() - Get the decimal digit value of a decimal digit character
- IntlChar::isdigit() - Check if code point is a digit character
- IntlChar::PROPERTY_NUMERIC_TYPE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.fordigit.php
