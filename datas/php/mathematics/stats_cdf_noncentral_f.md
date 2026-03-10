# stats_cdf_noncentral_f

Source: https://devdocs.io/php/function.stats-cdf-noncentral-f

(PECL stats >= 1.0.0)

stats_cdf_noncentral_f — Calculates any one parameter of the non-central F distribution given values for the others

### Description

```
stats_cdf_noncentral_f(
 float $par1,
 float $par2,
 float $par3,
 float $par4,
 int $which
): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the non-central F distribution. The kind of the return value and parameters (par1, par2, par3, and par4) are determined by which.

The following table lists the return value and parameters by which. CDF, x, nu1, nu2, and lambda denotes cumulative distribution function, the value of the random variable, the degree of freedoms and the non-centrality parameter of the distribution, respectively.

### Parameters

The first parameter

The second parameter

The third parameter

The fourth parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, nu1, nu2, or lambda, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-noncentral-f.php
