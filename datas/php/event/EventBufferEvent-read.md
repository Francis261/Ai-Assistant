# EventBufferEvent::read

Source: https://devdocs.io/php/eventbufferevent.read

(PECL event >= 1.2.6-beta)

EventBufferEvent::read — Read buffer's data

### Description

```
public EventBufferEvent::read( int $size ): string
```

Removes up to size bytes from the input buffer. Returns a string of data read from the input buffer.

### Parameters

Maximum number of bytes to read

### Return Values

Returns string of data read from the input buffer.

### See Also

- EventBufferEvent::readBuffer() - Drains the entire contents of the input buffer and places them into buf

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.read.php
