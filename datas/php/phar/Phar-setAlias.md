# Phar::setAlias

Source: https://devdocs.io/php/phar.setalias

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.1)

Phar::setAlias — Set the alias for the Phar archive

### Description

```
public Phar::setAlias(string $alias): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Set the alias for the Phar archive, and write it as the permanent alias for this phar archive. An alias can be used internally to a phar archive to ensure that use of the phar stream wrapper to access internal files always works regardless of the location of the phar archive on the filesystem. Another alternative is to rely upon Phar's interception of include or to use Phar::interceptFileFuncs() and use relative paths.

### Parameters

A shorthand string that this archive can be referred to in phar stream wrapper access.

### Return Values

Always returns true.

### Errors/Exceptions

Throws UnexpectedValueException when write access is disabled, and PharException if the alias is already in use or any problems were encountered flushing changes to disk.

### Changelog

### Examples

Example #1 A Phar::setAlias() example

```
<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->setAlias('myp.phar');
} catch (Exception $e) {
    // handle error
}
?>
```

### See Also

- Phar::__construct() - Construct a Phar archive object
- Phar::interceptFileFuncs() - Instructs phar to intercept fopen, file_get_contents, opendir, and all of the stat-related functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.setalias.php
