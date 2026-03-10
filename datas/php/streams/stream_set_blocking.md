# stream_set_blocking

Source: https://devdocs.io/php/function.stream-set-blocking

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_set_blocking — Set blocking/non-blocking mode on a stream

### Description

```
stream_set_blocking(resource $stream, bool $enable): bool
```

Sets blocking or non-blocking mode on a stream.

This function works for any stream that supports non-blocking mode (currently, regular files and socket streams).

### Parameters

The stream.

If enable is false, the given stream will be switched to non-blocking mode, and if true, it will be switched to blocking mode. This affects calls like fgets() and fread() that read from the stream. In non-blocking mode an fgets() call will always return right away while in blocking mode it will wait for data to become available on the stream.

### Return Values

Returns true on success or false on failure.

### Notes

Note:

On Windows, this has no affect on local files. Non-blocking IO for local files is not supported on Windows.

### See Also

- stream_select() - Runs the equivalent of the select() system call on the given arrays of streams with a timeout specified by seconds and microseconds

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-set-blocking.php
