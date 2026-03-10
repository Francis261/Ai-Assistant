# openssl_private_decrypt

Source: https://devdocs.io/php/function.openssl-private-decrypt

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_private_decrypt — Decrypts data with private key

### Description

```
openssl_private_decrypt(
 string $data,
 #[\SensitiveParameter] string &$decrypted_data,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 int $padding = OPENSSL_PKCS1_PADDING
): bool
```

openssl_private_decrypt() decrypts data that was previously encrypted via openssl_public_encrypt() and stores the result into decrypted_data.

You can use this function e.g. to decrypt data which is supposed to only be available to you.

### Parameters

private_key must be the private key that corresponds to the public key that was used to encrypt the data.

padding can be one of OPENSSL_PKCS1_PADDING, OPENSSL_SSLV23_PADDING, OPENSSL_PKCS1_OAEP_PADDING, OPENSSL_NO_PADDING.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- openssl_public_encrypt() - Encrypts data with public key
- openssl_public_decrypt() - Decrypts data with public key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-private-decrypt.php
