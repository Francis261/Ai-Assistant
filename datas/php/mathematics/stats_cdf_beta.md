# stats_cdf_beta

Source: https://devdocs.io/php/function.stats-cdf-beta

(PECL stats >= 1.0.0)

stats_cdf_beta — Calculates any one parameter of the beta distribution given values for the others

### Description

```
stats_cdf_beta(
 float $par1,
 float $par2,
 float $par3,
 int $which
): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the beta distribution. The kind of the return value and parameters (par1, par2, and par3) are determined by which.

The following table lists the return value and parameters by which. CDF, x, alpha, and beta denotes cumulative distribution function, the value of the random variable, and shape parameters of the beta distribution, respectively.

### Parameters

The first parameter

The second parameter

The third parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, alpha, or beta, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-beta.php
