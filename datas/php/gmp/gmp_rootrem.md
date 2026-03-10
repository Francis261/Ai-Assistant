# gmp_rootrem

Source: https://devdocs.io/php/function.gmp-rootrem

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

gmp_rootrem — Take the integer part and remainder of nth root

### Description

```
gmp_rootrem(GMP|int|string $num, int $nth): array
```

Takes the nth root of num and returns the integer component and remainder of the result.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

The positive root to take of num.

### Return Values

A two element array, where the first element is the integer component of the root, and the second element is the remainder, both represented as GMP numbers.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-rootrem.php
