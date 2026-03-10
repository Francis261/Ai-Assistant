# PharFileInfo::getCompressedSize

Source: https://devdocs.io/php/pharfileinfo.getcompressedsize

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::getCompressedSize — Returns the actual size of the file (with compression) inside the Phar archive

### Description

```
public PharFileInfo::getCompressedSize(): int
```

This returns the size of the file within the Phar archive. Uncompressed files will return the same value for getCompressedSize as they will with filesize()

### Parameters

This function has no parameters.

### Return Values

The size in bytes of the file within the Phar archive on disk.

### Examples

Example #1 A PharFileInfo::getCompressedSize() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    echo $file->getCompressedSize();
} catch (Exception $e) {
    echo 'Write operations failed on my.phar: ', $e;
}
?>
```

The above example will output:

```
2
```

### See Also

- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- Phar::decompressFiles() - Decompresses all files in the current Phar archive
- Phar::compressFiles() - Compresses all files in the current Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.getcompressedsize.php
