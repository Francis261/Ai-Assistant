# EventBuffer::drain

Source: https://devdocs.io/php/eventbuffer.drain

(PECL event >= 1.2.6-beta)

EventBuffer::drain — Removes specified number of bytes from the front of the buffer without copying it anywhere

### Description

```
public EventBuffer::drain( int $len ): bool
```

Behaves as EventBuffer::read(), except that it does not copy the data: it just removes it from the front of the buffer.

### Parameters

The number of bytes to remove from the buffer.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBuffer::read() - Read data from an evbuffer and drain the bytes read
- EventBuffer::appendFrom() - Moves the specified number of bytes from a source buffer to the end of the current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.drain.php
