# EventBufferEvent::setCallbacks

Source: https://devdocs.io/php/eventbufferevent.setcallbacks

(PECL event >= 1.2.6-beta)

EventBufferEvent::setCallbacks — Assigns read, write and event(status) callbacks

### Description

```
public EventBufferEvent::setCallbacks(
  callable $readcb ,
  callable $writecb ,
  callable $eventcb ,
  mixed $arg  = ?
): void
```

Assigns read, write and event(status) callbacks.

### Parameters

Read event callback. See About buffer event callbacks.

Write event callback. See About buffer event callbacks.

Status-change event callback. See About buffer event callbacks.

A variable that will be passed to all the callbacks.

### Return Values

No value is returned.

### See Also

- EventBufferEvent::__construct() - Constructs EventBufferEvent object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.setcallbacks.php
