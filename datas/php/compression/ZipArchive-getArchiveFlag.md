# ZipArchive::getArchiveFlag

Source: https://devdocs.io/php/ziparchive.getarchiveflag

(PHP >= 8.3.0, PECL zip >= 1.22.0)

ZipArchive::getArchiveFlag — Returns the value of a Zip archive global flag

### Description

```
public ZipArchive::getArchiveFlag(int $flag, int $flags = 0): int
```

Returns a Zip archive global flag value.

### Parameters

The global flag to retrieve, among AFL_* constants:

- ZipArchive::AFL_RDONLY
- ZipArchive::AFL_IS_TORRENTZIP
- ZipArchive::AFL_WANT_TORRENTZIP
- ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE

ZipArchive::AFL_RDONLY

ZipArchive::AFL_IS_TORRENTZIP

ZipArchive::AFL_WANT_TORRENTZIP

ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged flag is returned.

### Return Values

Returns 1 if flag is set for archive, 0 if not, and -1 if an error occurred.

### Examples

Example #1 Test if archive is a torrentzip format

```
<?php

$zip = new ZipArchive();
$res = $zip->open('test.zip');

if ($res === true) {
    var_dump($zip->getArchiveFlag(ZipArchive::AFL_IS_TORRENTZIP));
} else {
    echo 'Failed, code: ' . $res;
}

?>
```

### See Also

- ZipArchive::setArchiveFlag() - Set a global flag of a ZIP archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getarchiveflag.php
