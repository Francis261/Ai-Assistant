# spl_autoload

Source: https://devdocs.io/php/function.spl-autoload

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

spl_autoload — Default implementation for __autoload()

### Description

```
spl_autoload(string $class, ?string $file_extensions = null): void
```

This function is intended to be used as a default implementation for __autoload(). If nothing else is specified and spl_autoload_register() is called without any parameters then spl_autoload() will be used for any later call to __autoload().

### Parameters

The name of the class being instantiated. When calling the function, the name of the class with the namespace is passed to the parameter. The class will not contain the leading backslash of a fully-qualified identifier.

By default it checks all include_paths to contain filenames built up by the lowercase class name appended by the filename extensions .inc and .php.

### Return Values

No value is returned.

### Errors/Exceptions

Throws LogicException when the class is not found and there are no other autoloaders registered.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.spl-autoload.php
