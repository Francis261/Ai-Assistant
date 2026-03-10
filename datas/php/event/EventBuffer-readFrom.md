# EventBuffer::readFrom

Source: https://devdocs.io/php/eventbuffer.readfrom

(PECL event >= 1.7.0)

EventBuffer::readFrom — Read data from a file onto the end of the buffer

### Description

```
public EventBuffer::read( mixed $fd ,  int $howmuch ): int
```

Read data from the file specified by fd onto the end of the buffer.

### Parameters

Socket resource, stream, or numeric file descriptor.

Maxmimum number of bytes to read.

### Return Values

Returns the number of bytes read, or false on failure.

### See Also

- EventBuffer::copyout() - Copies out specified number of bytes from the front of the buffer
- EventBuffer::drain() - Removes specified number of bytes from the front of the buffer without copying it anywhere
- EventBuffer::pullup() - Linearizes data within buffer and returns it's contents as a string
- EventBuffer::readLine() - Extracts a line from the front of the buffer
- EventBuffer::appendFrom() - Moves the specified number of bytes from a source buffer to the end of the current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.readfrom.php
