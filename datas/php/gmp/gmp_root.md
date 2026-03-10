# gmp_root

Source: https://devdocs.io/php/function.gmp-root

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

gmp_root — Take the integer part of nth root

### Description

```
gmp_root(GMP|int|string $num, int $nth): GMP
```

Takes the nth root of num and returns the integer component of the result.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

The positive root to take of num.

### Return Values

The integer component of the resultant root, as a GMP number.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-root.php
