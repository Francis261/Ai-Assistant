# IntlChar::digit

Source: https://devdocs.io/php/intlchar.digit

(PHP 7, PHP 8)

IntlChar::digit — Get the decimal digit value of a code point for a given radix

### Description

```
public static IntlChar::digit(int|string $codepoint, int $base = 10): int|false|null
```

Returns the decimal digit value of the code point in the specified radix.

If the radix is not in the range 2<=radix<=36 or if the value of codepoint is not a valid digit in the specified radix, false is returned. A character is a valid digit if at least one of the following is true:

- The character has a decimal digit value. Such characters have the general category "Nd" (decimal digit numbers) and a Numeric_Type of Decimal. In this case the value is the character's decimal digit value.
- The character is one of the uppercase Latin letters 'A' through 'Z'. In this case the value is c-'A'+10.
- The character is one of the lowercase Latin letters 'a' through 'z'. In this case the value is ch-'a'+10.
- Latin letters from both the ASCII range (0061..007A, 0041..005A) as well as from the Fullwidth ASCII range (FF41..FF5A, FF21..FF3A) are recognized.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

The radix (defaults to 10).

### Return Values

Returns the numeric value represented by the character in the specified radix, or false if there is no value or if the value exceeds the radix. Returns null on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::digit("0"));
var_dump(IntlChar::digit("3"));
var_dump(IntlChar::digit("A"));
var_dump(IntlChar::digit("A", 16));
?>
```

The above example will output:

```
int(0)
int(3)
bool(false)
int(10)
```

### See Also

- IntlChar::forDigit() - Get character representation for a given digit and radix
- IntlChar::charDigitValue() - Get the decimal digit value of a decimal digit character
- IntlChar::isdigit() - Check if code point is a digit character
- IntlChar::PROPERTY_NUMERIC_TYPE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.digit.php
