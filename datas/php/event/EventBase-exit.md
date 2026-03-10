# EventBase::exit

Source: https://devdocs.io/php/eventbase.exit

(PECL event >= 1.2.6-beta)

EventBase::exit — Stop dispatching events

### Description

```
public EventBase::exit( float $timeout  = ?): bool
```

Tells event base to stop optionally after given number of seconds.

### Parameters

Optional number of seconds after which the event base should stop dispatching events.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBase::stop() - Tells event_base to stop dispatching events

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.exit.php
