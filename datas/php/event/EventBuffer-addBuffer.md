# EventBuffer::addBuffer

Source: https://devdocs.io/php/eventbuffer.addbuffer

(PECL event >= 1.2.6-beta)

EventBuffer::addBuffer — Move all data from a buffer provided to the current instance of EventBuffer

### Description

```
public EventBuffer::addBuffer( EventBuffer $buf ): bool
```

Move all data from the buffer provided in buf parameter to the end of current EventBuffer. This is a destructive add. The data from one buffer moves into the other buffer. However, no unnecessary memory copies occur.

### Parameters

The source EventBuffer object.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBuffer::add() - Append data to the end of an event buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.addbuffer.php
