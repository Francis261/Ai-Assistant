# gmp_lcm

Source: https://devdocs.io/php/function.gmp-lcm

(PHP 7 >= 7.3.0, PHP 8)

gmp_lcm — Calculate LCM

### Description

```
gmp_lcm(GMP|int|string $num1, GMP|int|string $num2): GMP
```

This function computes the least common multiple (lcm) of num1 and num2.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP object.

### See Also

- gmp_gcd() - Calculate GCD

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-lcm.php
