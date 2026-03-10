# mcrypt_module_is_block_algorithm_mode

Source: https://devdocs.io/php/function.mcrypt-module-is-block-algorithm-mode

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_module_is_block_algorithm_mode — Returns if the specified module is a block algorithm or not

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_module_is_block_algorithm_mode(string $mode, string $lib_dir = ?): bool
```

This function returns true if the mode is for use with block algorithms, otherwise it returns false. (e.g. false for stream, and true for cbc, cfb, ofb).

### Parameters

The mode to check.

The optional lib_dir parameter can contain the location where the algorithm module is on the system.

### Return Values

This function returns true if the mode is for use with block algorithms, otherwise it returns false. (e.g. false for stream, and true for cbc, cfb, ofb).

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-module-is-block-algorithm-mode.php
