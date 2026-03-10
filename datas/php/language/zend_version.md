# zend_version

Source: https://devdocs.io/php/function.zend-version

(PHP 4, PHP 5, PHP 7, PHP 8)

zend_version — Gets the version of the current Zend engine

### Description

```
zend_version(): string
```

Returns a string containing the version of the currently running Zend Engine.

### Parameters

This function has no parameters.

### Return Values

Returns the Zend Engine version number, as a string.

### Examples

Example #1 zend_version() example

```
<?php
echo "Zend engine version: " . zend_version();
?>
```

The above example will output something similar to:

```
Zend engine version: 2.2.0
```

### See Also

- phpinfo() - Outputs information about PHP's configuration
- phpcredits() - Prints out the credits for PHP
- phpversion() - Gets the current PHP version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zend-version.php
