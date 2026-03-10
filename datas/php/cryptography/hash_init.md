# hash_init

Source: https://devdocs.io/php/function.hash-init

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_init — Initialize an incremental hashing context

### Description

```
hash_init(
 string $algo,
 int $flags = 0,
 #[\SensitiveParameter] string $key = "",
 array $options = []
): HashContext
```

### Parameters

Name of selected hashing algorithm (e.g. "sha256"). For a list of supported algorithms see hash_algos().

Note:

Non-cryptographic hash functions are not allowed if the HASH_HMAC flag is specified.

Optional settings for hash generation, currently supports only one option: HASH_HMAC. When specified, the key must be specified.

When HASH_HMAC is specified for flags, a shared secret key to be used with the HMAC hashing method must be supplied in this parameter.

An array of options for the various hashing algorithms. Currently, only the "seed" parameter is supported by the MurmurHash variants.

### Return Values

Returns a Hashing Context for use with hash_update(), hash_update_stream(), hash_update_file(), and hash_final().

### Errors/Exceptions

- Throws a ValueError exception if algo is unknown or is a non-cryptographic hash function, or if key is empty.
- Passing configurations options of the wrong type in options will now emit an E_DEPRECATED error because they can be interpreted incorrectly. This will become a ValueError in the future.

### Changelog

### Examples

Example #1 Incremental hashing example

```
<?php
$hash = hash('sha256', 'The quick brown fox jumped over the lazy dog.');

$ctx = hash_init('sha256');
hash_update($ctx, 'The quick brown fox ');
hash_update($ctx, 'jumped over the lazy dog.');
$incremental_hash = hash_final($ctx);

echo $incremental_hash, PHP_EOL;
var_dump($hash === $incremental_hash);
?>
```

The above example will output:

```
68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483
bool(true)
```

### See Also

- hash_algos() - Return a list of registered hashing algorithms
- hash_update() - Pump data into an active hashing context
- hash_update_file() - Pump data into an active hashing context from a file
- hash_update_stream() - Pump data into an active hashing context from an open stream
- hash_final() - Finalize an incremental hash and return resulting digest

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-init.php
