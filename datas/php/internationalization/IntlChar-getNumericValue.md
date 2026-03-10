# IntlChar::getNumericValue

Source: https://devdocs.io/php/intlchar.getnumericvalue

(PHP 7, PHP 8)

IntlChar::getNumericValue — Get the numeric value for a Unicode code point

### Description

```
public static IntlChar::getNumericValue(int|string $codepoint): ?float
```

Gets the numeric value for a Unicode code point as defined in the Unicode Character Database.

For characters without any numeric values in the Unicode Character Database, this function will return IntlChar::NO_NUMERIC_VALUE.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Numeric value of codepoint, or IntlChar::NO_NUMERIC_VALUE if none is defined. This constant was added in PHP 7.0.6, prior to this version the literal value (float)-123456789 may be used instead. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::getNumericValue("4"));
var_dump(IntlChar::getNumericValue("x"));
var_dump(IntlChar::getNumericValue("\u{216C}"));
?>
```

The above example will output:

```
float(4)
float(-123456789)
float(50)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getnumericvalue.php
