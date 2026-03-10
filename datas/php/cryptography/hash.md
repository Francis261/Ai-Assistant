# hash

Source: https://devdocs.io/php/function.hash

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash — Generate a hash value (message digest)

### Description

```
hash(
 string $algo,
 string $data,
 bool $binary = false,
 array $options = []
): string
```

### Parameters

Name of selected hashing algorithm (e.g. "sha256"). For a list of supported algorithms see hash_algos().

Message to be hashed.

When set to true, outputs raw binary data. false outputs lowercase hexits.

An array of options for the various hashing algorithms. Currently, only the "seed" parameter is supported by the MurmurHash variants.

### Return Values

Returns a string containing the calculated message digest as lowercase hexits unless binary is set to true in which case the raw binary representation of the message digest is returned.

### Changelog

### Examples

Example #1 A hash() example

```
<?php
echo hash('sha256', 'The quick brown fox jumped over the lazy dog.');
?>
```

The above example will output:

```
68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483
```

### See Also

- hash_init() - Initialize an incremental hashing context
- hash_file() - Generate a hash value using the contents of a given file
- hash_hmac() - Generate a keyed hash value using the HMAC method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash.php
