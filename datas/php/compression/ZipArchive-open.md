# ZipArchive::open

Source: https://devdocs.io/php/ziparchive.open

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::open — Open a ZIP file archive

### Description

```
public ZipArchive::open(string $filename, int $flags = 0): bool|int
```

Opens a new or existing zip archive for reading, writing or modifying.

Since libzip 1.6.0, an empty file is not a valid archive any longer.

### Parameters

The file name of the ZIP archive to open.

The mode to use to open the archive.

- ZipArchive::OVERWRITE
- ZipArchive::CREATE
- ZipArchive::RDONLY
- ZipArchive::EXCL
- ZipArchive::CHECKCONS

ZipArchive::OVERWRITE

ZipArchive::CREATE

ZipArchive::RDONLY

ZipArchive::EXCL

ZipArchive::CHECKCONS

### Return Values

Returns true on success, false or one of the following error codes on error:

### Examples

Example #1 Open and extract

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    echo 'ok';
    $zip->extractTo('test');
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>
```

Example #2 Create an archive

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->addFile('data.txt', 'entryname.txt');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

Example #3 Create an temporary archive

```
<?php
$name = tempnam(sys_get_temp_dir(), "FOO");
$zip = new ZipArchive;
$res = $zip->open($name, ZipArchive::OVERWRITE); /* truncate as empty file is not valid */
if ($res === TRUE) {
    $zip->addFile('data.txt', 'entryname.txt');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.open.php
