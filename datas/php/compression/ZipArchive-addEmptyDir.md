# ZipArchive::addEmptyDir

Source: https://devdocs.io/php/ziparchive.addemptydir

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.8.0)

ZipArchive::addEmptyDir — Add a new directory

### Description

```
public ZipArchive::addEmptyDir(string $dirname, int $flags = 0): bool
```

Adds an empty directory in the archive.

### Parameters

The directory to add.

Bitmask consisting of ZipArchive::FL_ENC_GUESS, ZipArchive::FL_ENC_UTF_8, ZipArchive::FL_ENC_CP437. The behaviour of these constants is described on the ZIP constants page.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Create a new directory in an archive

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    if($zip->addEmptyDir('newDirectory')) {
        echo 'Created a new root directory';
    } else {
        echo 'Could not create the directory';
    }
    $zip->close();
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.addemptydir.php
