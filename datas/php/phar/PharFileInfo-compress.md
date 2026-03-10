# PharFileInfo::compress

Source: https://devdocs.io/php/pharfileinfo.compress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharFileInfo::compress — Compresses the current Phar entry with either zlib or bzip2 compression

### Description

```
public PharFileInfo::compress(int $compression): true
```

This method compresses the file inside the Phar archive using either bzip2 compression or zlib compression. The bzip2 or zlib extension must be enabled to take advantage of this feature. In addition, if the file is already compressed, the respective extension must be enabled in order to decompress the file. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a Phar archive. Files within PharData archives do not have this restriction.

### Parameters

Compression must be Phar::GZ or Phar::BZ2.

### Return Values

Always returns true.

### Errors/Exceptions

Throws BadMethodCallException if the phar.readonly INI variable is on, or if the bzip2/zlib extension is not available.

### Examples

Example #1 A PharFileInfo::compress() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    var_dump($file->isCompressed(Phar::BZ2));
    $p['myfile.txt']->compress(Phar::BZ2);
    var_dump($file->isCompressed(Phar::BZ2));
} catch (Exception $e) {
    echo 'Create/modify operations on my.phar failed: ', $e;
}
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.compress.php
