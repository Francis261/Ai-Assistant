# ZipArchive::setCompressionName

Source: https://devdocs.io/php/ziparchive.setcompressionname

(PHP 7, PHP 8, PECL zip >= 1.13.0)

ZipArchive::setCompressionName — Set the compression method of an entry defined by its name

### Description

```
public ZipArchive::setCompressionName(string $name, int $method, int $compflags = 0): bool
```

Set the compression method of an entry defined by its name.

### Parameters

Name of the entry.

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
    $zip->setCompressionName('foo', ZipArchive::CM_STORE);
    $zip->setCompressionName('bar', ZipArchive::CM_DEFLATE);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

Example #2 Add file and set compression method

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFile('foo.jpg', 'bar.jpg');
    $zip->setCompressionName('bar.jpg', ZipArchive::CM_XZ);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setcompressionname.php
