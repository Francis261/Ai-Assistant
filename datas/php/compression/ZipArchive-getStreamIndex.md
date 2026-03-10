# ZipArchive::getStreamIndex

Source: https://devdocs.io/php/ziparchive.getstreamindex

(PHP 8 >= 8.2.0, PECL zip >= 1.20.0)

ZipArchive::getStreamIndex — Get a file handler to the entry defined by its index (read only)

### Description

```
public ZipArchive::getStreamIndex(int $index, int $flags = 0): resource|false
```

Get a file handler to the entry defined by its index. For now, it only supports read operations.

### Parameters

Index of the entry

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged stream is returned.

### Return Values

Returns a file pointer (resource) on success or false on failure.

### Examples

Example #1 Get the entry contents with fread() and store it

```
<?php
$contents = '';
$z = new ZipArchive();
if ($z->open('test.zip')) {
    $fp = $z->getStreamIndex(1, ZipArchive::FL_UNCHANGED);
    if(!$fp) die($z->getStatusString());

    echo stream_get_contents($fp);

    fclose($fp);
}
?>
```

### See Also

- ZipArchive::getStreamName() - Get a file handler to the entry defined by its name (read only)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getstreamindex.php
