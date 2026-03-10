# FilesystemIterator::setFlags

Source: https://devdocs.io/php/filesystemiterator.setflags

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

FilesystemIterator::setFlags — Sets handling flags

### Description

```
public FilesystemIterator::setFlags(int $flags): void
```

Sets handling flags.

### Parameters

The handling flags to set. See the FilesystemIterator constants.

### Return Values

No value is returned.

### Examples

Example #1 FilesystemIterator::key() example

This example demonstrates the difference between the FilesystemIterator::KEY_AS_PATHNAME and FilesystemIterator::KEY_AS_FILENAME flags.

```
<?php
$iterator = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_PATHNAME);
echo "Key as Pathname:\n";
foreach ($iterator as $key => $fileinfo) {
    echo $key . "\n";
}

$iterator->setFlags(FilesystemIterator::KEY_AS_FILENAME);
echo "\nKey as Filename:\n";
foreach ($iterator as $key => $fileinfo) {
    echo $key . "\n";
}
?>
```

Output of the above example in PHP 8.2 is similar to:

```
Key as Pathname:
/www/examples/.
/www/examples/..
/www/examples/apple.jpg
/www/examples/banana.jpg
/www/examples/example.php

Key as Filename:
.
..
apple.jpg
banana.jpg
example.php
```

### See Also

- FilesystemIterator::__construct() - Constructs a new filesystem iterator
- FilesystemIterator::getFlags() - Get the handling flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filesystemiterator.setflags.php
