# PharData::addFile

Source: https://devdocs.io/php/phardata.addfile

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::addFile — Add a file from the filesystem to the tar/zip archive

### Description

```
public PharData::addFile(string $filename, ?string $localName = null): void
```

With this method, any file or URL can be added to the tar/zip archive. If the optional second parameter localname is specified, the file will be stored in the archive with that name, otherwise the file parameter is used as the path to store within the archive. URLs must have a localname or an exception is thrown. This method is similar to ZipArchive::addFile().

### Parameters

Full or relative path to a file on disk to be added to the phar archive.

Path that the file will be stored in the archive.

### Return Values

no return value, exception is thrown on failure.

### Changelog

### Examples

Example #1 A PharData::addFile() example

```
<?php
try {
    $a = new PharData('/path/to/my.tar');

    $a->addFile('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->getContent();

    $a->addFile('/full/path/to/file', 'my/file.txt');
    $c = $a['my/file.txt']->getContent();

    // demonstrate URL usage
    $a->addFile('http://www.example.com', 'example.html');
} catch (Exception $e) {
    // handle errors here
}
?>
```

### Notes

Note: PharData::addFile(), PharData::addFromString() and PharData::offsetSet() save a new phar archive each time they are called. If performance is a concern, PharData::buildFromDirectory() or PharData::buildFromIterator() should be used instead.

### See Also

- PharData::offsetSet() - Set the contents of a file within the tar/zip to those of an external file or string
- Phar::addFile() - Add a file from the filesystem to the phar archive
- PharData::addFromString() - Add a file from a string to the tar/zip archive
- PharData::addEmptyDir() - Add an empty directory to the tar/zip archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.addfile.php
