# sodium_crypto_kdf_derive_from_key

Source: https://devdocs.io/php/function.sodium-crypto-kdf-derive-from-key

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_kdf_derive_from_key — Derive a subkey

### Description

```
sodium_crypto_kdf_derive_from_key(
 int $subkey_length,
 int $subkey_id,
 string $context,
 #[\SensitiveParameter] string $key
): string
```

Derive a subkey from a root key and additional context.

Similar to hash_hkdf().

### Parameters

Length of the key to return (in bytes)

Return the Nth subkey from a given root key. Useful for seeking.

Application-specific context.

The root key from which the subkey is derived.

### Return Values

A string of pseudorandom (raw binary) bytes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-kdf-derive-from-key.php
