# ZipArchive::isCompressionMethodSupported

Source: https://devdocs.io/php/ziparchive.iscompressionmethoddupported

(PHP >= 8.0.0, PECL zip >= 1.19.0)

ZipArchive::isCompressionMethodSupported — Check if a compression method is supported by libzip

### Description

```
public static ZipArchive::isCompressionMethodSupported(int $method, bool $enc = true): bool
```

Check if a compression method is supported by libzip.

### Parameters

The compression method, one of the ZipArchive::CM_* constants.

If true check for compression, else check for decompression.

### Return Values

Returns true on success or false on failure.

### Notes

Note:

This function is only available if built against libzip ≥ 1.7.0.

### See Also

- ZipArchive::setCompressionIndex() - Set the compression method of an entry defined by its index
- ZipArchive::setCompressionName() - Set the compression method of an entry defined by its name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.iscompressionmethoddupported.php
