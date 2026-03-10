# sodium_crypto_aead_aegis128l_encrypt

Source: https://devdocs.io/php/function.sodium-crypto-aead-aegis128l-encrypt

(PHP 8 >= 8.4.0)

sodium_crypto_aead_aegis128l_encrypt — Encrypt then authenticate a message with AEGIS-128L

### Description

```
sodium_crypto_aead_aegis128l_encrypt(
 #[\SensitiveParameter] string $message,
 string $additional_data,
 string $nonce,
 #[\SensitiveParameter] string $key
): string
```

Encrypt then authenticate a message with AEGIS-128L.

### Parameters

### Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.

### See Also

- sodium_crypto_aead_aegis128l_decrypt() - Verify then decrypt a message with AEGIS-128L
- sodium_crypto_aead_aegis128l_keygen() - Generate a random AEGIS-128L key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-aead-aegis128l-encrypt.php
