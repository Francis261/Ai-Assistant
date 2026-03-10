# chdir

Source: https://devdocs.io/php/function.chdir

(PHP 4, PHP 5, PHP 7, PHP 8)

chdir — Change directory

### Description

```
chdir(string $directory): bool
```

Changes PHP's current directory to directory.

### Parameters

The new current directory

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws an error of level E_WARNING on failure.

### Examples

Example #1 chdir() example

```
<?php

// current directory
echo getcwd() . "\n";

chdir('public_html');

// current directory
echo getcwd() . "\n";

?>
```

The above example will output something similar to:

```
/home/vincent
/home/vincent/public_html
```

### Notes

If the PHP interpreter has been built with ZTS (Zend Thread Safety) enabled, any changes to the current directory made through chdir() will be invisible to the operating system. All built-in PHP functions will still respect the change in current directory; but external library functions called using FFI will not. You can tell whether your copy of PHP was built with ZTS enabled using php -i or the built-in constant PHP_ZTS.

### See Also

- getcwd() - Gets the current working directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.chdir.php
