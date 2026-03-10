# sodium_crypto_sign_verify_detached

Source: https://devdocs.io/php/function.sodium-crypto-sign-verify-detached

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_sign_verify_detached — Verify signature for the message

### Description

```
sodium_crypto_sign_verify_detached(string $signature, string $message, string $public_key): bool
```

Verify signature for the message

### Parameters

The cryptographic signature obtained from sodium_crypto_sign_detached()

The message being verified

Ed25519 public key

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-sign-verify-detached.php
