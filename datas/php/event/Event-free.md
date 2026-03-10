# Event::free

Source: https://devdocs.io/php/event.free

(PECL event >= 1.2.6-beta)

Event::free — Make event non-pending and free resources allocated for this event

### Description

```
public Event::free(): void
```

Removes event from the list of events monitored by libevent, and free resources allocated for the event.

The Event::free() method currently doesn't destruct the object itself. To destruct the object completely call unset(), or assign null.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- Event::__construct() - Constructs Event object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.free.php
