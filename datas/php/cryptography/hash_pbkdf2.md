# hash_pbkdf2

Source: https://devdocs.io/php/function.hash-pbkdf2

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

hash_pbkdf2 — Generate a PBKDF2 key derivation of a supplied password

### Description

```
hash_pbkdf2(
 string $algo,
 #[\SensitiveParameter] string $password,
 string $salt,
 int $iterations,
 int $length = 0,
 bool $binary = false,
 array $options = []
): string
```

### Parameters

Name of selected hashing algorithm (e.g. "sha256"). For a list of supported algorithms see hash_hmac_algos().

Note:

Non-cryptographic hash functions are not allowed.

The password to use for the derivation.

The salt to use for the derivation. This value should be generated randomly.

The number of internal iterations to perform for the derivation.

The length of the output string. If binary is true this corresponds to the byte-length of the derived key, if binary is false this corresponds to twice the byte-length of the derived key (as every byte of the key is returned as two hexits).

If 0 is passed, the entire output of the supplied algorithm is used.

When set to true, outputs raw binary data. false outputs lowercase hexits.

An array of options for the various hashing algorithms. Currently, only the "seed" key is supported by the MurmurHash variants.

### Return Values

Returns a string containing the derived key as lowercase hexits unless binary is set to true in which case the raw binary representation of the derived key is returned.

### Errors/Exceptions

Throws a ValueError exception if the algorithm is unknown, the iterations parameter is less than or equal to 0, the length is less than 0 or the salt is too long (greater than INT_MAX - 4).

### Changelog

### Examples

Example #1 hash_pbkdf2() example, basic usage

```
<?php
$password = "password";
$iterations = 600000;

// Generate a cryptographically secure random salt using random_bytes()
$salt = random_bytes(16);

$hash = hash_pbkdf2("sha256", $password, $salt, $iterations, 20);
var_dump($hash);

// for raw binary, the $length needs to be halved for equivalent results
$hash = hash_pbkdf2("sha256", $password, $salt, $iterations, 10, true);
var_dump(bin2hex($hash));?>
```

The above example will output something similar to:

```
string(20) "120fb6cffcf8b32c43e7"
string(20) "120fb6cffcf8b32c43e7"
```

### Notes

The PBKDF2 method can be used for hashing passwords for storage. However, it should be noted that password_hash() or crypt() with CRYPT_BLOWFISH are better suited for password storage.

### See Also

- password_hash() - Creates a password hash
- hash_hkdf() - Generate a HKDF key derivation of a supplied key input
- sodium_crypto_pwhash() - Derive a key from a password, using Argon2

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-pbkdf2.php
