# ZipArchive::getCommentName

Source: https://devdocs.io/php/ziparchive.getcommentname

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.4.0)

ZipArchive::getCommentName — Returns the comment of an entry using the entry name

### Description

```
public ZipArchive::getCommentName(string $name, int $flags = 0): string|false
```

Returns the comment of an entry using the entry name.

### Parameters

Name of the entry

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged comment is returned.

### Return Values

Returns the comment on success or false on failure.

### Examples

Example #1 Dump an entry comment

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test1.zip');
if ($res === TRUE) {
    var_dump($zip->getCommentName('test/entry1.txt'));
} else {
    echo 'failed, code:' . $res;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getcommentname.php
