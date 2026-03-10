# Event::set

Source: https://devdocs.io/php/event.set

(PECL event >= 1.2.6-beta)

Event::set — Re-configures event

### Description

```
public Event::set(
  EventBase $base ,
  mixed $fd ,
  int $what  = ?,
  callable $cb  = ?,
  mixed $arg  = ?
): bool
```

Re-configures event. Note, this function doesn't invoke obsolete libevent's event_set. It calls event_assign instead.

### Parameters

The event base to associate the event with.

Stream resource, socket resource, or numeric file descriptor. For timer events pass -1. For signal events pass the signal number, e.g. SIGHUP.

See Event flags.

The event callback. See Event callbacks.

Custom data associated with the event. It will be passed to the callback when the event becomes active.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.set.php
