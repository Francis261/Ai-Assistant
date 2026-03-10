# sodium_crypto_aead_aegis128l_decrypt

Source: https://devdocs.io/php/function.sodium-crypto-aead-aegis128l-decrypt

(PHP 8 >= 8.4.0)

sodium_crypto_aead_aegis128l_decrypt — Verify then decrypt a message with AEGIS-128L

### Description

```
sodium_crypto_aead_aegis128l_decrypt(
 string $ciphertext,
 string $additional_data,
 string $nonce,
 #[\SensitiveParameter] string $key
): string|false
```

Verify then decrypt a message with AEGIS-128L.

### Parameters

### Return Values

Returns the plaintext on success, or false on failure.

### See Also

- sodium_crypto_aead_aegis128l_encrypt() - Encrypt then authenticate a message with AEGIS-128L
- sodium_crypto_aead_aegis128l_keygen() - Generate a random AEGIS-128L key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-aead-aegis128l-decrypt.php
