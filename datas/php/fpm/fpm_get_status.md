# fpm_get_status

Source: https://devdocs.io/php/function.fpm-get-status

(PHP 7 >= 7.3, PHP 8)

fpm_get_status — Returns the current FPM pool status

### Description

```
fpm_get_status(): array|false
```

This function returns the full current FPM pool status as an associative array. It always returns the full status, including per-process status information. See the FPM status page guide for further details.

Note that this function will only be defined if FPM is being used to serve the script.

### Parameters

This function has no parameters.

### Return Values

Associative array containing the full FPM pool status, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fpm-get-status.php
