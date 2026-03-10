# ZipArchive::setCommentIndex

Source: https://devdocs.io/php/ziparchive.setcommentindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.4.0)

ZipArchive::setCommentIndex — Set the comment of an entry defined by its index

### Description

```
public ZipArchive::setCommentIndex(int $index, string $comment): bool
```

Set the comment of an entry defined by its index.

### Parameters

Index of the entry.

The contents of the comment.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Open an archive and set a comment for an entry

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    $zip->setCommentIndex(2, 'new entry comment');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setcommentindex.php
