# stats_cdf_exponential

Source: https://devdocs.io/php/function.stats-cdf-exponential

(PECL stats >= 1.0.0)

stats_cdf_exponential — Calculates any one parameter of the exponential distribution given values for the others

### Description

```
stats_cdf_exponential(float $par1, float $par2, int $which): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the exponential distribution. The kind of the return value and parameters (par1 and par2) are determined by which.

The following table lists the return value and parameters by which. CDF, x, and lambda denotes cumulative distribution function, the value of the random variable, and the rate parameter of the exponential distribution, respectively.

### Parameters

The first parameter

The second parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, or lambda, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-exponential.php
