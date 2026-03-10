# bcmul

Source: https://devdocs.io/php/function.bcmul

(PHP 4, PHP 5, PHP 7, PHP 8)

bcmul — Multiply two arbitrary precision numbers

### Description

```
bcmul(string $num1, string $num2, ?int $scale = null): string
```

Multiply num1 by num2.

### Parameters

The left operand, as a string.

The right operand, as a string.

### Return Values

Returns the result as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

### Changelog

### Examples

Example #1 bcmul() example

```
<?php
echo bcmul('1.34747474747', '35', 3); // 47.161
echo bcmul('2', '4'); // 8
?>
```

### Notes

Note:

Prior to PHP 7.3.0, bcmul() may return a result with fewer digits after the decimal point than the scale parameter would indicate. This only occurs when the result doesn't require all of the precision allowed by the scale. For example:

Example #2 bcmul() scale example

```
<?php
echo bcmul('5', '2', 2);     // prints "10", not "10.00"
?>
```

### See Also

- bcdiv() - Divide two arbitrary precision numbers
- BcMath\Number::mul() - Multiplies an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcmul.php
