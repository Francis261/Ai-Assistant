# Event::__construct

Source: https://devdocs.io/php/event.construct

(PECL event >= 1.2.6-beta)

Event::__construct — Constructs Event object

### Description

```
public Event::__construct(
  EventBase $base ,
  mixed $fd ,
  int $what ,
  callable $cb ,
  mixed $arg  = NULL 
)
```

Constructs Event object.

### Parameters

The event base to associate with.

stream resource, socket resource, or numeric file descriptor. For timer events pass -1. For signal events pass the signal number, e.g. SIGHUP.

Event flags. See Event flags.

The event callback. See Event callbacks.

Custom data. If specified, it will be passed to the callback when event triggers.

### See Also

- Event::signal() - Constructs signal event object
- Event::timer() - Constructs timer event object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.construct.php
