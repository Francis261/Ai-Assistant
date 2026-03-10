# ZipArchive::setEncryptionIndex

Source: https://devdocs.io/php/ziparchive.setencryptionindex

(PHP >= 7.2.0, PHP 8, PECL zip >= 1.14.0)

ZipArchive::setEncryptionIndex — Set the encryption method of an entry defined by its index

### Description

```
public ZipArchive::setEncryptionIndex(int $index, int $method, #[\SensitiveParameter] ?string $password = null): bool
```

Set the encryption method of an entry defined by its index.

### Parameters

Index of the entry.

The encryption method defined by one of the ZipArchive::EM_ constants.

Optional password, default used when missing.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

This function is only available if built against libzip ≥ 1.2.0.

### See Also

- ZipArchive::setPassword() - Set the password for the active archive
- ZipArchive::setEncryptionName() - Set the encryption method of an entry defined by its name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setencryptionindex.php
