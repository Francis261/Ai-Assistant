# sodium_crypto_scalarmult

Source: https://devdocs.io/php/function.sodium-crypto-scalarmult

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_scalarmult — Compute a shared secret given a user's secret key and another user's public key

### Description

```
sodium_crypto_scalarmult(string $n, string $p): string
```

Elliptic Curve Diffie-Hellman. Calculates scalar n times point p, on an elliptic curve.

### Parameters

scalar, which is typically a secret key

point (x-coordinate), which is typically a public key

### Return Values

A 32-byte random string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-scalarmult.php
