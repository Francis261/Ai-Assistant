# bccomp

Source: https://devdocs.io/php/function.bccomp

(PHP 4, PHP 5, PHP 7, PHP 8)

bccomp — Compare two arbitrary precision numbers

### Description

```
bccomp(string $num1, string $num2, ?int $scale = null): int
```

Compares num1 to num2 and returns the result of the comparison as an integer.

### Parameters

The left operand, as a string.

The right operand, as a string.

### Return Values

Returns 0 if both operands are equal, 1 if num1 is greater than num2, -1 otherwise.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

### Changelog

### Examples

Example #1 bccomp() example

```
<?php

echo bccomp('1', '2') . "\n";   // -1
echo bccomp('1.00001', '1', 3); // 0
echo bccomp('1.00001', '1', 5); // 1

?>
```

### See Also

- BcMath\Number::compare() - Compares two arbitrary precision numbers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bccomp.php
