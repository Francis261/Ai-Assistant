# sodium_crypto_box

Source: https://devdocs.io/php/function.sodium-crypto-box

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box — Authenticated public-key encryption

### Description

```
sodium_crypto_box(#[\SensitiveParameter] string $message, string $nonce, #[\SensitiveParameter] string $key_pair): string
```

Encrypt a message using asymmetric (public key) cryptography.

The algorithm used by functions prefixed with sodium_crypto_box() are Elliptic Curve Diffie-Hellman over the Montgomery curve, Curve25519; usually abbreviated as X25519.

### Parameters

The message to be encrypted.

A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. random_bytes()).

See sodium_crypto_box_keypair_from_secretkey_and_publickey(). This should include the sender's X25519 secret key and the recipient's X25519 public key.

### Return Values

Returns the encrypted message (ciphertext plus authentication tag). The ciphertext will be 16 bytes longer than the plaintext, and a raw binary string. See sodium_bin2base64() for safe encoding for storage.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box.php
