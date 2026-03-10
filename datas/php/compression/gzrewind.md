# gzrewind

Source: https://devdocs.io/php/function.gzrewind

(PHP 4, PHP 5, PHP 7, PHP 8)

gzrewind — Rewind the position of a gz-file pointer

### Description

```
gzrewind(resource $stream): bool
```

Sets the file position indicator of the given gz-file pointer to the beginning of the file stream.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

### Return Values

Returns true on success or false on failure.

### See Also

- gzseek() - Seek on a gz-file pointer
- gztell() - Tell gz-file pointer read/write position

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzrewind.php
