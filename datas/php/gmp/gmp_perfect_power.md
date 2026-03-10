# gmp_perfect_power

Source: https://devdocs.io/php/function.gmp-perfect-power

(PHP 7 >= 7.3.0, PHP 8)

gmp_perfect_power — Perfect power check

### Description

```
gmp_perfect_power(GMP|int|string $num): bool
```

Checks whether num is a perfect power.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns true if num is a perfect power, false otherwise.

### See Also

- gmp_perfect_square() - Perfect square check

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-perfect-power.php
