# mcrypt_module_get_algo_key_size

Source: https://devdocs.io/php/function.mcrypt-module-get-algo-key-size

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_module_get_algo_key_size — Returns the maximum supported keysize of the opened mode

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_module_get_algo_key_size(string $algorithm, string $lib_dir = ?): int
```

Gets the maximum supported keysize of the opened mode.

### Parameters

The algorithm name.

This optional parameter can contain the location where the mode module is on the system.

### Return Values

This function returns the maximum supported key size of the algorithm specified in bytes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-module-get-algo-key-size.php
