# sodium_crypto_aead_aes256gcm_decrypt

Source: https://devdocs.io/php/function.sodium-crypto-aead-aes256gcm-decrypt

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_aead_aes256gcm_decrypt — Verify then decrypt a message with AES-256-GCM

### Description

```
sodium_crypto_aead_aes256gcm_decrypt(
 string $ciphertext,
 string $additional_data,
 string $nonce,
 #[\SensitiveParameter] string $key
): string|false
```

Verify then decrypt with AES-256-GCM. Only available if sodium_crypto_aead_aes256gcm_is_available() returns true.

### Parameters

Must be in the format provided by sodium_crypto_aead_aes256gcm_encrypt() (ciphertext and tag, concatenated).

Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.

A number that must be only used once, per message. 12 bytes long.

Encryption key (256-bit).

### Return Values

Returns the plaintext on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-aead-aes256gcm-decrypt.php
