# sodium_crypto_stream_xor

Source: https://devdocs.io/php/function.sodium-crypto-stream-xor

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_stream_xor — Encrypt a message without authentication

### Description

```
sodium_crypto_stream_xor(#[\SensitiveParameter] string $message, string $nonce, #[\SensitiveParameter] string $key): string
```

This function encrypts a message with XSalsa20, but does not provide any ciphertext guarantees about the plaintext.

### Parameters

The message to encrypt

A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. random_bytes()).

Encryption key (256-bit).

### Return Values

Encrypted message.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-stream-xor.php
