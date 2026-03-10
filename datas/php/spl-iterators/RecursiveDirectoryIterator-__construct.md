# RecursiveDirectoryIterator::__construct

Source: https://devdocs.io/php/recursivedirectoryiterator.construct

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

RecursiveDirectoryIterator::__construct — Constructs a RecursiveDirectoryIterator

### Description

Constructs a RecursiveDirectoryIterator() for the provided directory.

### Parameters

The path of the directory to be iterated over.

Flags may be provided which will affect the behavior of some methods. A list of the flags can found under FilesystemIterator predefined constants. They can also be set later with FilesystemIterator::setFlags().

### Errors/Exceptions

Throws an UnexpectedValueException if the directory does not exist.

Throws a ValueError if the directory is an empty string.

### Changelog

### Examples

Example #1 RecursiveDirectoryIterator example

```
<?php

$directory = '/tmp';

$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));

$it->rewind();
while($it->valid()) {

    if (!$it->isDot()) {
        echo 'SubPathName: ' . $it->getSubPathName() . "\n";
        echo 'SubPath:     ' . $it->getSubPath() . "\n";
        echo 'Key:         ' . $it->key() . "\n\n";
    }

    $it->next();
}

?>
```

The above example will output something similar to:

```
SubPathName: fruit/apple.xml
SubPath:     fruit
Key:         /tmp/fruit/apple.xml

SubPathName: stuff.xml
SubPath:     
Key:         /tmp/stuff.xml

SubPathName: veggies/carrot.xml
SubPath:     veggies
Key:         /tmp/veggies/carrot.xml
```

### See Also

- FilesystemIterator::__construct() - Constructs a new filesystem iterator
- RecursiveIteratorIterator::__construct() - Construct a RecursiveIteratorIterator
- FilesystemIterator predefined constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivedirectoryiterator.construct.php
