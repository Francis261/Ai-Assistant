# PharData::addFromString

Source: https://devdocs.io/php/phardata.addfromstring

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::addFromString — Add a file from a string to the tar/zip archive

### Description

```
public PharData::addFromString(string $localName, string $contents): void
```

With this method, any string can be added to the tar/zip archive. The file will be stored in the archive with localname as its path. This method is similar to ZipArchive::addFromString().

### Parameters

Path that the file will be stored in the archive.

The file contents to store

### Return Values

no return value, exception is thrown on failure.

### Examples

Example #1 A PharData::addFromString() example

```
<?php
try {
    $a = new PharData('/path/to/my.tar');

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

Note: PharData::addFile(), PharData::addFromString() and PharData::offsetSet() save a new phar archive each time they are called. If performance is a concern, PharData::buildFromDirectory() or PharData::buildFromIterator() should be used instead.

### See Also

- PharData::offsetSet() - Set the contents of a file within the tar/zip to those of an external file or string
- Phar::addFromString() - Add a file from a string to the phar archive
- PharData::addFile() - Add a file from the filesystem to the tar/zip archive
- PharData::addEmptyDir() - Add an empty directory to the tar/zip archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.addfromstring.php
