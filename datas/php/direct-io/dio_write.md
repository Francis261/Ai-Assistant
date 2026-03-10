# dio_write

Source: https://devdocs.io/php/function.dio-write

(PHP 4 >= 4.2.0, PHP 5 < 5.1.0)

dio_write — Writes data to fd with optional truncation at length

### Description

```
dio_write(resource $fd, string $data, int $len = 0): int
```

dio_write() writes up to len bytes from data to file fd.

### Parameters

The file descriptor returned by dio_open().

The written data.

The length of data to write in bytes. If not specified, the function writes all the data to the specified file.

### Return Values

Returns the number of bytes written to fd.

### See Also

- dio_read() - Reads bytes from a file descriptor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dio-write.php
