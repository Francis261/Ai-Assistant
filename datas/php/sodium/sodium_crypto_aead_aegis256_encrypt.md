# sodium_crypto_aead_aegis256_encrypt

Source: https://devdocs.io/php/function.sodium-crypto-aead-aegis256-encrypt

(PHP 8 >= 8.4.0)

sodium_crypto_aead_aegis256_encrypt — Encrypt then authenticate a message with AEGIS-256

### Description

```
sodium_crypto_aead_aegis256_encrypt(
 #[\SensitiveParameter] string $message,
 string $additional_data,
 string $nonce,
 #[\SensitiveParameter] string $key
): string
```

Encrypt then authenticate a message with AEGIS-256.

### Parameters

### Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.

### See Also

- sodium_crypto_aead_aegis256_decrypt() - Verify then decrypt a message with AEGIS-256
- sodium_crypto_aead_aegis256_keygen() - Generate a random AEGIS-256 key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-aead-aegis256-encrypt.php
