# sodium_crypto_box_keypair_from_secretkey_and_publickey

Source: https://devdocs.io/php/function.sodium-crypto-box-keypair-from-secretkey-and-publickey

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box_keypair_from_secretkey_and_publickey — Create a unified keypair string from a secret key and public key

### Description

```
sodium_crypto_box_keypair_from_secretkey_and_publickey(#[\SensitiveParameter] string $secret_key, string $public_key): string
```

This function exists to satisfy the API requirements of e.g. crypto_box(). Pass in one party's secret key and the other's public key, and you will obtain a "keypair" for your conversation.

### Parameters

Secret key.

Public key.

### Return Values

X25519 Keypair.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box-keypair-from-secretkey-and-publickey.php
