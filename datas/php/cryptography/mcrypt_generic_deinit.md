# mcrypt_generic_deinit

Source: https://devdocs.io/php/function.mcrypt-generic-deinit

(PHP 4 >= 4.0.7, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_generic_deinit — This function deinitializes an encryption module

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_generic_deinit(resource $td): bool
```

This function terminates encryption specified by the encryption descriptor (td). It clears all buffers, but does not close the module. You need to call mcrypt_module_close() yourself. (But PHP does this for you at the end of the script.)

### Parameters

The encryption descriptor.

### Return Values

Returns true on success or false on failure.

### See Also

- mcrypt_module_open() - Opens the module of the algorithm and the mode to be used
- mcrypt_generic_init() - This function initializes all buffers needed for encryption

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-generic-deinit.php
