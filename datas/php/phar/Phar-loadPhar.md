# Phar::loadPhar

Source: https://devdocs.io/php/phar.loadphar

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::loadPhar — Loads any phar archive with an alias

### Description

```
final public static Phar::loadPhar(string $filename, ?string $alias = null): bool
```

This can be used to read the contents of an external Phar archive. This is most useful for assigning an alias to a phar so that subsequent references to the phar can use the shorter alias, or for loading Phar archives that only contain data and are not intended for execution/inclusion in PHP scripts.

### Parameters

the full or relative path to the phar archive to open

The alias that may be used to refer to the phar archive. Note that many phar archives specify an explicit alias inside the phar archive, and a PharException will be thrown if a new alias is specified in this case.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

PharException is thrown if an alias is passed in and the phar archive already has an explicit alias

### Examples

Example #1 A Phar::loadPhar() example

Phar::loadPhar can be used anywhere to load an external Phar archive, whereas Phar::mapPhar should be used in a loader stub for a Phar.

```
<?php
try {
    Phar::loadPhar('/path/to/phar.phar', 'my.phar');
    echo file_get_contents('phar://my.phar/file.txt');
} catch (PharException $e) {
    echo $e;
}
?>
```

### See Also

- Phar::mapPhar() - Reads the currently executed file (a phar) and registers its manifest

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.loadphar.php
