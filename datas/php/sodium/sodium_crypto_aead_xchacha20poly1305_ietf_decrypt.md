# sodium_crypto_aead_xchacha20poly1305_ietf_decrypt

Source: https://devdocs.io/php/function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_aead_xchacha20poly1305_ietf_decrypt — (Preferred) Verify then decrypt with XChaCha20-Poly1305

### Description

```
sodium_crypto_aead_xchacha20poly1305_ietf_decrypt(
 string $ciphertext,
 string $additional_data,
 string $nonce,
 #[\SensitiveParameter] string $key
): string|false
```

Verify then decrypt with ChaCha20-Poly1305 (eXtended-nonce variant).

Generally, XChaCha20-Poly1305 is the best of the provided AEAD modes to use.

### Parameters

Must be in the format provided by sodium_crypto_aead_xchacha20poly1305_ietf_encrypt() (ciphertext and tag, concatenated).

Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.

A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. random_bytes()).

Encryption key (256-bit).

### Return Values

Returns the plaintext on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt.php
