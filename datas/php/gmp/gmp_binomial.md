# gmp_binomial

Source: https://devdocs.io/php/function.gmp-binomial

(PHP 7 >= 7.3.0, PHP 8)

gmp_binomial — Calculates binomial coefficient

### Description

```
gmp_binomial(GMP|int|string $n, int $k): GMP
```

Calculates the binomial coefficient C(n, k).

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns the binomial coefficient C(n, k).

### Errors/Exceptions

Throws ValueError if k is negative. Prior to PHP 8.0.0, E_WARNING was issued instead.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-binomial.php
