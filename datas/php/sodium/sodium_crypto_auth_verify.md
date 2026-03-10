# sodium_crypto_auth_verify

Source: https://devdocs.io/php/function.sodium-crypto-auth-verify

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_auth_verify — Verifies that the tag is valid for the message

### Description

```
sodium_crypto_auth_verify(string $mac, string $message, #[\SensitiveParameter] string $key): bool
```

Verify the authentication tag is valid for a given message and key.

Unlike with digital signatures (e.g. sodium_crypto_sign_verify_detached()), any party capable of verifying a message is also capable of authenticating their own messages. (Hence, symmetric authentication.)

### Parameters

Authentication tag produced by sodium_crypto_auth()

Message

Authentication key

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-auth-verify.php
