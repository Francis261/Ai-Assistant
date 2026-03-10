# EventBuffer::pullup

Source: https://devdocs.io/php/eventbuffer.pullup

(PECL event >= 1.2.6-beta)

EventBuffer::pullup — Linearizes data within buffer and returns it's contents as a string

### Description

```
public EventBuffer::pullup( int $size ): string
```

"Linearizes" the first size bytes of the buffer, copying or moving them as needed to ensure that they are all contiguous and occupying the same chunk of memory. If size is negative, the function linearizes the entire buffer.

Calling EventBuffer::pullup() with a large size can be quite slow, since it potentially needs to copy the entire buffer's contents.

### Parameters

The number of bytes required to be contiguous within the buffer.

### Return Values

If size is greater than the number of bytes in the buffer, the function returns null. Otherwise, EventBuffer::pullup() returns string.

### See Also

- EventBuffer::copyout() - Copies out specified number of bytes from the front of the buffer
- EventBuffer::drain() - Removes specified number of bytes from the front of the buffer without copying it anywhere
- EventBuffer::read() - Read data from an evbuffer and drain the bytes read
- EventBuffer::readLine() - Extracts a line from the front of the buffer
- EventBuffer::appendFrom() - Moves the specified number of bytes from a source buffer to the end of the current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.pullup.php
