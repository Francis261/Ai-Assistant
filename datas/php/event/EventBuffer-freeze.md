# EventBuffer::freeze

Source: https://devdocs.io/php/eventbuffer.freeze

(PECL event >= 1.2.6-beta)

EventBuffer::freeze — Prevent calls that modify an event buffer from succeeding

### Description

```
public EventBuffer::freeze( bool $at_front ): bool
```

Prevent calls that modify an event buffer from succeeding

### Parameters

Whether to disable changes to the front or end of the buffer.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBuffer::unfreeze() - Re-enable calls that modify an event buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.freeze.php
