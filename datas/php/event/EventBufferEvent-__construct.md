# EventBufferEvent::__construct

Source: https://devdocs.io/php/eventbufferevent.construct

(PECL event >= 1.2.6-beta)

EventBufferEvent::__construct — Constructs EventBufferEvent object

### Description

```
public EventBufferEvent::__construct(
  EventBase $base ,
  mixed $socket  = null ,
  int $options  = 0 ,
  callable $readcb  = null ,
  callable $writecb  = null ,
  callable $eventcb  = null ,
  mixed $arg  = null 
)
```

Create a buffer event on a socket, stream or a file descriptor. Passing null to socket means that the socket should be created later, e.g. by means of EventBufferEvent::connect().

### Parameters

Event base that should be associated with the new buffer event.

May be created as a stream(not necessarily by means of sockets extension)

One of EventBufferEvent::OPT_* constants, or 0.

Read event callback. See About buffer event callbacks.

Write event callback. See About buffer event callbacks.

Status-change event callback. See About buffer event callbacks.

A variable that will be passed to all the callbacks.

### See Also

- EventBufferEvent::sslFilter() - Create a new SSL buffer event to send its data over another buffer event
- EventBufferEvent::sslSocket() - Creates a new SSL buffer event to send its data over an SSL on a socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.construct.php
