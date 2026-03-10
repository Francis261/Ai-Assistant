# sodium_crypto_auth

Source: https://devdocs.io/php/function.sodium-crypto-auth

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_auth — Compute a tag for the message

### Description

```
sodium_crypto_auth(string $message, #[\SensitiveParameter] string $key): string
```

Symmetric message authentication via sodium_crypto_auth() provides integrity, but not confidentiality.

Unlike with digital signatures (e.g. sodium_crypto_sign_detached()), any party capable of verifying a message is also capable of authenticating their own messages. (Hence, symmetric authentication.)

### Parameters

The message you intend to authenticate

Authentication key

### Return Values

Authentication tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-auth.php
