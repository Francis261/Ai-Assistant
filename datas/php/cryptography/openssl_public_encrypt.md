# openssl_public_encrypt

Source: https://devdocs.io/php/function.openssl-public-encrypt

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_public_encrypt — Encrypts data with public key

### Description

```
openssl_public_encrypt(
 #[\SensitiveParameter] string $data,
 string &$encrypted_data,
 OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key,
 int $padding = OPENSSL_PKCS1_PADDING
): bool
```

openssl_public_encrypt() encrypts data with public public_key and stores the result into encrypted_data. Encrypted data can be decrypted via openssl_private_decrypt().

This function can be used e.g. to encrypt message which can be then read only by owner of the private key. It can be also used to store secure data in database.

### Parameters

This will hold the result of the encryption.

public_key must be the public key that corresponds to the private key that will be used to decrypt the data.

padding can be one of OPENSSL_PKCS1_PADDING, OPENSSL_SSLV23_PADDING, OPENSSL_PKCS1_OAEP_PADDING, OPENSSL_NO_PADDING.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- openssl_private_encrypt() - Encrypts data with private key
- openssl_private_decrypt() - Decrypts data with private key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-public-encrypt.php
