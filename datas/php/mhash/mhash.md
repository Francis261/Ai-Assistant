# mhash

Source: https://devdocs.io/php/function.mhash

(PHP 4, PHP 5, PHP 7, PHP 8)

mhash — Computes hash

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 mhash(int $algo, string $data, ?string $key = null): string|false
```

mhash() applies a hash function specified by algo to the data.

### Parameters

The hash ID. One of the MHASH_hashname constants.

The user input, as a string.

If specified, the function will return the resulting HMAC instead. HMAC is keyed hashing for message authentication, or simply a message digest that depends on the specified key. Not all algorithms supported in mhash can be used in HMAC mode.

### Return Values

Returns the resulting hash (also called digest) or HMAC as a string, or false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mhash.php
