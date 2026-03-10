# stats_cdf_t

Source: https://devdocs.io/php/function.stats-cdf-t

(PECL stats >= 1.0.0)

stats_cdf_t — Calculates any one parameter of the t-distribution given values for the others

### Description

```
stats_cdf_t(float $par1, float $par2, int $which): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the t-distribution. The kind of the return value and parameters (par1 and par2) are determined by which.

The following table lists the return value and parameters by which. CDF, x, and nu denotes cumulative distribution function, the value of the random variable, and the degrees of freedom of the t-distribution, respectively.

### Parameters

The first parameter

The second parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, or nu, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-t.php
