# deflate_add

Source: https://devdocs.io/php/function.deflate-add

(PHP 7, PHP 8)

deflate_add — Incrementally deflate data

### Description

```
deflate_add(DeflateContext $context, string $data, int $flush_mode = ZLIB_SYNC_FLUSH): string|false
```

Incrementally deflates data in the specified context.

### Parameters

A context created with deflate_init().

A chunk of data to compress.

One of ZLIB_BLOCK, ZLIB_NO_FLUSH, ZLIB_PARTIAL_FLUSH, ZLIB_SYNC_FLUSH (default), ZLIB_FULL_FLUSH, ZLIB_FINISH. Normally you will want to set ZLIB_NO_FLUSH to maximize compression, and ZLIB_FINISH to terminate with the last chunk of data. See the » zlib manual for a detailed description of these constants.

### Return Values

Returns a chunk of compressed data, or false on failure.

### Errors/Exceptions

If invalid arguments are given, an error of level E_WARNING is generated.

### Changelog

### See Also

- deflate_init() - Initialize an incremental deflate context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.deflate-add.php
