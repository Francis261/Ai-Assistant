# ZipArchive::getArchiveComment

Source: https://devdocs.io/php/ziparchive.getarchivecomment

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::getArchiveComment — Returns the Zip archive comment

### Description

```
public ZipArchive::getArchiveComment(int $flags = 0): string|false
```

Returns the Zip archive comment.

### Parameters

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged comment is returned.

### Return Values

Returns the Zip archive comment or false on failure.

### Examples

Example #1 Dump an archive comment

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test_with_comment.zip');
if ($res === TRUE) {
    var_dump($zip->getArchiveComment());
    /* Or using the archive property */
    var_dump($zip->comment);
} else {
    echo 'failed, code:' . $res;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getarchivecomment.php
