# EventBuffer::unfreeze

Source: https://devdocs.io/php/eventbuffer.unfreeze

(PECL event >= 1.2.6-beta)

EventBuffer::unfreeze — Re-enable calls that modify an event buffer

### Description

```
public EventBuffer::unfreeze( bool $at_front ): bool
```

Re-enable calls that modify an event buffer.

### Parameters

Whether to enable events at the front or at the end of the buffer.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBuffer::freeze() - Prevent calls that modify an event buffer from succeeding

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.unfreeze.php
