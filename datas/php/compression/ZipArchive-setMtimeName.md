# ZipArchive::setMtimeName

Source: https://devdocs.io/php/ziparchive.setmtimename

(PHP >= 8.0.0, PECL zip >= 1.16.0)

ZipArchive::setMtimeName — Set the modification time of an entry defined by its name

### Description

```
public ZipArchive::setMtimeName(string $name, int $timestamp, int $flags = 0): bool
```

Set the modification time of an entry defined by its name.

### Parameters

Name of the entry.

The modification time (unix timestamp) of the file.

Optional flags, unused for now.

### Return Values

Returns true on success or false on failure.

### Examples

This example creates a ZIP file archive test.zip and add the file test.txt with its modification date.

Example #1 Archive a file

```
<?php
$zip = new ZipArchive();
if ($zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->addFile('text.txt');
    $zip->setMtimeName('text.txt', mktime(0,0,0,12,25,2019));
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>
```

### Notes

Note:

This function is only available if built against libzip ≥ 1.0.0.

### See Also

- ZipArchive::setMtimeIndex() - Set the modification time of an entry defined by its index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setmtimename.php
