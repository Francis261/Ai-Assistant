# sodium_crypto_sign_ed25519_sk_to_curve25519

Source: https://devdocs.io/php/function.sodium-crypto-sign-ed25519-sk-to-curve25519

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_sign_ed25519_sk_to_curve25519 — Convert an Ed25519 secret key to a Curve25519 secret key

### Description

```
sodium_crypto_sign_ed25519_sk_to_curve25519(#[\SensitiveParameter] string $secret_key): string
```

Given an Ed25519 secret key, calculate the birationally equivalent X25519 secret key.

### Parameters

Secret key suitable for the crypto_sign functions.

### Return Values

Secret key suitable for the crypto_box functions.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-sign-ed25519-sk-to-curve25519.php
