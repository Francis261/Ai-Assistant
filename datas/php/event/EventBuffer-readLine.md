# EventBuffer::readLine

Source: https://devdocs.io/php/eventbuffer.readline

(PECL event >= 1.2.6-beta)

EventBuffer::readLine — Extracts a line from the front of the buffer

### Description

```
public EventBuffer::readLine( int $eol_style ): string
```

Extracts a line from the front of the buffer and returns it in a newly allocated string. If there is not a whole line to read, the function returns null. The line terminator is not included in the copied string.

### Parameters

One of EventBuffer:EOL_* constants.

### Return Values

On success returns the line read from the buffer, otherwise null.

### See Also

- EventBuffer::copyout() - Copies out specified number of bytes from the front of the buffer
- EventBuffer::drain() - Removes specified number of bytes from the front of the buffer without copying it anywhere
- EventBuffer::pullup() - Linearizes data within buffer and returns it's contents as a string
- EventBuffer::read() - Read data from an evbuffer and drain the bytes read
- EventBuffer::appendFrom() - Moves the specified number of bytes from a source buffer to the end of the current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.readline.php
