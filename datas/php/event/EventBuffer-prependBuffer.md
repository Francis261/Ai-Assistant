# EventBuffer::prependBuffer

Source: https://devdocs.io/php/eventbuffer.prependbuffer

(PECL event >= 1.2.6-beta)

EventBuffer::prependBuffer — Moves all data from source buffer to the front of current buffer

### Description

```
public EventBuffer::prependBuffer( EventBuffer $buf ): bool
```

Behaves as EventBuffer::addBuffer(), except that it moves data to the front of the buffer.

### Parameters

Source buffer.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBuffer::add() - Append data to the end of an event buffer
- EventBuffer::addBuffer() - Move all data from a buffer provided to the current instance of EventBuffer
- EventBuffer::prepend() - Prepend data to the front of the buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.prependbuffer.php
