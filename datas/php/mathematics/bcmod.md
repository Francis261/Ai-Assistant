# bcmod

Source: https://devdocs.io/php/function.bcmod

(PHP 4, PHP 5, PHP 7, PHP 8)

bcmod — Get modulus of an arbitrary precision number

### Description

```
bcmod(string $num1, string $num2, ?int $scale = null): string
```

Get the remainder of dividing num1 by num2. The result has the same sign as num1.

### Parameters

The left operand, as a string.

The right operand, as a string.

### Return Values

Returns the modulus as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

This function throws a DivisionByZeroError exception if num2 is 0.

### Changelog

### Examples

Example #1 bcmod() example

```
<?php
bcscale(0);
echo bcmod( '5',  '3'); //  2
echo bcmod( '5', '-3'); //  2
echo bcmod('-5',  '3'); // -2
echo bcmod('-5', '-3'); // -2
?>
```

Example #2 bcmod() with decimals

```
<?php
bcscale(1);
echo bcmod('5.7', '1.3'); // 0.5 as of PHP 7.2.0; 0 previously
?>
```

### See Also

- bcdiv() - Divide two arbitrary precision numbers
- bcdivmod() - Get the quotient and modulus of an arbitrary precision number
- BcMath\Number::mod() - Gets the modulus of an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcmod.php
