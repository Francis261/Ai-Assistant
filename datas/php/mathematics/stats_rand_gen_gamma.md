# stats_rand_gen_gamma

Source: https://devdocs.io/php/function.stats-rand-gen-gamma

(PECL stats >= 1.0.0)

stats_rand_gen_gamma — Generates a random deviate from the gamma distribution

### Description

```
stats_rand_gen_gamma(float $a, float $r): float
```

Generates a random deviate from the gamma distribution whose density is (A**R)/Gamma(R) * X**(R-1) * Exp(-A*X).

### Parameters

location parameter of Gamma distribution (a > 0).

shape parameter of Gamma distribution (r > 0).

### Return Values

A random deviate

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-rand-gen-gamma.php
