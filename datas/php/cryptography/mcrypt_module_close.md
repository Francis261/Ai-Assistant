# mcrypt_module_close

Source: https://devdocs.io/php/function.mcrypt-module-close

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_module_close — Closes the mcrypt module

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_module_close(resource $td): bool
```

Closes the specified encryption handle.

### Parameters

The encryption descriptor.

### Return Values

Returns true on success or false on failure.

### See Also

- mcrypt_module_open() - Opens the module of the algorithm and the mode to be used

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-module-close.php
