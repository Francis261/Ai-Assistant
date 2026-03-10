# ZipArchive::getFromIndex

Source: https://devdocs.io/php/ziparchive.getfromindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::getFromIndex — Returns the entry contents using its index

### Description

```
public ZipArchive::getFromIndex(int $index, int $len = 0, int $flags = 0): string|false
```

Returns the entry contents using its index.

### Parameters

Index of the entry

The length to be read from the entry. If 0, then the entire entry is read.

The flags to use to open the archive. the following values may be ORed to it.

- ZipArchive::FL_UNCHANGED
- ZipArchive::FL_COMPRESSED

ZipArchive::FL_UNCHANGED

ZipArchive::FL_COMPRESSED

### Return Values

Returns the contents of the entry on success or false on failure.

### Examples

Example #1 Get the file contents

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    echo $zip->getFromIndex(2);
    $zip->close();
} else {
    echo 'failed';
}
?>
```

### See Also

- ZipArchive::getFromName() - Returns the entry contents using its name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getfromindex.php
