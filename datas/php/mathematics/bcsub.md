# bcsub

Source: https://devdocs.io/php/function.bcsub

(PHP 4, PHP 5, PHP 7, PHP 8)

bcsub — Subtract one arbitrary precision number from another

### Description

```
bcsub(string $num1, string $num2, ?int $scale = null): string
```

Subtracts num2 from num1.

### Parameters

The left operand, as a string.

The right operand, as a string.

### Return Values

The result of the subtraction, as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

### Changelog

### Examples

Example #1 bcsub() example

```
<?php

$a = '1.234';
$b = '5';

echo bcsub($a, $b);     // -3
echo bcsub($a, $b, 4);  // -3.7660

?>
```

### See Also

- bcadd() - Add two arbitrary precision numbers
- BcMath\Number::sub() - Subtracts an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcsub.php
