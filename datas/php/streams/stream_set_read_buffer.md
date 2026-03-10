# stream_set_read_buffer

Source: https://devdocs.io/php/function.stream-set-read-buffer

(PHP 5 >= 5.3.3, PHP 7, PHP 8)

stream_set_read_buffer — Set read file buffering on the given stream

### Description

```
stream_set_read_buffer(resource $stream, int $size): int
```

Sets the read buffer. It's the equivalent of stream_set_write_buffer(), but for read operations.

### Parameters

The file pointer.

The number of bytes to buffer. If size is 0 then read operations are unbuffered. This ensures that all reads with fread() are completed before other processes are allowed to read from that input stream.

### Return Values

Returns 0 on success, or another value if the request cannot be honored.

### See Also

- stream_set_write_buffer() - Sets write file buffering on the given stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-set-read-buffer.php
