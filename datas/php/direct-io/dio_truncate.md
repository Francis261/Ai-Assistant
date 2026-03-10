# dio_truncate

Source: https://devdocs.io/php/function.dio-truncate

(PHP 4 >= 4.2.0, PHP 5 < 5.1.0)

dio_truncate — Truncates file descriptor fd to offset bytes

### Description

```
dio_truncate(resource $fd, int $offset): bool
```

dio_truncate() truncates a file to at most offset bytes in size.

If the file previously was larger than this size, the extra data is lost. If the file previously was shorter, it is unspecified whether the file is left unchanged or is extended. In the latter case the extended part reads as zero bytes.

### Parameters

The file descriptor returned by dio_open().

The offset in bytes.

### Return Values

Returns true on success or false on failure.

### Notes

Note: This function is not implemented on Windows platforms.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dio-truncate.php
