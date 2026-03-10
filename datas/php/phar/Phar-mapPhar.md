# Phar::mapPhar

Source: https://devdocs.io/php/phar.mapphar

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::mapPhar — Reads the currently executed file (a phar) and registers its manifest

### Description

```
final public static Phar::mapPhar(?string $alias = null, int $offset = 0): bool
```

This static method can only be used inside a Phar archive's loader stub in order to initialize the phar when it is directly executed, or when it is included in another script.

### Parameters

The alias that can be used in phar:// URLs to refer to this archive, rather than its full path.

Unused variable, here for compatibility with PEAR's PHP_Archive.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

PharException is thrown if not called directly within PHP execution, if no __HALT_COMPILER(); token is found in the current source file, or if the file cannot be opened for reading.

### Examples

Example #1 A Phar::mapPhar() example

mapPhar should be used only inside a phar's loader stub. Use loadPhar to load an external phar into memory.

Here is a sample Phar loader stub that uses mapPhar.

```
<?php
function __autoload($class)
{
    include 'phar://me.phar/' . str_replace('_', '/', $class) . '.php';
}
try {
    Phar::mapPhar('me.phar');
    include 'phar://me.phar/startup.php';
} catch (PharException $e) {
    echo $e->getMessage();
    die('Cannot initialize Phar');
}
__HALT_COMPILER();
```

### See Also

- Phar::loadPhar() - Loads any phar archive with an alias

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.mapphar.php
