# EventBufferEvent::sslSocket

Source: https://devdocs.io/php/eventbufferevent.sslsocket

(PECL event >= 1.2.6-beta)

EventBufferEvent::sslSocket — Creates a new SSL buffer event to send its data over an SSL on a socket

### Description

```
public static EventBufferEvent::sslSocket(
  EventBase $base ,
  mixed $socket ,
  EventSslContext $ctx ,
  int $state ,
  int $options  = ?
): EventBufferEvent
```

Creates a new SSL buffer event to send its data over an SSL on a socket.

### Parameters

Associated event base.

Socket to use for this SSL. Can be stream or socket resource, numeric file descriptor, or null. If socket is null, it is assumed that the file descriptor for the socket will be assigned later, for instance, by means of EventBufferEvent::connectHost() method.

Object of EventSslContext class.

The current state of SSL connection: EventBufferEvent::SSL_OPEN, EventBufferEvent::SSL_ACCEPTING or EventBufferEvent::SSL_CONNECTING.

The buffer event options.

### Return Values

Returns EventBufferEvent object.

### See Also

- EventBufferEvent::sslFilter() - Create a new SSL buffer event to send its data over another buffer event

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.sslsocket.php
