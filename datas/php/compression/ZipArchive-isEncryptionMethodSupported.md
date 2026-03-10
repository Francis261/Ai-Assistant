# ZipArchive::isEncryptionMethodSupported

Source: https://devdocs.io/php/ziparchive.isencryptionmethoddupported

(PHP >= 8.0.0, PECL zip >= 1.19.0)

ZipArchive::isEncryptionMethodSupported — Check if a encryption method is supported by libzip

### Description

```
public static ZipArchive::isEncryptionMethodSupported(int $method, bool $enc = true): bool
```

Check if a compression method is supported by libzip.

### Parameters

The encryption method, one of the ZipArchive::EM_* constants.

If true check for encryption, else check for decryption.

### Return Values

Returns true on success or false on failure.

### Notes

Note:

This function is only available if built against libzip ≥ 1.7.0.

### See Also

- ZipArchive::setEncryptionIndex() - Set the encryption method of an entry defined by its index
- ZipArchive::setEncryptionName() - Set the encryption method of an entry defined by its name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.isencryptionmethoddupported.php
