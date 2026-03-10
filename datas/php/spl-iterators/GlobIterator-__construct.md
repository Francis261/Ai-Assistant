# GlobIterator::__construct

Source: https://devdocs.io/php/globiterator.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

GlobIterator::__construct — Construct a directory using glob

### Description

Constructs a new directory iterator from a glob expression.

### Parameters

A glob() pattern.

Option flags, the flags may be a bitmask of the FilesystemIterator constants.

### Errors/Exceptions

Throws an UnexpectedValueException if the directory does not exist.

Throws a ValueError if the directory is an empty string.

### Changelog

### Examples

Example #1 GlobIterator example

```
<?php
$iterator = new GlobIterator('*.dll', FilesystemIterator::KEY_AS_FILENAME);

if (!$iterator->count()) {
    echo 'No matches';
} else {
    $n = 0;

    printf("Matched %d item(s)\r\n", $iterator->count());

    foreach ($iterator as $item) {
        printf("[%d] %s\r\n", ++$n, $iterator->key());
    }
}
?>
```

The above example will output something similar to:

```
Matched 2 item(s)
[1] php5ts.dll
[2] php_gd2.dll
```

### See Also

- DirectoryIterator::__construct() - Constructs a new directory iterator from a path
- GlobIterator::count() - Get the number of directories and files
- glob() - Find pathnames matching a pattern

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/globiterator.construct.php
