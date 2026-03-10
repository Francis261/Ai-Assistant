# DirectoryIterator::__construct

Source: https://devdocs.io/php/directoryiterator.construct

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::__construct — Constructs a new directory iterator from a path

### Description

Constructs a new directory iterator from a path.

### Parameters

The path of the directory to traverse.

### Errors/Exceptions

Throws an UnexpectedValueException if the directory does not exist.

Throws a ValueError if the directory is an empty string.

### Changelog

### Examples

Example #1 A DirectoryIterator::__construct() example

This example will list the contents of the directory containing the script.

```
<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        var_dump($fileinfo->getFilename());
    }
}
?>
```

### See Also

- SplFileInfo
- Iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.construct.php
