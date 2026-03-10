# openssl_digest

Source: https://devdocs.io/php/function.openssl-digest

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

openssl_digest — Computes a digest

### Description

```
openssl_digest(string $data, string $digest_algo, bool $binary = false): string|false
```

Computes a digest hash value for the given data using a given method, and returns a raw or binhex encoded string.

### Parameters

The data.

The digest method to use, e.g. "sha256", see openssl_get_md_methods() for a list of available digest methods.

Setting to true will return as raw output data, otherwise the return value is binhex encoded.

### Return Values

Returns the digested hash value on success or false on failure.

### Errors/Exceptions

Emits an E_WARNING level error if an unknown signature algorithm is passed via the digest_algo parameter.

### See Also

- openssl_get_md_methods() - Gets available digest methods

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-digest.php
