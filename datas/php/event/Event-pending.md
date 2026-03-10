# Event::pending

Source: https://devdocs.io/php/event.pending

(PECL event >= 1.2.6-beta)

Event::pending — Detects whether event is pending or scheduled

### Description

```
public Event::pending( int $flags ): bool
```

Detects whether event is pending or scheduled

### Parameters

One of, or a composition of the following constants: Event::READ, Event::WRITE, Event::TIMEOUT, Event::SIGNAL.

### Return Values

Returns true if event is pending or scheduled. Otherwise false.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.pending.php
