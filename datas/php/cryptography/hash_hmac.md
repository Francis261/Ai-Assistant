# hash_hmac

Source: https://devdocs.io/php/function.hash-hmac

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_hmac — Generate a keyed hash value using the HMAC method

### Description

```
hash_hmac(
 string $algo,
 string $data,
 #[\SensitiveParameter] string $key,
 bool $binary = false
): string
```

### Parameters

Name of selected hashing algorithm (e.g. "sha256"). For a list of supported algorithms see hash_hmac_algos().

Note:

Non-cryptographic hash functions are not allowed.

Message to be hashed.

Shared secret key used for generating the HMAC variant of the message digest.

When set to true, outputs raw binary data. false outputs lowercase hexits.

### Return Values

Returns a string containing the calculated message digest as lowercase hexits unless binary is set to true in which case the raw binary representation of the message digest is returned.

### Errors/Exceptions

Throws a ValueError exception if algo is unknown or is a non-cryptographic hash function.

### Changelog

### Examples

Example #1 hash_hmac() example

```
<?php
echo hash_hmac('sha256', 'The quick brown fox jumped over the lazy dog.', 'secret');
?>
```

The above example will output:

```
9c5c42422b03f0ee32949920649445e417b2c634050833c5165704b825c2a53b
```

### See Also

- hash_hmac_algos() - Return a list of registered hashing algorithms suitable for hash_hmac
- hash_hmac_file() - Generate a keyed hash value using the HMAC method and the contents of a given file
- hash_equals() - Timing attack safe string comparison

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-hmac.php
