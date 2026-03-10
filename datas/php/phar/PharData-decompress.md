# PharData::decompress

Source: https://devdocs.io/php/phardata.decompress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::decompress — Decompresses the entire Phar archive

### Description

```
public PharData::decompress(?string $extension = null): ?PharData
```

For tar-based archives, this method decompresses the entire archive.

For Zip-based archives, this method fails with an exception. The zlib extension must be enabled to decompress an archive compressed with gzip compression, and the bzip2 extension must be enabled in order to decompress an archive compressed with bzip2 compression.

In addition, this method automatically renames the file extension of the archive, .tar by default. Alternatively, a file extension may be specified with the extension parameter.

### Parameters

For decompressing, the default file extension is .tar. Use this parameter to specify another file extension. Be aware that only executable archives can contain .phar in their filename.

### Return Values

A PharData object is returned on success, or null on failure.

### Errors/Exceptions

Throws BadMethodCallException if the zlib extension is not available, or the bzip2 extension is not enabled.

### Changelog

### Examples

Example #1 A PharData::decompress() example

```
<?php
$p = new PharData('/path/to/my.tar.gz');
$p->decompress(); // creates /path/to/my.tar
?>
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- PharData::compress() - Compresses the entire tar/zip archive using Gzip or Bzip2 compression
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- PharData::compress() - Compresses the entire tar/zip archive using Gzip or Bzip2 compression
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- PharData::compressFiles() - Compresses all files in the current tar/zip archive
- PharData::decompressFiles() - Decompresses all files in the current zip archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.decompress.php
