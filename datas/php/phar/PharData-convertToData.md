# PharData::convertToData

Source: https://devdocs.io/php/phardata.converttodata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::convertToData — Convert a phar archive to a non-executable tar or zip file

### Description

```
public PharData::convertToData(?int $format = null, ?int $compression = null, ?string $extension = null): ?PharData
```

This method is used to convert a non-executable tar or zip archive to another non-executable format.

If no changes are specified, this method throws a BadMethodCallException. This method should be used to convert a tar archive to zip format or vice-versa. Although it is possible to simply change the compression of a tar archive using this method, it is better to use the PharData::compress() method for logical consistency.

If successful, the method creates a new archive on disk and returns a PharData object. The old archive is not removed from disk, and should be done manually after the process has finished.

### Parameters

This should be one of Phar::TAR or Phar::ZIP. If set to null, the existing file format will be preserved.

This should be one of Phar::NONE for no whole-archive compression, Phar::GZ for zlib-based compression, and Phar::BZ2 for bzip-based compression.

This parameter is used to override the default file extension for a converted archive. Note that .phar cannot be used anywhere in the filename for a non-executable tar or zip archive.

If converting to a tar-based phar archive, the default extensions are .tar, .tar.gz, and .tar.bz2 depending on specified compression. For zip-based archives, the default extension is .zip.

### Return Values

The method returns a PharData object on success, or null on failure.

### Errors/Exceptions

This method throws BadMethodCallException when unable to compress, an unknown compression method has been specified, the requested archive is buffering with Phar::startBuffering() and has not concluded with Phar::stopBuffering(), and a PharException if any problems are encountered during the phar creation process.

### Changelog

### Examples

Example #1 A PharData::convertToData() example

Using PharData::convertToData():

```
<?php
try {
    $tarphar = new PharData('myphar.tar');
    // note that myphar.tar is *not* unlinked
    // convert it to the non-executable tar file format
    // creates myphar.zip
    $zip = $tarphar->convertToData(Phar::ZIP);
    // create myphar.tbz
    $tgz = $zip->convertToData(Phar::TAR, Phar::BZ2, '.tbz');
    // creates myphar.phar.tgz
    $phar = $tarphar->convertToData(Phar::PHAR); // throws exception
} catch (Exception $e) {
    // handle the error here
}
?>
```

### See Also

- Phar::convertToExecutable() - Convert a phar archive to another executable phar archive file format
- Phar::convertToData() - Convert a phar archive to a non-executable tar or zip file
- PharData::convertToExecutable() - Convert a non-executable tar/zip archive to an executable phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.converttodata.php
