# bcpow

Source: https://devdocs.io/php/function.bcpow

(PHP 4, PHP 5, PHP 7, PHP 8)

bcpow — Raise an arbitrary precision number to another

### Description

```
bcpow(string $num, string $exponent, ?int $scale = null): string
```

Raise num to the power exponent.

### Parameters

The base, as a string.

The exponent, as a string. Must be a value with no fractional part. The valid range of the exponent is platform specific, but is at least -2147483648 to 2147483647.

### Return Values

Returns the result as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num or exponent is not a well-formed BCMath numeric string
- exponent has a fractional part
- exponent or scale is outside the valid range

This function throws a DivisionByZeroError exception if num is 0 and exponent is a negative value.

### Changelog

### Examples

Example #1 bcpow() example

```
<?php

echo bcpow('4.2', '3', 2); // 74.08

?>
```

### Notes

Note:

Before PHP 7.3.0 bcpow() may return a result with fewer digits after the decimal point than the scale parameter would indicate. This only occurs when the result doesn't require all of the precision allowed by the scale. For example:

Example #2 bcpow() scale example

```
<?php
echo bcpow('5', '2', 2);     // prints "25", not "25.00"
?>
```

### See Also

- bcpowmod() - Raise an arbitrary precision number to another, reduced by a specified modulus
- bcsqrt() - Get the square root of an arbitrary precision number
- BcMath\Number::pow() - Raises an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcpow.php
