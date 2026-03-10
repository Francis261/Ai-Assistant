# ZipArchive::extractTo

Source: https://devdocs.io/php/ziparchive.extractto

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::extractTo — Extract the archive contents

### Description

```
public ZipArchive::extractTo(string $pathto, array|string|null $files = null): bool
```

Extract the complete archive or the given files to the specified destination.

The default permissions for extracted files and directories give the widest possible access. This can be restricted by setting the current umask, which can be changed using umask().

For security reasons, the original permissions are not restored. For an example of how to restore them, see the code sample on the ZipArchive::getExternalAttributesIndex() page.

### Parameters

Location where to extract the files.

The entries to extract. It accepts either a single entry name or an array of names.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Extract all entries

```
<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->extractTo('/my/destination/dir/');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

Example #2 Extract two entries

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test_im.zip');
if ($res === TRUE) {
    $zip->extractTo('/my/destination/dir/', array('pear_item.gif', 'testfromfile.php'));
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>
```

### Notes

Note:

Windows NTFS file systems do not support some characters in filenames, namely <|>*?":. Filenames with a trailing dot are not supported either. Contrary to some extraction tools, this method does not replace these characters with an underscore, but instead fails to extract such files.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.extractto.php
