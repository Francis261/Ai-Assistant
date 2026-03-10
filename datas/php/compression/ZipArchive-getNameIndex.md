# ZipArchive::getNameIndex

Source: https://devdocs.io/php/ziparchive.getnameindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.5.0)

ZipArchive::getNameIndex — Returns the name of an entry using its index

### Description

```
public ZipArchive::getNameIndex(int $index, int $flags = 0): string|false
```

Returns the name of an entry using its index.

### Parameters

Index of the entry.

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged name is returned.

### Return Values

Returns the name on success or false on failure.

### Examples

Example #1 ZipArchive::getNameIndex() example

```
<?php
if ($zip->open('test.zip') == TRUE) {
 for ($i = 0; $i < $zip->numFiles; $i++) {
     $filename = $zip->getNameIndex($i);
     // ...
 }
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getnameindex.php
