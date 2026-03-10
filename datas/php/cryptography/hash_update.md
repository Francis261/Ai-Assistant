# hash_update

Source: https://devdocs.io/php/function.hash-update

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_update — Pump data into an active hashing context

### Description

```
hash_update(HashContext $context, string $data): true
```

### Parameters

Hashing context returned by hash_init().

Message to be included in the hash digest.

### Return Values

Always returns true.

### Changelog

### See Also

- hash_init() - Initialize an incremental hashing context
- hash_update_file() - Pump data into an active hashing context from a file
- hash_update_stream() - Pump data into an active hashing context from an open stream
- hash_final() - Finalize an incremental hash and return resulting digest

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-update.php
