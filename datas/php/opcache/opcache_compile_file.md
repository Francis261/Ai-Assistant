# opcache_compile_file

Source: https://devdocs.io/php/function.opcache-compile-file

(PHP 5 >= 5.5.5, PHP 7, PHP 8, PECL ZendOpcache > 7.0.2)

opcache_compile_file — Compiles and caches a PHP script without executing it

### Description

```
opcache_compile_file(string $filename): bool
```

This function compiles a PHP script and adds it to the opcode cache without executing it. This can be used to prime the cache after a Web server restart by pre-caching files that will be included in later requests.

### Parameters

The path to the PHP script to be compiled.

### Return Values

Returns true if filename was compiled successfully or false on failure.

### Errors/Exceptions

If filename cannot be loaded or compiled, an error of level E_WARNING is generated. You may use @ to suppress this warning.

### See Also

- opcache_invalidate() - Invalidates a cached script

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.opcache-compile-file.php
