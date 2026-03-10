# openssl_pkey_get_private

Source: https://devdocs.io/php/function.openssl-pkey-get-private

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_get_private — Get a private key

### Description

```
openssl_pkey_get_private(#[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, #[\SensitiveParameter] ?string $passphrase = null): OpenSSLAsymmetricKey|false
```

openssl_pkey_get_private() parses private_key and prepares it for use by other functions.

### Parameters

private_key can be one of the following:

1. a string having the format file://path/to/file.pem. The named file must contain a PEM encoded certificate/private key (it may contain both).
2. A PEM formatted private key.

The optional parameter passphrase must be used if the specified key is encrypted (protected by a passphrase).

### Return Values

Returns an OpenSSLAsymmetricKey instance on success, or false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkey-get-private.php
