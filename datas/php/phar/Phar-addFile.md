# Phar::addFile

Source: https://devdocs.io/php/phar.addfile

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::addFile — Add a file from the filesystem to the phar archive

### Description

```
public Phar::addFile(string $filename, ?string $localName = null): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

With this method, any file or URL can be added to the phar archive. If the optional second parameter localName is a string, the file will be stored in the archive with that name, otherwise the file parameter is used as the path to store within the archive. URLs must have a localname or an exception is thrown. This method is similar to ZipArchive::addFile().

### Parameters

Full or relative path to a file on disk to be added to the phar archive.

Path that the file will be stored in the archive.

### Return Values

no return value, exception is thrown on failure.

### Changelog

### Examples

Example #1 A Phar::addFile() example

```
<?php
try {
    $a = new Phar('/path/to/phar.phar');

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

Note: Phar::addFile(), Phar::addFromString() and Phar::offsetSet() save a new phar archive each time they are called. If performance is a concern, Phar::buildFromDirectory() or Phar::buildFromIterator() should be used instead.

### See Also

- Phar::offsetSet() - Set the contents of an internal file to those of an external file
- PharData::addFile() - Add a file from the filesystem to the tar/zip archive
- Phar::addFromString() - Add a file from a string to the phar archive
- Phar::addEmptyDir() - Add an empty directory to the phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.addfile.php
