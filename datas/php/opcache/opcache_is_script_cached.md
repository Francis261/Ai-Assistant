# opcache_is_script_cached

Source: https://devdocs.io/php/function.opcache-is-script-cached

(PHP 5 >= 5.5.11, PHP 7, PHP 8, PECL ZendOpcache >= 7.0.4)

opcache_is_script_cached — Tells whether a script is cached in OPCache

### Description

```
opcache_is_script_cached(string $filename): bool
```

This function checks if a PHP script has been cached in OPCache. This can be used to more easily detect the "warming" of the cache for a particular script. This function only checks in-memory cache, not file cache.

### Parameters

The path to the PHP script to be checked.

### Return Values

Returns true if filename is cached in OPCache, false otherwise.

### See Also

- opcache_compile_file() - Compiles and caches a PHP script without executing it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.opcache-is-script-cached.php
