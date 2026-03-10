# gztell

Source: https://devdocs.io/php/function.gztell

(PHP 4, PHP 5, PHP 7, PHP 8)

gztell — Tell gz-file pointer read/write position

### Description

```
gztell(resource $stream): int|false
```

Gets the position of the given file pointer; i.e., its offset into the uncompressed file stream.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

### Return Values

The position of the file pointer or false if an error occurs.

### See Also

- gzopen() - Open gz-file
- gzseek() - Seek on a gz-file pointer
- gzrewind() - Rewind the position of a gz-file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gztell.php
