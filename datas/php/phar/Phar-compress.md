# Phar::compress

Source: https://devdocs.io/php/phar.compress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::compress — Compresses the entire Phar archive using Gzip or Bzip2 compression

### Description

```
public Phar::compress(int $compression, ?string $extension = null): ?Phar
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

For tar-based and phar-based phar archives, this method compresses the entire archive using gzip compression or bzip2 compression. The resulting file can be processed with the gunzip command/bunzip command, or accessed directly and transparently with the Phar extension.

For Zip-based phar archives, this method fails with an exception. The zlib extension must be enabled to compress with gzip compression, the bzip2 extension must be enabled in order to compress with bzip2 compression. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed.

In addition, this method automatically renames the archive, appending .gz, .bz2 or removing the extension if passed Phar::NONE to remove compression. Alternatively, a file extension may be specified with the second parameter.

### Parameters

Compression must be one of Phar::GZ, Phar::BZ2 to add compression, or Phar::NONE to remove compression.

By default, the extension is .phar.gz or .phar.bz2 for compressing phar archives, and .phar.tar.gz or .phar.tar.bz2 for compressing tar archives. For decompressing, the default file extensions are .phar and .phar.tar.

### Return Values

Returns a Phar object, or null on failure.

### Errors/Exceptions

Throws BadMethodCallException if the phar.readonly INI variable is on, the zlib extension is not available, or the bzip2 extension is not enabled.

### Changelog

### Examples

Example #1 A Phar::compress() example

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p1 = $p->compress(Phar::GZ); // copies to /path/to/my.phar.gz
$p2 = $p->compress(Phar::BZ2); // copies to /path/to/my.phar.bz2
$p3 = $p2->compress(Phar::NONE); // exception: /path/to/my.phar already exists
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
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.compress.php
