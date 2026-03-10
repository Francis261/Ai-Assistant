# stats_cdf_binomial

Source: https://devdocs.io/php/function.stats-cdf-binomial

(PECL stats >= 1.0.0)

stats_cdf_binomial — Calculates any one parameter of the binomial distribution given values for the others

### Description

```
stats_cdf_binomial(
 float $par1,
 float $par2,
 float $par3,
 int $which
): float
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the binomial distribution. The kind of the return value and parameters (par1, par2, and par3) are determined by which.

The following table lists the return value and parameters by which. CDF, x, n, and p denotes cumulative distribution function, the number of successes, the number of trials, and the success rate for each trial, respectively.

### Parameters

The first parameter

The second parameter

The third parameter

The flag to determine what to be calculated

### Return Values

Returns CDF, x, n, or p, determined by which.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-cdf-binomial.php
