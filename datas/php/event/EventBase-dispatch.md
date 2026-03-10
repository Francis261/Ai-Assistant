# EventBase::dispatch

Source: https://devdocs.io/php/eventbase.dispatch

(PECL event >= 1.2.6-beta)

EventBase::dispatch — Dispatch pending events

### Description

```
public EventBase::dispatch(): void
```

Wait for events to become active, and run their callbacks. The same as EventBase::loop() with no flags set.

Do NOT destroy the EventBase object as long as resources of the associated Event objects are not released. Otherwise, it will lead to unpredictable results!

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBase::loop() - Dispatch pending events

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.dispatch.php
