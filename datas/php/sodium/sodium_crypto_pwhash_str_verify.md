# sodium_crypto_pwhash_str_verify

Source: https://devdocs.io/php/function.sodium-crypto-pwhash-str-verify

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_pwhash_str_verify — Verifies that a password matches a hash

### Description

```
sodium_crypto_pwhash_str_verify(string $hash, #[\SensitiveParameter] string $password): bool
```

Checks that a password hash created using sodium_crypto_pwhash_str() matches a given plain-text password. Note that the parameters are in the opposite order to the same parameters in the similar password_verify() function.

### Parameters

A hash created by password_hash().

The user's password.

### Return Values

Returns true if the password and hash match, or false otherwise.

### Notes

Note:

Hashes are calculated using the Argon2ID algorithm, providing resistance to both GPU and side-channel attacks.

### See Also

- sodium_crypto_pwhash_str() - Get an ASCII-encoded hash
- password_hash() - Creates a password hash
- password_verify() - Verifies that a password matches a hash

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-pwhash-str-verify.php
