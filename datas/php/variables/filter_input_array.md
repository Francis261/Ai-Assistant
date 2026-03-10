# filter_input_array

Source: https://devdocs.io/php/function.filter-input-array

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

filter_input_array — Gets external variables and optionally filters them

### Description

```
filter_input_array(int $type, array|int $options = FILTER_DEFAULT, bool $add_empty = true): array|false|null
```

This function is useful for retrieving many values without repetitively calling filter_input().

### Parameters

The content of the superglobal that is being filtered is the original "raw" content provided by the SAPI, prior to any user modification to the superglobal. To filter a modified superglobal use filter_var_array() instead.

Add missing keys as null to the return value.

### Return Values

On success, an array containing the values of the requested variables.

On failure, false is returned. Except if the failure is that the input array designated by type is not populated where null is returned if the FILTER_NULL_ON_FAILURE flag is used.

Missing entries from the input array will be populated into the returned array if add_empty is true. In which case, missing entries will be set to null, unless the FILTER_NULL_ON_FAILURE flag is used, in which case it will be false.

An entry of the returned array will be false if the filter fails, unless the FILTER_NULL_ON_FAILURE flag is used, in which case it will be null.

### Notes

Note:

There is no REQUEST_TIME key in INPUT_SERVER array because it is inserted into the $_SERVER later.

### See Also

- filter_input() - Gets a specific external variable by name and optionally filters it
- filter_var() - Filters a variable with a specified filter
- filter_var_array() - Gets multiple variables and optionally filters them
- Validation filters FILTER_VALIDATE_*
- Sanitization filters FILTER_SANITIZE_*

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.filter-input-array.php
