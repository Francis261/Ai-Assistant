# ZipArchive::setExternalAttributesIndex

Source: https://devdocs.io/php/ziparchive.setexternalattributesindex

(PHP 5 >= 5.6.0, PHP 7, PHP 8, PECL zip >= 1.12.4)

ZipArchive::setExternalAttributesIndex — Set the external attributes of an entry defined by its index

### Description

```
public ZipArchive::setExternalAttributesIndex(
 int $index,
 int $opsys,
 int $attr,
 int $flags = 0
): bool
```

Set the external attributes of an entry defined by its index.

### Parameters

Index of the entry.

The operating system code defined by one of the ZipArchive::OPSYS_ constants.

The external attributes. Value depends on operating system.

Optional flags. Currently unused.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setexternalattributesindex.php
