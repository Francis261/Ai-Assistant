# bcdiv

Source: https://devdocs.io/php/function.bcdiv

(PHP 4, PHP 5, PHP 7, PHP 8)

bcdiv — Divide two arbitrary precision numbers

### Description

```
bcdiv(string $num1, string $num2, ?int $scale = null): string
```

Divides num1 by num2.

### Parameters

The dividend, as a string.

The divisor, as a string.

### Return Values

Returns the result of the division as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

This function throws a DivisionByZeroError exception if num2 is 0.

### Changelog

### Examples

Example #1 bcdiv() example

```
<?php

echo bcdiv('105', '6.55957', 3);  // 16.007

?>
```

### See Also

- bcdivmod() - Get the quotient and modulus of an arbitrary precision number
- bcmod() - Get modulus of an arbitrary precision number
- bcmul() - Multiply two arbitrary precision numbers
- BcMath\Number::div() - Divides by an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcdiv.php
