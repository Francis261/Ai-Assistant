# PharData::offsetSet

Source: https://devdocs.io/php/phardata.offsetset

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::offsetSet — Set the contents of a file within the tar/zip to those of an external file or string

### Description

```
public PharData::offsetSet(string $localName, resource|string $value): void
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a tar/zip archive using array access brackets. offsetSet is used for modifying an existing file, or adding a new file to a tar/zip archive.

### Parameters

The filename (relative path) to modify in a tar or zip archive.

Content of the file.

### Return Values

No return values.

### Errors/Exceptions

Throws PharException if there are any problems flushing changes made to the tar/zip archive to disk.

### Examples

Example #1 A PharData::offsetSet() example

offsetSet should not be accessed directly, but instead used via array access with the [] operator.

```
<?php
$p = new PharData('/path/to/my.tar');
try {
    // calls offsetSet
    $p['file.txt'] = 'Hi there';
} catch (Exception $e) {
    echo 'Could not modify file.txt:', $e;
}
?>
```

### Notes

Note: PharData::addFile(), PharData::addFromString() and PharData::offsetSet() save a new phar archive each time they are called. If performance is a concern, PharData::buildFromDirectory() or PharData::buildFromIterator() should be used instead.

### See Also

- Phar::offsetSet() - Set the contents of an internal file to those of an external file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.offsetset.php
