# FilesystemIterator::__construct

Source: https://devdocs.io/php/filesystemiterator.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

FilesystemIterator::__construct — Constructs a new filesystem iterator

### Description

Constructs a new filesystem iterator from the directory.

### Parameters

The path of the filesystem item to be iterated over.

Flags may be provided which will affect the behavior of some methods. A list of the flags can found under FilesystemIterator predefined constants. They can also be set later with FilesystemIterator::setFlags()

### Errors/Exceptions

Throws an UnexpectedValueException if the directory does not exist.

Throws a ValueError if the directory is an empty string.

### Changelog

### Examples

Example #1 FilesystemIterator::__construct() example

```
<?php
$it = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::CURRENT_AS_FILEINFO);
foreach ($it as $fileinfo) {
    echo $fileinfo->getFilename() . "\n";
}
?>
```

Output of the above example in PHP 8.2 is similar to:

```
.
..
apples.jpg
banana.jpg
example.php
```

Output of the above example prior to PHP 8.2.0 is similar to:

```
apples.jpg
banana.jpg
example.php
```

### See Also

- FilesystemIterator::setFlags() - Sets handling flags
- DirectoryIterator::__construct() - Constructs a new directory iterator from a path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filesystemiterator.construct.php
