# EventBuffer::prepend

Source: https://devdocs.io/php/eventbuffer.prepend

(PECL event >= 1.2.6-beta)

EventBuffer::prepend — Prepend data to the front of the buffer

### Description

```
public EventBuffer::prepend( string $data ): bool
```

Prepend data to the front of the buffer.

### Parameters

String to be prepended to the front of the buffer.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBuffer::prependBuffer() - Moves all data from source buffer to the front of current buffer
- EventBuffer::add() - Append data to the end of an event buffer
- EventBuffer::addBuffer() - Move all data from a buffer provided to the current instance of EventBuffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.prepend.php
