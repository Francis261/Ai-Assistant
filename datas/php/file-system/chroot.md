# chroot

Source: https://devdocs.io/php/function.chroot

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

chroot — Change the root directory

### Description

```
chroot(string $directory): bool
```

Changes the root directory of the current process to directory, and changes the current working directory to "/".

This function is only available to GNU and BSD systems, and only when using the CLI, CGI or Embed SAPI. Also, this function requires root privileges.

Calling this function does not change the values of the __DIR__ and __FILE__ magic constants.

### Parameters

The path to change the root directory to.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 chroot() example

```
<?php
chroot("/path/to/your/chroot/");
echo getcwd();
?>
```

The above example will output:

```
/
```

### Notes

Note: This function is not implemented on Windows platforms.

Note: This function is not available in PHP interpreters built with ZTS (Zend Thread Safety) enabled. To check whether your copy of PHP was built with ZTS enabled, use php -i or test the built-in constant PHP_ZTS.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.chroot.php
