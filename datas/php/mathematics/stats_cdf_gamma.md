# stats_cdf_gamma

Source: https://devdocs.io/php/function.stats-cdf-gamma

(PECL stats >= 1.0.0)

stats_cdf_gamma — Calculates any one parameter of the gamma distribution given values for the others

### Description

```
stats_cdf_gamma(
 float $par1,
 float $par2,
 float $par3,
 int $which
): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the gamma distribution. The kind of the return value and parameters (par1, par2, and par3) are determined by which.

The following table lists the return value and parameters by which. CDF, x, k, and theta denotes cumulative distribution function, the value of the random variable, and the shape and the scale parameter of the gamma distribution, respectively.

### Parameters

The first parameter

The second parameter

The third parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, k, or theta, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-gamma.php
