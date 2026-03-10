# ZipArchive::setExternalAttributesName

Source: https://devdocs.io/php/ziparchive.setexternalattributesname

(PHP 5 >= 5.6.0, PHP 7, PHP 8, PECL zip >= 1.12.4)

ZipArchive::setExternalAttributesName — Set the external attributes of an entry defined by its name

### Description

```
public ZipArchive::setExternalAttributesName(
 string $name,
 int $opsys,
 int $attr,
 int $flags = 0
): bool
```

Set the external attributes of an entry defined by its name.

### Parameters

Name of the entry.

The operating system code defined by one of the ZipArchive::OPSYS_ constants.

The external attributes. Value depends on operating system.

Optional flags. Currently unused.

### Return Values

Returns true on success or false on failure.

### Examples

This example opens a ZIP file archive test.zip and add the file test.txt with its Unix rights as external attributes.

Example #1 Archive a file, with its Unix rights

```
<?php
$zip = new ZipArchive();
$stat = stat($filename='test.txt');
if (is_array($stat) && $zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->addFile($filename);
    $zip->setExternalAttributesName($filename, ZipArchive::OPSYS_UNIX, $stat['mode'] << 16);
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setexternalattributesname.php
