# Phar::decompressFiles

Source: https://devdocs.io/php/phar.decompressfiles

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::decompressFiles — Decompresses all files in the current Phar archive

### Description

```
public Phar::decompressFiles(): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

For tar-based phar archives, this method throws a BadMethodCallException, as compression of individual files within a tar archive is not supported by the file format. Use Phar::compress() to compress an entire tar-based phar archive.

For Zip-based and phar-based phar archives, this method decompresses all files in the Phar archive. The zlib or bzip2 extensions must be enabled to take advantage of this feature if any files are compressed using bzip2/zlib compression. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed.

### Parameters

This function has no parameters.

### Return Values

Always returns true.

### Errors/Exceptions

Throws BadMethodCallException if the phar.readonly INI variable is on, the zlib extension is not available, or if any files are compressed using bzip2 compression and the bzip2 extension is not enabled.

### Examples

Example #1 A Phar::decompressFiles() example

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p->compressFiles(Phar::GZ);
foreach ($p as $file) {
    var_dump($file->getFileName());
    var_dump($file->isCompressed());
    var_dump($file->isCompressed(Phar::BZ2));
    var_dump($file->isCompressed(Phar::GZ));
}
$p->decompressFiles();
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
int(4096)
bool(false)
bool(true)
string(11) "myfile2.txt"
int(4096)
bool(false)
bool(true)
string(10) "myfile.txt"
bool(false)
bool(false)
bool(false)
string(11) "myfile2.txt"
bool(false)
bool(false)
bool(false)
```

### See Also

- PharFileInfo::getCompressedSize() - Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::isCompressed() - Returns whether the entry is compressed
- PharFileInfo::compress() - Compresses the current Phar entry with either zlib or bzip2 compression
- PharFileInfo::decompress() - Decompresses the current Phar entry within the phar
- Phar::canCompress() - Returns whether phar extension supports compression using either zlib or bzip2
- Phar::isCompressed() - Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::compressFiles() - Compresses all files in the current Phar archive
- Phar::getSupportedCompression() - Return array of supported compression algorithms
- Phar::compress() - Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::decompress() - Decompresses the entire Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.decompressfiles.php
