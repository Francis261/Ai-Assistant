# sodium_crypto_secretbox_open

Source: https://devdocs.io/php/function.sodium-crypto-secretbox-open

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_secretbox_open — Authenticated shared-key decryption

### Description

```
sodium_crypto_secretbox_open(string $ciphertext, string $nonce, #[\SensitiveParameter] string $key): string|false
```

Decrypt an encrypted message with a symmetric (shared) key.

### Parameters

Must be in the format provided by sodium_crypto_secretbox() (ciphertext and tag, concatenated).

A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. random_bytes()).

Encryption key (256-bit).

### Return Values

The decrypted string on success or false on failure.

### Errors/Exceptions

- If nonce has a length of bytes different than SODIUM_CRYPTO_SECRETBOX_NONCEBYTES (24 bytes), a SodiumException will be thrown.
- If key has a length of bytes different than SODIUM_CRYPTO_SECRETBOX_KEYBYTES (32 bytes), a SodiumException will be thrown.

### Examples

Example #1 sodium_crypto_secretbox_open() example

```
<?php
// The $key must be kept confidential
$key = random_bytes(SODIUM_CRYPTO_SECRETBOX_KEYBYTES);
// Do not reuse $nonce with the same key
$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
$ciphertext = sodium_crypto_secretbox('message to be encrypted', $nonce, $key);

// The same nonce and key are required to decrypt the $ciphertext
$plaintext = sodium_crypto_secretbox_open($ciphertext, $nonce, $key);
if ($plaintext !== false) {
    echo $plaintext . PHP_EOL;
}
?>
```

The above example will output:

```
message to be encrypted
```

### See Also

- sodium_crypto_secretbox() - Authenticated shared-key encryption
- sodium_crypto_secretbox_keygen() - Generate random key for sodium_crypto_secretbox
- random_bytes() - Get cryptographically secure random bytes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-secretbox-open.php
