# PharData::compressFiles

Source: https://devdocs.io/php/phardata.compressfiles

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::compressFiles — Compresses all files in the current tar/zip archive

### Description

```
public PharData::compressFiles(int $compression): void
```

For tar-based archives, this method throws a BadMethodCallException, as compression of individual files within a tar archive is not supported by the file format. Use PharData::compress() to compress an entire tar-based archive.

For Zip-based archives, this method compresses all files in the archive using the specified compression. The zlib or bzip2 extensions must be enabled to take advantage of this feature. In addition, if any files are already compressed using bzip2/zlib compression, the respective extension must be enabled in order to decompress the files prior to re-compressing.

### Parameters

Compression must be one of Phar::GZ, Phar::BZ2 to add compression, or Phar::NONE to remove compression.

### Return Values

No value is returned.

### Errors/Exceptions

Throws BadMethodCallException if the phar.readonly INI variable is on, the zlib extension is not available, or if any files are compressed using bzip2 compression and the bzip2 extension is not enabled.

### Examples

Example #1 A PharData::compressFiles() example

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
foreach ($p as $file) {
    var_dump($file->getFileName());
    var_dump($file->isCompressed());
    var_dump($file->isCompressed(Phar::BZ2));
    var_dump($file->isCompressed(Phar::GZ));
}
$p->compressFiles(Phar::GZ);
foreach ($p as $file) {
    var_dump($file->getFileName());
    var_dump($file->isCompressed());
    var_dump($file->isCompressed(Phar::BZ2));
    var_dump($file->isCompressed(Phar::GZ));
}
?>
```

The above example will output:

```
string(10) "myfile.txt"
bool(false)
bool(false)
bool(false)
string(11) "myfile2.txt"
bool(false)
bool(false)
bool(false)
string(10) "myfile.txt"
int(4096)
bool(false)
bool(true)
string(11) "myfile2.txt"
int(4096)
bool(false)
bool(true)
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- PharData::decompressFiles() - Decompresses all files in the current zip archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- PharData::compress() - Compresses the entire tar/zip archive using Gzip or Bzip2 compression
- PharData::decompress() - Decompresses the entire Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.compressfiles.php
