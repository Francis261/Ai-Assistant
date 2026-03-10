# sodium_crypto_sign_open

Source: https://devdocs.io/php/function.sodium-crypto-sign-open

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_sign_open — Check that the signed message has a valid signature

### Description

```
sodium_crypto_sign_open(string $signed_message, string $public_key): string|false
```

Verify the signature attached to a message and return the message

### Parameters

A message signed with sodium_crypto_sign()

An Ed25519 public key

### Return Values

Returns the original signed message on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-sign-open.php
