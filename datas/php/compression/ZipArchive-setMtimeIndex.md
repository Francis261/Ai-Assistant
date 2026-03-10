# ZipArchive::setMtimeIndex

Source: https://devdocs.io/php/ziparchive.setmtimeindex

(PHP >= 8.0.0, PECL zip >= 1.16.0)

ZipArchive::setMtimeIndex — Set the modification time of an entry defined by its index

### Description

```
public ZipArchive::setMtimeIndex(int $index, int $timestamp, int $flags = 0): bool
```

Set the modification time of an entry defined by its index.

### Parameters

Index of the entry.

The modification time (unix timestamp) of the file.

Optional flags, unused for now.

### Return Values

Returns true on success or false on failure.

### Examples

This example creates a ZIP file archive test.zip and add the file test.txt with its modification date.

Example #1 Archive a file

```
<?php
$zip = new ZipArchive();
if ($zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->addFile('text.txt');
    $zip->setMtimeIndex(0, mktime(0,0,0,12,25,2019));
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>
```

### Notes

Note:

This function is only available if built against libzip ≥ 1.0.0.

### See Also

- ZipArchive::setMtimeName() - Set the modification time of an entry defined by its name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setmtimeindex.php
