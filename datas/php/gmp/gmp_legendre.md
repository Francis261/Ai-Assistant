# gmp_legendre

Source: https://devdocs.io/php/function.gmp-legendre

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_legendre — Legendre symbol

### Description

```
gmp_legendre(GMP|int|string $num1, GMP|int|string $num2): int
```

Compute the » Legendre symbol of num1 and num2. num2 should be odd and must be positive.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

Should be odd and must be positive.

### Return Values

A GMP object.

### Examples

Example #1 gmp_legendre() example

```
<?php
echo gmp_legendre("1", "3") . "\n";
echo gmp_legendre("2", "3") . "\n";
?>
```

The above example will output:

```
1
0
```

### See Also

- gmp_jacobi() - Jacobi symbol
- gmp_kronecker() - Kronecker symbol

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-legendre.php
