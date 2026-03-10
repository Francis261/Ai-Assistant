# ZipArchive::addFromString

Source: https://devdocs.io/php/ziparchive.addfromstring

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::addFromString — Add a file to a ZIP archive using its contents

### Description

```
public ZipArchive::addFromString(string $name, string $content, int $flags = ZipArchive::FL_OVERWRITE): bool
```

Add a file to a ZIP archive using its contents.

Note: For maximum portability, it is recommended to always use forward slashes (/) as directory separator in ZIP filenames.

### Parameters

The name of the entry to create.

The contents to use to create the entry. It is used in a binary safe mode.

Bitmask consisting of ZipArchive::FL_OVERWRITE, ZipArchive::FL_ENC_GUESS, ZipArchive::FL_ENC_UTF_8, ZipArchive::FL_ENC_CP437. The behaviour of these constants is described on the ZIP constants page.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Add an entry to a new archive

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

Example #2 Add file to a directory inside an archive

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->addFromString('dir/test.txt', 'file content goes here');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.addfromstring.php
