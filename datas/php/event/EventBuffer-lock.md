# EventBuffer::lock

Source: https://devdocs.io/php/eventbuffer.lock

(PECL event >= 1.2.6-beta)

EventBuffer::lock — Acquires a lock on buffer

### Description

```
public EventBuffer::lock(): void
```

Acquires a lock on buffer. Can be used in pair with EventBuffer::unlock() to make a set of operations atomic, i.e. thread-safe. Note, it is not needed to lock buffers for individual operations. When locking is enabled(see EventBuffer::enableLocking() ), individual operations on event buffers are already atomic.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- EventBuffer::unlock() - Releases lock acquired by EventBuffer::lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.lock.php
