# EventBuffer::appendFrom

Source: https://devdocs.io/php/eventbuffer.appendfrom

(PECL event >= 1.6.0)

EventBuffer::appendFrom — Moves the specified number of bytes from a source buffer to the end of the current buffer

### Description

```
public EventBuffer::appendFrom( EventBuffer $buf ,  int $len ): int
```

Moves the specified number of bytes from a source buffer to the end of the current buffer. If there are fewer number of bytes, it moves all the bytes available from the source buffer.

### Parameters

Source buffer.

### Return Values

Returns the number of bytes read.

### Changelog

### See Also

- EventBuffer::copyout() - Copies out specified number of bytes from the front of the buffer
- EventBuffer::drain() - Removes specified number of bytes from the front of the buffer without copying it anywhere
- EventBuffer::pullup() - Linearizes data within buffer and returns it's contents as a string
- EventBuffer::readLine() - Extracts a line from the front of the buffer
- EventBuffer::read() - Read data from an evbuffer and drain the bytes read

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.appendfrom.php
