# bcadd

Source: https://devdocs.io/php/function.bcadd

(PHP 4, PHP 5, PHP 7, PHP 8)

bcadd — Add two arbitrary precision numbers

### Description

```
bcadd(string $num1, string $num2, ?int $scale = null): string
```

Sums num1 and num2.

### Parameters

The left operand, as a string.

The right operand, as a string.

### Return Values

The sum of the two operands, as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

### Changelog

### Examples

Example #1 bcadd() example

```
<?php

$a = '1.234';
$b = '5';

echo bcadd($a, $b);     // 6
echo bcadd($a, $b, 4);  // 6.2340

?>
```

### See Also

- bcsub() - Subtract one arbitrary precision number from another
- BcMath\Number::add() - Adds an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcadd.php
