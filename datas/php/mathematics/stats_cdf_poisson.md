# stats_cdf_poisson

Source: https://devdocs.io/php/function.stats-cdf-poisson

(PECL stats >= 1.0.0)

stats_cdf_poisson — Calculates any one parameter of the Poisson distribution given values for the others

### Description

```
stats_cdf_poisson(float $par1, float $par2, int $which): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the Poisson distribution. The kind of the return value and parameters (par1 and par2) are determined by which.

The following table lists the return value and parameters by which. CDF, x, and lambda denotes cumulative distribution function, the value of the random variable, and the parameter of the Poisson distribution, respectively.

### Parameters

The first parameter

The second parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, or lambda, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-poisson.php
