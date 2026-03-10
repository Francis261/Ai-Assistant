# sodium_crypto_stream_xchacha20_xor

Source: https://devdocs.io/php/function.sodium-crypto-stream-xchacha20-xor

(PHP 8 >= 8.1.0)

sodium_crypto_stream_xchacha20_xor — Encrypts a message using a nonce and a secret key (no authentication)

### Description

```
sodium_crypto_stream_xchacha20_xor(#[\SensitiveParameter] string $message, string $nonce, #[\SensitiveParameter] string $key): string
```

Encrypts a message using a nonce and a secret key (no authentication).

This encryption is unauthenticated, and does not prevent chosen-ciphertext attacks. Make sure to combine the ciphertext with a Message Authentication Code, for example with sodium_crypto_aead_xchacha20poly1305_ietf_encrypt() function, or sodium_crypto_auth().

### Parameters

The message to encrypt.

24-byte nonce.

Key, possibly generated from sodium_crypto_stream_xchacha20_keygen().

### Return Values

Encrypted message.

### See Also

- sodium_crypto_stream_xchacha20_xor_ic() - Encrypts a message using a nonce and a secret key (no authentication)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-stream-xchacha20-xor.php
