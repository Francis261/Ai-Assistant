# EventBase::loop

Source: https://devdocs.io/php/eventbase.loop

(PECL event >= 1.2.6-beta)

EventBase::loop — Dispatch pending events

### Description

```
public EventBase::loop( int $flags  = ?): bool
```

Wait for events to become active, and run their callbacks.

Do NOT destroy the EventBase object as long as resources of the associated Event objects are not released. Otherwise, it will lead to unpredictable results!

### Parameters

Optional flags. One of EventBase::LOOP_* constants. See EventBase constants.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBase::dispatch() - Dispatch pending events

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.loop.php
