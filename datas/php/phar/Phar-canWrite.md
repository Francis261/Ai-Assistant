# Phar::canWrite

Source: https://devdocs.io/php/phar.canwrite

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::canWrite — Returns whether phar extension supports writing and creating phars

### Description

```
final public static Phar::canWrite(): bool
```

This static method determines whether write access has been disabled in the system php.ini via the phar.readonly ini variable.

### Parameters

### Return Values

true if write access is enabled, false if it is disabled.

### Examples

Example #1 A Phar::canWrite() example

```
<?php
if (Phar::canWrite()) {
    file_put_contents('phar://myphar.phar/file.txt', 'hi there');
}
?>
```

### See Also

- phar.readonly
- Phar::isWritable() - Returns true if the phar archive can be modified

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.canwrite.php
