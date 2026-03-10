# EventBufferEvent::free

Source: https://devdocs.io/php/eventbufferevent.free

(PECL event >= 1.2.6-beta)

EventBufferEvent::free — Free a buffer event

### Description

```
public EventBufferEvent::free(): void
```

Free resources allocated by buffer event.

Usually there is no need to call this method, since normally it is done within internal object destructors. However, sometimes we have a long-time script allocating lots of instances, or a script with a heavy memory usage, where we need to free resources as soon as possible. In such cases EventBufferEvent::free() may be used to protect the script against running up to the memory_limit.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.free.php
