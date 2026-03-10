# sodium_crypto_aead_chacha20poly1305_encrypt

Source: https://devdocs.io/php/function.sodium-crypto-aead-chacha20poly1305-encrypt

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_aead_chacha20poly1305_encrypt — Encrypt then authenticate with ChaCha20-Poly1305

### Description

```
sodium_crypto_aead_chacha20poly1305_encrypt(
 #[\SensitiveParameter] string $message,
 string $additional_data,
 string $nonce,
 #[\SensitiveParameter] string $key
): string
```

Encrypt then authenticate with ChaCha20-Poly1305.

### Parameters

The plaintext message to encrypt.

Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.

A number that must be only used once, per message. 8 bytes long.

Encryption key (256-bit).

### Return Values

Returns the ciphertext and tag on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-aead-chacha20poly1305-encrypt.php
