# getcwd

Source: https://devdocs.io/php/function.getcwd

(PHP 4, PHP 5, PHP 7, PHP 8)

getcwd — Gets the current working directory

### Description

```
getcwd(): string|false
```

Gets the current working directory.

### Parameters

This function has no parameters.

### Return Values

Returns the current working directory on success, or false on failure.

On some Unix variants, getcwd() will return false if any one of the parent directories does not have the readable or search mode set, even if the current directory does. See chmod() for more information on modes and permissions.

### Examples

Example #1 getcwd() example

```
<?php

// current directory
echo getcwd() . "\n";

chdir('cvs');

// current directory
echo getcwd() . "\n";

?>
```

The above example will output something similar to:

```
/home/didou
/home/didou/cvs
```

### Notes

If the PHP interpreter has been built with ZTS (Zend Thread Safety) enabled, the current working directory returned by getcwd() may be different from that returned by operating system interfaces. External libraries (invoked through FFI) which depend on the current working directory will be affected.

### See Also

- chdir() - Change directory
- chmod() - Changes file mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getcwd.php
