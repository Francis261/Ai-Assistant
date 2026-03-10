# EventBuffer::enableLocking

Source: https://devdocs.io/php/eventbuffer.enablelocking

(PECL event >= 1.2.6-beta)

EventBuffer::enableLocking —

### Description

```
public EventBuffer::enableLocking(): void
```

Enable locking on an EventBuffer so that it can safely be used by multiple threads at the same time. When locking is enabled, the lock will be held when callbacks are invoked. This could result in deadlock if you aren't careful. Plan accordingly!

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- » Evbuffers and Thread-safety

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.enablelocking.php
