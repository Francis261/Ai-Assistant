# PharData::compress

Source: https://devdocs.io/php/phardata.compress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::compress — Compresses the entire tar/zip archive using Gzip or Bzip2 compression

### Description

```
public PharData::compress(int $compression, ?string $extension = null): ?PharData
```

For tar archives, this method compresses the entire archive using gzip compression or bzip2 compression. The resulting file can be processed with the gunzip command/bunzip command, or accessed directly and transparently with the Phar extension.

For zip archives, this method fails with an exception. The zlib extension must be enabled to compress with gzip compression, the bzip2 extension must be enabled in order to compress with bzip2 compression.

In addition, this method automatically renames the archive, appending .gz, .bz2 or removing the extension if passed Phar::NONE to remove compression. Alternatively, a file extension may be specified with the second parameter.

### Parameters

Compression must be one of Phar::GZ, Phar::BZ2 to add compression, or Phar::NONE to remove compression.

By default, the extension is .tar.gz or .tar.bz2 for compressing a tar, and .tar for decompressing.

### Return Values

A PharData object is returned on success, or null on failure.

### Errors/Exceptions

Throws BadMethodCallException if the zlib extension is not available, or the bzip2 extension is not enabled.

### Changelog

### Examples

Example #1 A PharData::compress() example

```
<?php
$p = new PharData('/path/to/my.tar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p1 = $p->compress(Phar::GZ); // copies to /path/to/my.tar.gz
$p2 = $p->compress(Phar::BZ2); // copies to /path/to/my.tar.bz2
$p3 = $p2->compress(Phar::NONE); // exception: /path/to/my.tar already exists
?>
```

### See Also

- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.compress.php
