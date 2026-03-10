# Phar::decompress

Source: https://devdocs.io/php/phar.decompress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::decompress — Decompresses the entire Phar archive

### Description

```
public Phar::decompress(?string $extension = null): ?Phar
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

For tar-based and phar-based phar archives, this method decompresses the entire archive.

For Zip-based phar archives, this method fails with an exception. The zlib extension must be enabled to decompress an archive compressed with gzip compression, and the bzip2 extension must be enabled in order to decompress an archive compressed with bzip2 compression. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed.

In addition, this method automatically changes the file extension of the archive, .phar by default for phar archives, or .phar.tar for tar-based phar archives. Alternatively, a file extension may be specified with the second parameter.

### Parameters

For decompressing, the default file extensions are .phar and .phar.tar. Use this parameter to specify another file extension. Be aware that all executable phar archives must contain .phar in their filename.

### Return Values

A Phar object is returned on success, and null on failure.

### Errors/Exceptions

Throws BadMethodCallException if the phar.readonly INI variable is on, the zlib extension is not available, or the bzip2 extension is not enabled.

### Changelog

### Examples

Example #1 A Phar::decompress() example

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar.gz');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p3 = $p2->decompress(); // creates /path/to/my.phar
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
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.decompress.php
