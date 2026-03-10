# sodium_crypto_stream

Source: https://devdocs.io/php/function.sodium-crypto-stream

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_stream — Generate a deterministic sequence of bytes from a seed

### Description

```
sodium_crypto_stream(int $length, string $nonce, #[\SensitiveParameter] string $key): string
```

Generate a deterministic sequence of bytes from a seed, using the XSalsa20 stream cipher.

### Parameters

The number of bytes to return.

A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. random_bytes()).

Encryption key (256-bit).

### Return Values

String of pseudorandom bytes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-stream.php
