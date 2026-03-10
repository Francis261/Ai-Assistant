# openssl_x509_check_private_key

Source: https://devdocs.io/php/function.openssl-x509-check-private-key

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_x509_check_private_key — Checks if a private key corresponds to a certificate

### Description

```
openssl_x509_check_private_key(OpenSSLCertificate|string $certificate, #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key): bool
```

Checks whether the given private_key is the private key that corresponds to certificate.

The function does not check if private_key is indeed a private key or not. It merely compares the public materials (e.g. exponent and modulus of an RSA key) and/or key parameters (e.g. EC params of an EC key) of a key pair.

This means, for example, that a public key could be given for private_key and the function may return true.

### Parameters

The certificate.

The private key.

### Return Values

Returns true if private_key is the private key that corresponds to certificate, or false otherwise.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-check-private-key.php
