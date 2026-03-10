# ZipArchive::setCompressionIndex

Source: https://devdocs.io/php/ziparchive.setcompressionindex

(PHP 7, PHP 8, PECL zip >= 1.13.0)

ZipArchive::setCompressionIndex — Set the compression method of an entry defined by its index

### Description

```
public ZipArchive::setCompressionIndex(int $index, int $method, int $compflags = 0): bool
```

Set the compression method of an entry defined by its index.

### Parameters

Index of the entry.

The compression method, one of the ZipArchive::CM_* constants.

Compression level.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Add files with different compression methods to an archive

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('foo', 'Some text');
    $zip->addFromString('bar', 'Some other text');
    $zip->setCompressionIndex(0, ZipArchive::CM_STORE);
    $zip->setCompressionIndex(1, ZipArchive::CM_DEFLATE);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setcompressionindex.php
