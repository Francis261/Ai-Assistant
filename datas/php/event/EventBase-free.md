# EventBase::free

Source: https://devdocs.io/php/eventbase.free

(PECL event >= 1.10.0)

EventBase::free — Free resources allocated for this event base

### Description

```
public EventBase::free(): void
```

Deallocates resources allocated by libevent for the EventBase object.

The EventBase::free() method doesn't destruct the object itself. To destruct the object completely call unset(), or assign null.

This method does not deallocate or detach any of the events that are currently associated with the EventBase object, or close any of their sockets - beware.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- EventBase::__construct() - Constructs EventBase object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.free.php
