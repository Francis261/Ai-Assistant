# sodium_crypto_box_keypair

Source: https://devdocs.io/php/function.sodium-crypto-box-keypair

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box_keypair — Randomly generate a secret key and a corresponding public key

### Description

```
sodium_crypto_box_keypair(): string
```

Generates a secret key and a public key as one string.

To get the secret key out of this unified keypair string, see sodium_crypto_box_secretkey(). To get the public key out of this unified keypair string, see sodium_crypto_box_publickey().

### Parameters

This function has no parameters.

### Return Values

One string containing both the X25519 secret key and corresponding X25519 public key.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box-keypair.php
