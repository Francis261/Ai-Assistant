# Phar::addEmptyDir

Source: https://devdocs.io/php/phar.addemptydir

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::addEmptyDir — Add an empty directory to the phar archive

### Description

```
public Phar::addEmptyDir(string $directory): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

With this method, an empty directory is created with path dirname. This method is similar to ZipArchive::addEmptyDir().

### Parameters

The name of the empty directory to create in the phar archive

### Return Values

no return value, exception is thrown on failure.

### Examples

Example #1 A Phar::addEmptyDir() example

```
<?php
try {
    $a = new Phar('/path/to/phar.phar');

    $a->addEmptyDir('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->isDir();
} catch (Exception $e) {
    // handle errors here
}
?>
```

### See Also

- PharData::addEmptyDir() - Add an empty directory to the tar/zip archive
- Phar::addFile() - Add a file from the filesystem to the phar archive
- Phar::addFromString() - Add a file from a string to the phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.addemptydir.php
