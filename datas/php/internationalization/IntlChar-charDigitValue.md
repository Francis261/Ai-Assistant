# IntlChar::charDigitValue

Source: https://devdocs.io/php/intlchar.chardigitvalue

(PHP 7, PHP 8)

IntlChar::charDigitValue — Get the decimal digit value of a decimal digit character

### Description

```
public static IntlChar::charDigitValue(int|string $codepoint): ?int
```

Returns the decimal digit value of a decimal digit character.

Such characters have the general category "Nd" (decimal digit numbers) and a Numeric_Type of Decimal.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

The decimal digit value of codepoint, or -1 if it is not a decimal digit character. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::charDigitValue("1"));
var_dump(IntlChar::charDigitValue("\u{0662}"));
var_dump(IntlChar::charDigitValue("\u{0E53}"));
?>
```

The above example will output:

```
int(1)
int(2)
int(3)
```

### See Also

- IntlChar::getNumericValue() - Get the numeric value for a Unicode code point

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.chardigitvalue.php
