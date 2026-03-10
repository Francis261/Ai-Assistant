# PharData::offsetUnset

Source: https://devdocs.io/php/phardata.offsetunset

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::offsetUnset — Remove a file from a tar/zip archive

### Description

```
public PharData::offsetUnset(string $localName): void
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a tar/zip archive using array access brackets. offsetUnset is used for deleting an existing file, and is called by the unset() language construct.

### Parameters

The filename (relative path) to modify in the tar/zip archive.

### Return Values

No value is returned.

### Errors/Exceptions

Throws PharException if there are any problems flushing changes made to the tar/zip archive to disk.

### Examples

Example #1 A PharData::offsetUnset() example

```
<?php
$p = new PharData('/path/to/my.zip');
try {
    // deletes file.txt from my.zip by calling offsetUnset
    unset($p['file.txt']);
} catch (Exception $e) {
    echo 'Could not delete file.txt: ', $e;
}
?>
```

### See Also

- Phar::offsetUnset() - Remove a file from a phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.offsetunset.php
