# sodium_crypto_generichash

Source: https://devdocs.io/php/function.sodium-crypto-generichash

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_generichash — Get a hash of the message

### Description

```
sodium_crypto_generichash(string $message, #[\SensitiveParameter] string $key = "", int $length = SODIUM_CRYPTO_GENERICHASH_BYTES): string
```

Hash a message with BLAKE2b.

### Parameters

The message being hashed.

(Optional) cryptographic key. This serves the same function as a HMAC key, but it's utilized as a reserved section of the internal BLAKE2 state.

Output size.

### Return Values

The cryptographic hash as raw bytes. If a hex-encoded output is desired, the result can be passed to sodium_bin2hex().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-generichash.php
