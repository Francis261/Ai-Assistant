# Event::setTimer

Source: https://devdocs.io/php/event.settimer

(PECL event >= 1.2.6-beta)

Event::setTimer — Re-configures timer event

### Description

```
public Event::setTimer( EventBase $base ,  callable $cb ,  mixed $arg  = ?): bool
```

Re-configures timer event. Note, this function doesn't invoke obsolete libevent's event_set. It calls event_assign instead.

### Parameters

The event base to associate with.

The timer event callback. See Event callbacks.

Custom data. If specified, it will be passed to the callback when event triggers.

### Return Values

Returns true on success or false on failure.

### See Also

- Event::__construct() - Constructs Event object
- Event::timer() - Constructs timer event object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.settimer.php
