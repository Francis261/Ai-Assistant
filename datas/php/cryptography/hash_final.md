# hash_final

Source: https://devdocs.io/php/function.hash-final

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_final — Finalize an incremental hash and return resulting digest

### Description

```
hash_final(HashContext $context, bool $binary = false): string
```

### Parameters

Hashing context returned by hash_init().

When set to true, outputs raw binary data. false outputs lowercase hexits.

### Return Values

Returns a string containing the calculated message digest as lowercase hexits unless binary is set to true in which case the raw binary representation of the message digest is returned.

### Changelog

### See Also

- hash_init() - Initialize an incremental hashing context
- hash_update() - Pump data into an active hashing context
- hash_update_stream() - Pump data into an active hashing context from an open stream
- hash_update_file() - Pump data into an active hashing context from a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-final.php
