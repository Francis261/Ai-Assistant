# hash_hkdf

Source: https://devdocs.io/php/function.hash-hkdf

(PHP 7 >= 7.1.2, PHP 8)

hash_hkdf — Generate a HKDF key derivation of a supplied key input

### Description

```
hash_hkdf(
 string $algo,
 #[\SensitiveParameter] string $key,
 int $length = 0,
 string $info = "",
 string $salt = ""
): string
```

### Parameters

Name of selected hashing algorithm (e.g. "sha256"). For a list of supported algorithms see hash_hmac_algos().

Note:

Non-cryptographic hash functions are not allowed.

Input keying material (raw binary). Cannot be empty.

Desired output length in bytes. Cannot be greater than 255 times the chosen hash function size.

If length is 0, the output length will default to the chosen hash function size.

Application/context-specific info string.

Salt to use during derivation.

While optional, adding random salt significantly improves the strength of HKDF.

### Return Values

Returns a string containing a raw binary representation of the derived key (also known as output keying material - OKM).

### Errors/Exceptions

Throws a ValueError exception if key is empty, algo is unknown/non-cryptographic, length is less than 0 or too large (greater than 255 times the size of the hash function).

### Changelog

### Examples

The example below produces a pair of separate keys, suitable for creation of an encrypt-then-HMAC construct, using AES-256 and SHA-256 for encryption and authentication respectively.

Example #1 hash_hkdf() example

```
<?php
// Generate a random key, and salt to strengthen it during derivation.
$inputKey = random_bytes(32);
$salt = random_bytes(16);

// Derive a pair of separate keys, using the same input created above.
$encryptionKey = hash_hkdf('sha256', $inputKey, 32, 'aes-256-encryption', $salt);
$authenticationKey = hash_hkdf('sha256', $inputKey, 32, 'sha-256-authentication', $salt);

var_dump($encryptionKey !== $authenticationKey); // bool(true)
?>
```

### See Also

- hash_pbkdf2() - Generate a PBKDF2 key derivation of a supplied password
- » RFC 5869
- » userland implementation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-hkdf.php
