# EventBuffer::read

Source: https://devdocs.io/php/eventbuffer.read

(PECL event >= 1.6.0)

EventBuffer::read — Read data from an evbuffer and drain the bytes read

### Description

```
public EventBuffer::read( int $max_bytes ): string
```

Read the first max_bytes from the buffer and drain the bytes read. If more max_bytes are requested than are available in the buffer, it only extracts as many bytes as available.

### Parameters

Maxmimum number of bytes to read from the buffer.

### Return Values

Returns string read, or false on failure.

### Changelog

### See Also

- EventBuffer::copyout() - Copies out specified number of bytes from the front of the buffer
- EventBuffer::drain() - Removes specified number of bytes from the front of the buffer without copying it anywhere
- EventBuffer::pullup() - Linearizes data within buffer and returns it's contents as a string
- EventBuffer::readLine() - Extracts a line from the front of the buffer
- EventBuffer::appendFrom() - Moves the specified number of bytes from a source buffer to the end of the current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.read.php
