# ZipArchive::addFile

Source: https://devdocs.io/php/ziparchive.addfile

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::addFile — Adds a file to a ZIP archive from the given path

### Description

```
public ZipArchive::addFile(
 string $filepath,
 string $entryname = "",
 int $start = 0,
 int $length = ZipArchive::LENGTH_TO_END,
 int $flags = ZipArchive::FL_OVERWRITE
): bool
```

Adds a file to a ZIP archive from a given path.

Note: For maximum portability, it is recommended to always use forward slashes (/) as directory separator in ZIP filenames.

### Parameters

The path to the file to add.

If supplied and not empty, this is the local name inside the ZIP archive that will override the filepath.

For partial copy, start position.

For partial copy, length to be copied, if ZipArchive::LENGTH_TO_END (0) the file size is used, if ZipArchive::LENGTH_UNCHECKED the whole file is used (starting from start).

Bitmask consisting of ZipArchive::FL_OVERWRITE, ZipArchive::FL_ENC_GUESS, ZipArchive::FL_ENC_UTF_8, ZipArchive::FL_ENC_CP437, ZipArchive::FL_OPEN_FILE_NOW. The behaviour of these constants is described on the ZIP constants page.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

This example opens a ZIP file archive test.zip and add the file /path/to/index.txt. as newname.txt.

Example #1 Open and add

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->addFile('/path/to/index.txt', 'newname.txt');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

### Notes

Note:

When a file is set to be added to the archive, PHP will lock the file. The lock is only released once the ZipArchive object has been closed, either via ZipArchive::close() or the ZipArchive object being destroyed. This may prevent you from being able to delete the file being added until after the lock has been released.

### See Also

- ZipArchive::replaceFile() - Replace file in ZIP archive with a given path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.addfile.php
