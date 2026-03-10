# EventBuffer::write

Source: https://devdocs.io/php/eventbuffer.write

(PECL event >= 1.6.0)

EventBuffer::write — Write contents of the buffer to a file or socket

### Description

```
public EventBuffer::write( mixed $fd ,  int $howmuch  = ?): int
```

Write contents of the buffer to a file descriptor. The buffer will be drained after the bytes have been successfully written.

### Parameters

Socket resource, stream or numeric file descriptor associated normally associated with a socket.

The maximum number of bytes to write.

### Return Values

Returns the number of bytes written, or false on error.

### See Also

- EventBuffer::read() - Read data from an evbuffer and drain the bytes read

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.write.php
