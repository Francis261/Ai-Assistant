# ZipArchive::getExternalAttributesIndex

Source: https://devdocs.io/php/ziparchive.getexternalattributesindex

(PHP 5 >= 5.6.0, PHP 7, PHP 8, PECL zip >= 1.12.4)

ZipArchive::getExternalAttributesIndex — Retrieve the external attributes of an entry defined by its index

### Description

```
public ZipArchive::getExternalAttributesIndex(
 int $index,
 int &$opsys,
 int &$attr,
 int $flags = 0
): bool
```

Retrieve the external attributes of an entry defined by its index.

### Parameters

Index of the entry.

On success, receive the operating system code defined by one of the ZipArchive::OPSYS_ constants.

On success, receive the external attributes. Value depends on operating system.

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged attributes are returned.

### Return Values

Returns true on success or false on failure.

### Examples

This example extract all the entries of a ZIP archive test.zip and set the Unix rights from external attributes.

Example #1 Extract all entries with Unix rights

```
<?php
$zip = new ZipArchive();
if ($zip->open('test.zip') === TRUE) {
    for ($idx=0 ; $s = $zip->statIndex($idx) ; $idx++) {
        if ($zip->extractTo('.', $s['name'])) {
            if ($zip->getExternalAttributesIndex($idx, $opsys, $attr) 
                && $opsys==ZipArchive::OPSYS_UNIX) {
               chmod($s['name'], ($attr >> 16) & 0777);
            }
        }
    }
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getexternalattributesindex.php
