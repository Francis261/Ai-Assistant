# Phar::canCompress

Source: https://devdocs.io/php/phar.cancompress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::canCompress — Returns whether phar extension supports compression using either zlib or bzip2

### Description

```
final public static Phar::canCompress(int $compression = 0): bool
```

This should be used to test whether compression is possible prior to loading a phar archive containing compressed files.

### Parameters

Either Phar::GZ or Phar::BZ2 can be used to test whether compression is possible with a specific compression algorithm (zlib or bzip2).

### Return Values

true if compression/decompression is available, false if not.

### Examples

Example #1 A Phar::canCompress() example

```
<?php
if (Phar::canCompress()) {
    echo file_get_contents('phar://compressedphar.phar/internal/file.txt');
} else {
    echo 'no compression available';
}
?>
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- Phar::convertToExecutable() - Convert a phar archive to another executable phar archive file format
- Phar::convertToData() - Convert a phar archive to a non-executable tar or zip file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.cancompress.php
