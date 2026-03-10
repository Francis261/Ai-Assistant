# openssl_pkey_get_public

Source: https://devdocs.io/php/function.openssl-pkey-get-public

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_get_public — Extract public key from certificate and prepare it for use

### Description

```
openssl_pkey_get_public(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key): OpenSSLAsymmetricKey|false
```

openssl_pkey_get_public() extracts the public key from public_key and prepares it for use by other functions.

### Parameters

public_key can be one of the following:

1. an OpenSSLAsymmetricKey instance
2. a string having the format file://path/to/file.pem. The named file must contain a PEM encoded certificate/public key (it may contain both).
3. A PEM formatted public key.

### Return Values

Returns an OpenSSLAsymmetricKey instance on success, or false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkey-get-public.php
