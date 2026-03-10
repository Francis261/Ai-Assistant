# openssl_pkey_free

Source: https://devdocs.io/php/function.openssl-pkey-free

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_free — Frees a private key

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 openssl_pkey_free(OpenSSLAsymmetricKey $key): void
```

Note:

This function has no effect. Prior to PHP 8.0.0, this function was used to close the resource.

This function frees a private key created by openssl_pkey_new().

### Parameters

Resource holding the key.

### Return Values

No value is returned.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkey-free.php
