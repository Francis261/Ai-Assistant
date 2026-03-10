# stream_get_line

Source: https://devdocs.io/php/function.stream-get-line

(PHP 5, PHP 7, PHP 8)

stream_get_line — Gets line from stream resource up to a given delimiter

### Description

```
stream_get_line(resource $stream, int $length, string $ending = ""): string|false
```

Gets a line from the given handle.

Reading ends when length bytes have been read, when the non-empty string specified by ending is found (which is not included in the return value), or on EOF (whichever comes first).

This function is nearly identical to fgets() except in that it allows end of line delimiters other than the standard \n, \r, and \r\n, and does not return the delimiter itself.

### Parameters

A valid file handle.

The maximum number of bytes to read from the handle. Negative values are not supported. Zero (0) means the default socket chunk size, i.e. 8192 bytes.

An optional string delimiter.

### Return Values

Returns a string of up to length bytes read from the file pointed to by stream, or false on failure.

### See Also

- fread() - Binary-safe file read
- fgets() - Gets line from file pointer
- fgetc() - Gets character from file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-get-line.php
