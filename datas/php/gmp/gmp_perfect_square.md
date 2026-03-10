# gmp_perfect_square

Source: https://devdocs.io/php/function.gmp-perfect-square

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_perfect_square — Perfect square check

### Description

```
gmp_perfect_square(GMP|int|string $num): bool
```

Check if a number is a perfect square.

### Parameters

The number being checked as a perfect square.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns true if num is a perfect square, false otherwise.

### Examples

Example #1 gmp_perfect_square() example

```
<?php
// 3 * 3, perfect square
var_dump(gmp_perfect_square("9"));

// not a perfect square
var_dump(gmp_perfect_square("7"));

// 1234567890 * 1234567890, perfect square
var_dump(gmp_perfect_square("1524157875019052100"));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(true)
```

### See Also

- gmp_perfect_power() - Perfect power check
- gmp_sqrt() - Calculate square root
- gmp_sqrtrem() - Square root with remainder

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-perfect-square.php
