# ZipArchive::deleteIndex

Source: https://devdocs.io/php/ziparchive.deleteindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.5.0)

ZipArchive::deleteIndex — Delete an entry in the archive using its index

### Description

```
public ZipArchive::deleteIndex(int $index): bool
```

Delete an entry in the archive using its index.

### Parameters

Index of the entry to delete.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Delete file from archive using its index

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->deleteIndex(2);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.deleteindex.php
