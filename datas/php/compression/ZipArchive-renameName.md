# ZipArchive::renameName

Source: https://devdocs.io/php/ziparchive.renamename

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.5.0)

ZipArchive::renameName — Renames an entry defined by its name

### Description

```
public ZipArchive::renameName(string $name, string $new_name): bool
```

Renames an entry defined by its name.

### Parameters

Name of the entry to rename.

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
    $zip->renameName('currentname.txt','newname.txt');
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.renamename.php
