# __autoload

Source: https://devdocs.io/php/function.autoload

(PHP 5, PHP 7)

__autoload — Attempt to load undefined class

This function has been DEPRECATED as of PHP 7.2.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
__autoload(string $class): void
```

You can define this function to enable classes autoloading.

### Parameters

Name of the class to load

### Return Values

No value is returned.

### See Also

- spl_autoload_register() - Register given function as __autoload() implementation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.autoload.php
