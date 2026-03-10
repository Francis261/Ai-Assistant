# expm1

Source: https://devdocs.io/php/function.expm1

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

expm1 — Returns exp($num) - 1, computed in a way that is accurate even when the value of number is close to zero

### Description

```
expm1(float $num): float
```

expm1() returns the equivalent to exp($num) - 1 computed in a way that is accurate even if the value of num is near zero, a case where exp($num) - 1 would be inaccurate due to subtraction of two numbers that are nearly equal.

### Parameters

The argument to process

### Return Values

e to the power of num, minus one.

### See Also

- log1p() - Returns log(1 + number), computed in a way that is accurate even when the value of number is close to zero
- exp() - Calculates the exponent of e

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.expm1.php
