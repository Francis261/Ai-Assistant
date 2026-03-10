# ZipArchive::replaceFile

Source: https://devdocs.io/php/ziparchive.replacefile

(PHP >= 8.0.0, PECL zip >= 1.18.0)

ZipArchive::replaceFile — Replace file in ZIP archive with a given path

### Description

```
public ZipArchive::replaceFile(
 string $filepath,
 int $index,
 int $start = 0,
 int $length = ZipArchive::LENGTH_TO_END,
 int $flags = 0
): bool
```

Replace file in ZIP archive with a given path.

Note: For maximum portability, it is recommended to always use forward slashes (/) as directory separator in ZIP filenames.

### Parameters

The path to the file to add.

The index of the file to be replaced, its name is unchanged.

For partial copy, start position.

For partial copy, length to be copied, if ZipArchive::LENGTH_TO_END (0) the file size is used, if ZipArchive::LENGTH_UNCHECKED the whole file is used (starting from start).

Bitmask consisting of ZipArchive::FL_ENC_GUESS, ZipArchive::FL_ENC_UTF_8, ZipArchive::FL_ENC_CP437, ZipArchive::FL_OPEN_FILE_NOW. The behaviour of these constants is described on the ZIP constants page.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

This example opens a ZIP file archive test.zip and replaces index 1 entry with /path/to/index.txt.

Example #1 Open and replace

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->replaceFile('/path/to/index.txt', 1);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

### See Also

- ZipArchive::addFile() - Adds a file to a ZIP archive from the given path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.replacefile.php
