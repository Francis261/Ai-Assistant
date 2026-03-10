# EventBase::gotExit

Source: https://devdocs.io/php/eventbase.gotexit

(PECL event >= 1.2.6-beta)

EventBase::gotExit — Checks if the event loop was told to exit

### Description

```
public EventBase::gotExit(): bool
```

Checks if the event loop was told to exit by EventBase::exit().

### Parameters

This function has no parameters.

### Return Values

Returns true, event loop was told to exit by EventBase::exit(). Otherwise false.

### See Also

- EventBase::exit() - Stop dispatching events
- EventBase::stop() - Tells event_base to stop dispatching events
- EventBase::gotStop() - Checks if the event loop was told to exit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.gotexit.php
