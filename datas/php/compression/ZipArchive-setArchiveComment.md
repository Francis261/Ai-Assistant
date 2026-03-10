# ZipArchive::setArchiveComment

Source: https://devdocs.io/php/ziparchive.setarchivecomment

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.4.0)

ZipArchive::setArchiveComment — Set the comment of a ZIP archive

### Description

```
public ZipArchive::setArchiveComment(string $comment): bool
```

Set the comment of a ZIP archive.

### Parameters

The contents of the comment.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Create an archive and set a comment

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->setArchiveComment('new archive comment');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setarchivecomment.php
