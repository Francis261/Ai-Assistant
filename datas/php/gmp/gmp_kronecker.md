# gmp_kronecker

Source: https://devdocs.io/php/function.gmp-kronecker

(PHP 7 >= 7.3.0, PHP 8)

gmp_kronecker — Kronecker symbol

### Description

```
gmp_kronecker(GMP|int|string $num1, GMP|int|string $num2): int
```

This function computes the Kronecker symbol of num1 and num2.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns the Kronecker symbol of num1 and num2

### See Also

- gmp_jacobi() - Jacobi symbol
- gmp_legendre() - Legendre symbol

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-kronecker.php
