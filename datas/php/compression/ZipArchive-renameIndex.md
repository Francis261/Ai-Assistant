# ZipArchive::renameIndex

Source: https://devdocs.io/php/ziparchive.renameindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.5.0)

ZipArchive::renameIndex — Renames an entry defined by its index

### Description

```
public ZipArchive::renameIndex(int $index, string $new_name): bool
```

Renames an entry defined by its index.

### Parameters

Index of the entry to rename.

New name.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Rename one entry

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    $zip->renameIndex(2,'newname.txt');
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.renameindex.php
