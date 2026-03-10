# sodium_crypto_box_open

Source: https://devdocs.io/php/function.sodium-crypto-box-open

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box_open — Authenticated public-key decryption

### Description

```
sodium_crypto_box_open(string $ciphertext, string $nonce, #[\SensitiveParameter] string $key_pair): string|false
```

Decrypt a message using asymmetric (public key) cryptography.

### Parameters

The encrypted message to attempt to decrypt.

A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. random_bytes()).

See sodium_crypto_box_keypair_from_secretkey_and_publickey(). This should include the sender's public key and the recipient's secret key.

### Return Values

Returns the plaintext message on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box-open.php
