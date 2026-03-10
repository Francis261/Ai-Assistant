# PharFileInfo::isCompressed

Source: https://devdocs.io/php/pharfileinfo.iscompressed

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::isCompressed — Returns whether the entry is compressed

### Description

```
public PharFileInfo::isCompressed(?int $compression = null): bool
```

This returns whether a file is compressed within a Phar archive with either Gzip or Bzip2 compression.

### Parameters

One of Phar::GZ or Phar::BZ2, defaults to any compression.

### Return Values

true if the file is compressed within the Phar archive, false if not.

### Changelog

### Examples

Example #1 A PharFileInfo::isCompressed() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $p['myfile2.txt'] = 'hi';
    $p['myfile2.txt']->setCompressedGZ();
    $file = $p['myfile.txt'];
    $file2 = $p['myfile2.txt'];
    var_dump($file->isCompressed());
    var_dump($file2->isCompressed());
} catch (Exception $e) {
    echo 'Create/modify on phar my.phar failed: ', $e;
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
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- Phar::decompressFiles() - Decompresses all files in the current Phar archive
- Phar::compressFiles() - Compresses all files in the current Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.iscompressed.php
