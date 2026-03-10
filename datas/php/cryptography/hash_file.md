# hash_file

Source: https://devdocs.io/php/function.hash-file

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_file — Generate a hash value using the contents of a given file

### Description

```
hash_file(
 string $algo,
 string $filename,
 bool $binary = false,
 array $options = []
): string|false
```

### Parameters

Name of selected hashing algorithm (e.g. "sha256"). For a list of supported algorithms see hash_algos().

URL describing location of file to be hashed; Supports fopen() wrappers.

When set to true, outputs raw binary data. false outputs lowercase hexits.

An array of options for the various hashing algorithms. Currently, only the "seed" parameter is supported by the MurmurHash variants.

### Return Values

Returns a string containing the calculated message digest as lowercase hexits unless binary is set to true in which case the raw binary representation of the message digest is returned, or false on failure.

### Changelog

### Examples

Example #1 Using hash_file()

```
<?php
/* Create a file to calculate hash of */
file_put_contents('example.txt', 'The quick brown fox jumped over the lazy dog.');

echo hash_file('sha256', 'example.txt');
?>
```

The above example will output:

```
68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483
```

### See Also

- hash_init() - Initialize an incremental hashing context
- hash_hmac_file() - Generate a keyed hash value using the HMAC method and the contents of a given file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-file.php
