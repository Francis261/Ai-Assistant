# sodium_crypto_box_seed_keypair

Source: https://devdocs.io/php/function.sodium-crypto-box-seed-keypair

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box_seed_keypair — Deterministically derive the key pair from a single key

### Description

```
sodium_crypto_box_seed_keypair(#[\SensitiveParameter] string $seed): string
```

Clamps the seed to form a secret key, derives the public key, and returns the two as a keypair.

The *_seed_keypair functions are ideal for generating a keypair from a password and salt. Use the result as a seed to generate the desired keys.

### Parameters

Some cryptographic input. Must be 32 bytes.

### Return Values

X25519 Keypair (secret key and public key).

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box-seed-keypair.php
