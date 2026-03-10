# Event::signal

Source: https://devdocs.io/php/event.signal

(PECL event >= 1.2.6-beta)

Event::signal — Constructs signal event object

### Description

```
public static Event::signal(
  EventBase $base ,
  int $signum ,
  callable $cb ,
  mixed $arg  = ?
): Event
```

Constructs signal event object. This is a straightforward method to create a signal event. Note, the generic Event::__construct() method can contruct signal event objects too.

### Parameters

The associated event base object.

The signal number.

The signal event callback. See Event callbacks.

Custom data. If specified, it will be passed to the callback when event triggers.

### Return Values

Returns Event object on success. Otherwise false.

### See Also

- Constructing signal events

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.signal.php
