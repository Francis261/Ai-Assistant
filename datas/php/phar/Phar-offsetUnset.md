# Phar::offsetUnset

Source: https://devdocs.io/php/phar.offsetunset

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::offsetUnset — Remove a file from a phar

### Description

```
public Phar::offsetUnset(string $localName): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets. offsetUnset is used for deleting an existing file, and is called by the unset() language construct.

### Parameters

The filename (relative path) to modify in a Phar.

### Return Values

No value is returned.

### Errors/Exceptions

if phar.readonly is 1, BadMethodCallException is thrown, as modifying a Phar is only allowed when phar.readonly is set to 0. Throws PharException if there are any problems flushing changes made to the Phar archive to disk.

### Examples

Example #1 A Phar::offsetUnset() example

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
try {
    // deletes file.txt from my.phar by calling offsetUnset
    unset($p['file.txt']);
} catch (Exception $e) {
    echo 'Could not delete file.txt: ', $e;
}
?>
```

### See Also

- Phar::offsetExists() - Determines whether a file exists in the phar
- Phar::offsetGet() - Gets a PharFileInfo object for a specific file
- Phar::offsetSet() - Set the contents of an internal file to those of an external file
- Phar::unlinkArchive() - Completely remove a phar archive from disk and from memory
- Phar::delete() - Delete a file within a phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.offsetunset.php
