# Phar::isCompressed

Source: https://devdocs.io/php/phar.iscompressed

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::isCompressed — Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)

### Description

```
public Phar::isCompressed(): int|false
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on). Zip-based phar archives cannot be compressed as a file, and so this method will always return false if a zip-based phar archive is queried.

### Parameters

No parameters.

### Return Values

Phar::GZ, Phar::BZ2 or false.

### Examples

Example #1 A Phar::isCompressed() example

```
<?php
try {
    $phar1 = new Phar('myphar.zip.phar');
    var_dump($phar1->isCompressed());
    $phar2 = new Phar('myuncompressed.tar.phar');
    var_dump($phar2->isCompressed());
    $phar2->compress(Phar::GZ);
    var_dump($phar2->isCompressed() == Phar::GZ);
} catch (Exception $e) {
}
?>
```

The above example will output:

```
bool(false)
bool(false)
bool(true)
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.iscompressed.php
