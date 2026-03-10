# ZipArchive::setArchiveFlag

Source: https://devdocs.io/php/ziparchive.setarchiveflag

(PHP >= 8.3.0, PECL zip >= 1.22.0)

ZipArchive::setArchiveFlag — Set a global flag of a ZIP archive

### Description

```
public ZipArchive::setArchiveFlag(int $flag, int $value): bool
```

Set a global flag of a ZIP archive.

### Parameters

The global flag to change, among AFL_* constants.

- ZipArchive::AFL_WANT_TORRENTZIP
- ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE

ZipArchive::AFL_WANT_TORRENTZIP

ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE

The new value of the flag.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Create a torrentzip archive

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->setArchiveFlag(ZipArchive::AFL_WANT_TORRENTZIP, 1);
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

### See Also

- ZipArchive::getArchiveFlag() - Returns the value of a Zip archive global flag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setarchiveflag.php
