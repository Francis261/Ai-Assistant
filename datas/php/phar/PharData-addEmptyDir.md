# PharData::addEmptyDir

Source: https://devdocs.io/php/phardata.addemptydir

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::addEmptyDir — Add an empty directory to the tar/zip archive

### Description

```
public PharData::addEmptyDir(string $directory): void
```

With this method, an empty directory is created with path dirname. This method is similar to ZipArchive::addEmptyDir().

### Parameters

The name of the empty directory to create in the phar archive

### Return Values

no return value, exception is thrown on failure.

### Examples

Example #1 A PharData::addEmptyDir() example

```
<?php
try {
    $a = new PharData('/path/to/my.tar');

    $a->addEmptyDir('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->isDir();
} catch (Exception $e) {
    // handle errors here
}
?>
```

### See Also

- Phar::addEmptyDir() - Add an empty directory to the phar archive
- PharData::addFile() - Add a file from the filesystem to the tar/zip archive
- PharData::addFromString() - Add a file from a string to the tar/zip archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.addemptydir.php
