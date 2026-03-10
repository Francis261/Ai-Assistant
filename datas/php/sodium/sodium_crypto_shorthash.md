# sodium_crypto_shorthash

Source: https://devdocs.io/php/function.sodium-crypto-shorthash

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_shorthash — Compute a short hash of a message and key

### Description

```
sodium_crypto_shorthash(string $message, #[\SensitiveParameter] string $key): string
```

sodium_crypto_shorthash() wraps a hash function called SipHash-2-4, which is ideal for implementing hash tables that are not susceptible to hash collision denial of service attacks (Hash-DoS).

SipHash-2-4 isn't a general purpose cryptographic hash function.

### Parameters

The message to hash.

The hash key.

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-shorthash.php
