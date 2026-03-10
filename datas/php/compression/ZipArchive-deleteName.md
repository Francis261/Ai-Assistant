# ZipArchive::deleteName

Source: https://devdocs.io/php/ziparchive.deletename

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.5.0)

ZipArchive::deleteName — Delete an entry in the archive using its name

### Description

```
public ZipArchive::deleteName(string $name): bool
```

Delete an entry in the archive using its name.

### Parameters

Name of the entry to delete.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Deleting a file and directory from an archive, using names

```
<?php
$zip = new ZipArchive;
if ($zip->open('test1.zip') === TRUE) {
    $zip->deleteName('testfromfile.php');
    $zip->deleteName('testDir/');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.deletename.php
