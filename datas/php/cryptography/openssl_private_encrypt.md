# openssl_private_encrypt

Source: https://devdocs.io/php/function.openssl-private-encrypt

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_private_encrypt — Encrypts data with private key

### Description

```
openssl_private_encrypt(
 #[\SensitiveParameter] string $data,
 string &$encrypted_data,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 int $padding = OPENSSL_PKCS1_PADDING
): bool
```

openssl_private_encrypt() encrypts data with private private_key and stores the result into encrypted_data. Encrypted data can be decrypted via openssl_public_decrypt().

This function can be used e.g. to sign data (or its hash) to prove that it is not written by someone else.

### Parameters

private_key must be the private key that corresponds to the public key that will be used to decrypt the data.

padding can be one of OPENSSL_PKCS1_PADDING, OPENSSL_NO_PADDING.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- openssl_public_encrypt() - Encrypts data with public key
- openssl_public_decrypt() - Decrypts data with public key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-private-encrypt.php
