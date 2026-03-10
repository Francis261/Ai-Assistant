# opcache_get_configuration

Source: https://devdocs.io/php/function.opcache-get-configuration

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL ZendOpcache > 7.0.2)

opcache_get_configuration — Get configuration information about the cache

### Description

```
opcache_get_configuration(): array|false
```

This function returns configuration information about the cache instance

### Parameters

This function has no parameters.

### Return Values

Returns an array of information, including ini, blacklist and version

### Errors/Exceptions

If opcache.restrict_api is in use and the current path is in violation of the rule, an E_WARNING will be raised; no status information will be returned.

### See Also

- opcache_get_status() - Get status information about the cache

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.opcache-get-configuration.php
