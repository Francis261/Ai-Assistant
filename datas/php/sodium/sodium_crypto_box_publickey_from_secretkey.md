# sodium_crypto_box_publickey_from_secretkey

Source: https://devdocs.io/php/function.sodium-crypto-box-publickey-from-secretkey

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box_publickey_from_secretkey — Calculate the public key from a secret key

### Description

```
sodium_crypto_box_publickey_from_secretkey(#[\SensitiveParameter] string $secret_key): string
```

Given a secret key, calculate the corresponding public key.

This only works with the type of keys intended for use with crypto_box() (which uses Elliptic Curve Diffie-Hellman over the Montgomery curve, Curve25519; abbreviated as X25519), not crypto_sign() (which uses Edwards Digital Signature Algorithm over the Edwards Curve with the corresponding paramaters; abbreviated Ed25519).

### Parameters

X25519 secret key

### Return Values

X25519 public key.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box-publickey-from-secretkey.php
