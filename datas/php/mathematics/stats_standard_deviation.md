# stats_standard_deviation

Source: https://devdocs.io/php/function.stats-standard-deviation

(PECL stats >= 1.0.0)

stats_standard_deviation — Returns the standard deviation

### Description

```
stats_standard_deviation(array $a, bool $sample = false): float
```

Returns the standard deviation of the values in a.

### Parameters

The array of data to find the standard deviation for. Note that all values of the array will be cast to float.

Indicates if a represents a sample of the population; defaults to false.

### Return Values

Returns the standard deviation on success; false on failure.

### Errors/Exceptions

Raises an E_WARNING when there are fewer than 2 values in a.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stats-standard-deviation.php
