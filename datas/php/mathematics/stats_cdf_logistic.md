# stats_cdf_logistic

Source: https://devdocs.io/php/function.stats-cdf-logistic

(PECL stats >= 1.0.0)

stats_cdf_logistic — Calculates any one parameter of the logistic distribution given values for the others

### Description

```
stats_cdf_logistic(
 float $par1,
 float $par2,
 float $par3,
 int $which
): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the logistic distribution. The kind of the return value and parameters (par1, par2, and par3) are determined by which.

The following table lists the return value and parameters by which. CDF, x, mu, and s denotes cumulative distribution function, the value of the random variable, and the location and the scale parameter of the logistic distribution, respectively.

### Parameters

The first parameter

The second parameter

The third parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, mu, or s, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-logistic.php
