# Phar::addFromString

Source: https://devdocs.io/php/phar.addfromstring

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::addFromString — Add a file from a string to the phar archive

### Description

```
public Phar::addFromString(string $localName, string $contents): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

With this method, any string can be added to the phar archive. The file will be stored in the archive with localname as its path. This method is similar to ZipArchive::addFromString().

### Parameters

Path that the file will be stored in the archive.

The file contents to store

### Return Values

no return value, exception is thrown on failure.

### Examples

Example #1 A Phar::addFromString() example

```
<?php
try {
    $a = new Phar('/path/to/phar.phar');

    $a->addFromString('path/to/file.txt', 'my simple file');
    $b = $a['path/to/file.txt']->getContent();

    // to add contents from a stream handle for large files, use offsetSet()
    $c = fopen('/path/to/hugefile.bin');
    $a['largefile.bin'] = $c;
    fclose($c);
} catch (Exception $e) {
    // handle errors here
}
?>
```

### Notes

Note: Phar::addFile(), Phar::addFromString() and Phar::offsetSet() save a new phar archive each time they are called. If performance is a concern, Phar::buildFromDirectory() or Phar::buildFromIterator() should be used instead.

### See Also

- Phar::offsetSet() - Set the contents of an internal file to those of an external file
- PharData::addFromString() - Add a file from a string to the tar/zip archive
- Phar::addFile() - Add a file from the filesystem to the phar archive
- Phar::addEmptyDir() - Add an empty directory to the phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.addfromstring.php
