# Phar::getSupportedCompression

Source: https://devdocs.io/php/phar.getsupportedcompression

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.0)

Phar::getSupportedCompression — Return array of supported compression algorithms

### Description

```
final public static Phar::getSupportedCompression(): array
```

### Parameters

No parameters.

### Return Values

Returns an array containing any of Phar::GZ or Phar::BZ2, depending on the availability of the zlib extension or the bz2 extension.

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::decompressFiles() - Decompresses all files in the current Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getsupportedcompression.php
