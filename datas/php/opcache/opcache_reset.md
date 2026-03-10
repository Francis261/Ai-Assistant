# opcache_reset

Source: https://devdocs.io/php/function.opcache-reset

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL ZendOpcache >= 7.0.0)

opcache_reset — Resets the contents of the opcode cache

### Description

```
opcache_reset(): bool
```

This function resets the entire opcode cache. After calling opcache_reset(), all scripts will be reloaded and reparsed the next time they are hit. This function only resets in-memory cache, not the file cache.

### Parameters

This function has no parameters.

### Return Values

Returns true if the opcode cache was reset, or false if the opcode cache is disabled or the restart is pending or in progress (see opcache_get_status()).

### See Also

- opcache_invalidate() - Invalidates a cached script
- opcache_get_status() - Get status information about the cache

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.opcache-reset.php
