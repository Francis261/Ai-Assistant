# PharFileInfo::decompress

Source: https://devdocs.io/php/pharfileinfo.decompress

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharFileInfo::decompress — Decompresses the current Phar entry within the phar

### Description

```
public PharFileInfo::decompress(): true
```

This method decompresses the file inside the Phar archive. Depending on how the file is compressed, the bzip2 or zlib extensions must be enabled to take advantage of this feature. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a Phar archive. Files within PharData archives do not have this restriction.

### Parameters

This function has no parameters.

### Return Values

Always returns true.

### Errors/Exceptions

Throws BadMethodCallException if the phar.readonly INI variable is on, or if the bzip2/zlib extension is not available.

### Examples

Example #1 A PharFileInfo::decompress() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    $file->compress(Phar::GZ);
    var_dump($file->isCompressed());
    $p['myfile.txt']->decompress();
    var_dump($file->isCompressed());
} catch (Exception $e) {
    echo 'Create/modify failed for my.phar: ', $e;
}
?>
```

The above example will output:

```
int(4096)
bool(false)
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.decompress.php
