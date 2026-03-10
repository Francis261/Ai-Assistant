# sodium_crypto_stream_xchacha20

Source: https://devdocs.io/php/function.sodium-crypto-stream-xchacha20

(PHP 8 >= 8.1.0)

sodium_crypto_stream_xchacha20 — Expands the key and nonce into a keystream of pseudorandom bytes

### Description

```
sodium_crypto_stream_xchacha20(int $length, string $nonce, #[\SensitiveParameter] string $key): string
```

Expands the key and nonce into a keystream of pseudorandom bytes.

### Parameters

Number of bytes desired.

24-byte nonce.

Key, possibly generated from sodium_crypto_stream_xchacha20_keygen().

### Return Values

Returns a pseudorandom stream that can be used with sodium_crypto_stream_xchacha20_xor().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-stream-xchacha20.php
