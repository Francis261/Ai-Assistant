# mcrypt_module_is_block_algorithm

Source: https://devdocs.io/php/function.mcrypt-module-is-block-algorithm

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_module_is_block_algorithm — This function checks whether the specified algorithm is a block algorithm

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_module_is_block_algorithm(string $algorithm, string $lib_dir = ?): bool
```

This function returns true if the specified algorithm is a block algorithm, or false if it is a stream one.

### Parameters

The algorithm to check.

The optional lib_dir parameter can contain the location where the algorithm module is on the system.

### Return Values

This function returns true if the specified algorithm is a block algorithm, or false if it is a stream one.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-module-is-block-algorithm.php
