# EventBuffer::expand

Source: https://devdocs.io/php/eventbuffer.expand

(PECL event >= 1.2.6-beta)

EventBuffer::expand — Reserves space in buffer

### Description

```
public EventBuffer::expand( int $len ): bool
```

Alters the last chunk of memory in the buffer, or adds a new chunk, such that the buffer is now large enough to contain len bytes without any further allocations.

### Parameters

The number of bytes to reserve for the buffer

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.expand.php
