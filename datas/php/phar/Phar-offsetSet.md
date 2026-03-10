# Phar::offsetSet

Source: https://devdocs.io/php/phar.offsetset

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::offsetSet — Set the contents of an internal file to those of an external file

### Description

```
public Phar::offsetSet(string $localName, resource|string $value): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets. offsetSet is used for modifying an existing file, or adding a new file to a Phar archive.

### Parameters

The filename (relative path) to modify in a Phar.

Content of the file.

### Return Values

No return values.

### Errors/Exceptions

if phar.readonly is 1, BadMethodCallException is thrown, as modifying a Phar is only allowed when phar.readonly is set to 0. Throws PharException if there are any problems flushing changes made to the Phar archive to disk.

### Examples

Example #1 A Phar::offsetSet() example

offsetSet should not be accessed directly, but instead used via array access with the [] operator.

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
try {
    // calls offsetSet
    $p['file.txt'] = 'Hi there';
} catch (Exception $e) {
    echo 'Could not modify file.txt:', $e;
}
?>
```

### Notes

Note: Phar::addFile(), Phar::addFromString() and Phar::offsetSet() save a new phar archive each time they are called. If performance is a concern, Phar::buildFromDirectory() or Phar::buildFromIterator() should be used instead.

### See Also

- Phar::offsetExists() - Determines whether a file exists in the phar
- Phar::offsetGet() - Gets a PharFileInfo object for a specific file
- Phar::offsetUnset() - Remove a file from a phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.offsetset.php
