# opcache_invalidate

Source: https://devdocs.io/php/function.opcache-invalidate

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL ZendOpcache >= 7.0.0)

opcache_invalidate — Invalidates a cached script

### Description

```
opcache_invalidate(string $filename, bool $force = false): bool
```

This function invalidates a particular script from the opcode cache. If force is unset or false, the script will only be invalidated if the modification time of the script is newer than the cached opcodes. This function only invalidates in-memory cache and not file cache.

### Parameters

The path to the script being invalidated.

If set to true, the script will be invalidated regardless of whether invalidation is necessary.

### Return Values

Returns true if the opcode cache for filename was invalidated or if there was nothing to invalidate, or false if the opcode cache is disabled.

### See Also

- opcache_compile_file() - Compiles and caches a PHP script without executing it
- opcache_reset() - Resets the contents of the opcode cache

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.opcache-invalidate.php
