# sodium_crypto_scalarmult_ristretto255

Source: https://devdocs.io/php/function.sodium-crypto-scalarmult-ristretto255

(PHP 8 >= 8.1.1)

sodium_crypto_scalarmult_ristretto255 — Computes a shared secret

### Description

```
sodium_crypto_scalarmult_ristretto255(string $n, string $p): string
```

Calculates scalar n times point p. Available as of libsodium 1.0.18.

This function is currently not documented; only its argument list is available.

### Parameters

A scalar, which is typically a secret key.

A point (x-coordinate), which is typically a public key.

### Return Values

Returns a 32-byte random string.

### See Also

- sodium_crypto_scalarmult_ristretto255_base() - Calculates the public key from a secret key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-scalarmult-ristretto255.php
