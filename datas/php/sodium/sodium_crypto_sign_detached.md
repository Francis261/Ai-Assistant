# sodium_crypto_sign_detached

Source: https://devdocs.io/php/function.sodium-crypto-sign-detached

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_sign_detached — Sign the message

### Description

```
sodium_crypto_sign_detached(string $message, #[\SensitiveParameter] string $secret_key): string
```

Sign a message with a secret key, that can be verified by the corresponding public key. This function returns a detached signature.

### Parameters

Message to sign.

Secret key. See sodium_crypto_sign_secretkey()

### Return Values

Cryptographic signature.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-sign-detached.php
