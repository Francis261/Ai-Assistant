# dio_read

Source: https://devdocs.io/php/function.dio-read

(PHP 4 >= 4.2.0, PHP 5 < 5.1.0)

dio_read — Reads bytes from a file descriptor

### Description

```
dio_read(resource $fd, int $len = 1024): string
```

The function dio_read() reads and returns len bytes from file with descriptor fd.

### Parameters

The file descriptor returned by dio_open().

The number of bytes to read. If not specified, dio_read() reads 1K sized block.

### Return Values

The bytes read from fd.

### See Also

- dio_write() - Writes data to fd with optional truncation at length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dio-read.php
