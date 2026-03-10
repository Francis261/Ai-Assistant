# hash_update_file

Source: https://devdocs.io/php/function.hash-update-file

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_update_file — Pump data into an active hashing context from a file

### Description

```
hash_update_file(HashContext $context, string $filename, ?resource $stream_context = null): bool
```

### Parameters

Hashing context returned by hash_init().

URL describing location of file to be hashed; Supports fopen() wrappers.

Stream context as returned by stream_context_create().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- hash_init() - Initialize an incremental hashing context
- hash_update() - Pump data into an active hashing context
- hash_update_stream() - Pump data into an active hashing context from an open stream
- hash_final() - Finalize an incremental hash and return resulting digest
- hash_file() - Generate a hash value using the contents of a given file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-update-file.php
