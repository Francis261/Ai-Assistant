# ZipArchive::getExternalAttributesName

Source: https://devdocs.io/php/ziparchive.getexternalattributesname

(PHP 5 >= 5.6.0, PHP 7, PHP 8, PECL zip >= 1.12.4)

ZipArchive::getExternalAttributesName — Retrieve the external attributes of an entry defined by its name

### Description

```
public ZipArchive::getExternalAttributesName(
 string $name,
 int &$opsys,
 int &$attr,
 int $flags = 0
): bool
```

Retrieve the external attributes of an entry defined by its name.

### Parameters

Name of the entry.

On success, receive the operating system code defined by one of the ZipArchive::OPSYS_ constants.

On success, receive the external attributes. Value depends on operating system.

If flags is set to ZipArchive::FL_UNCHANGED, the original unchanged attributes are returned.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getexternalattributesname.php
