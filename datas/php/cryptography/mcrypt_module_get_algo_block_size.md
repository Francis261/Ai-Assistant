# mcrypt_module_get_algo_block_size

Source: https://devdocs.io/php/function.mcrypt-module-get-algo-block-size

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_module_get_algo_block_size — Returns the blocksize of the specified algorithm

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_module_get_algo_block_size(string $algorithm, string $lib_dir = ?): int
```

Gets the blocksize of the specified algorithm.

### Parameters

The algorithm name.

This optional parameter can contain the location where the mode module is on the system.

### Return Values

Returns the block size of the algorithm specified in bytes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-module-get-algo-block-size.php
