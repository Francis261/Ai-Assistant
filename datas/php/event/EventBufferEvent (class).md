# The EventBufferEvent class

Source: https://devdocs.io/php/class.eventbufferevent

## Introduction

(PECL event >= 1.2.6-beta)

Represents Libevent's buffer event.

Usually an application wants to perform some amount of data buffering in addition to just responding to events. When we want to write data, for example, the usual pattern looks like:

1. Decide that we want to write some data to a connection; put that data in a buffer.
2. Wait for the connection to become writable
3. Write as much of the data as we can
4. Remember how much we wrote, and if we still have more data to write, wait for the connection to become writable again.

Decide that we want to write some data to a connection; put that data in a buffer.

Wait for the connection to become writable

Write as much of the data as we can

Remember how much we wrote, and if we still have more data to write, wait for the connection to become writable again.

This buffered I/O pattern is common enough that Libevent provides a generic mechanism for it. A "buffer event" consists of an underlying transport (like a socket), a read buffer, and a write buffer. Instead of regular events, which give callbacks when the underlying transport is ready to be read or written, a buffer event invokes its user-supplied callbacks when it has read or written enough data.

## Class synopsis

```
public close(): void
```

```
public connect( string $addr ): bool
```

```
public connectHost(
  EventDnsBase $dns_base ,
  string $hostname ,
  int $port ,
  int $family  = EventUtil::AF_UNSPEC 
): bool
```

```
public __construct(
  EventBase $base ,
  mixed $socket  = null ,
  int $options  = 0 ,
  callable $readcb  = null ,
  callable $writecb  = null ,
  callable $eventcb  = null ,
  mixed $arg  = null 
)
```

```
public static createPair( EventBase $base ,  int $options  = 0 ): array
```

```
public disable( int $events ): bool
```

```
public enable( int $events ): bool
```

```
public free(): void
```

```
public getDnsErrorString(): string
```

```
public getEnabled(): int
```

```
public getInput(): EventBuffer
```

```
public getOutput(): EventBuffer
```

```
public read( int $size ): string
```

```
public readBuffer( EventBuffer $buf ): bool
```

```
public setCallbacks(
  callable $readcb ,
  callable $writecb ,
  callable $eventcb ,
  mixed $arg  = ?
): void
```

```
public setPriority( int $priority ): bool
```

```
public setTimeouts( float $timeout_read ,  float $timeout_write ): bool
```

```
public setWatermark( int $events ,  int $lowmark ,  int $highmark ): void
```

```
public sslError(): string
```

```
public static sslFilter(
  EventBase $base ,
  EventBufferEvent $underlying ,
  EventSslContext $ctx ,
  int $state ,
  int $options  = 0 
): EventBufferEvent
```

```
public sslGetCipherInfo(): string
```

```
public sslGetCipherName(): string
```

```
public sslGetCipherVersion(): string
```

```
public sslGetProtocol(): string
```

```
public sslRenegotiate(): void
```

```
public static sslSocket(
  EventBase $base ,
  mixed $socket ,
  EventSslContext $ctx ,
  int $state ,
  int $options  = ?
): EventBufferEvent
```

```
public write( string $data ): bool
```

```
public writeBuffer( EventBuffer $buf ): bool
```

## Properties

Numeric file descriptor associated with the buffer event. Normally represents a bound socket. Equals to null, if there is no file descriptor(socket) associated with the buffer event.

The priority of the events used to implement the buffer event.

Underlying input buffer object( EventBuffer)

Underlying output buffer object( EventBuffer)

## Predefined Constants

An event occurred during a read operation on the bufferevent. See the other flags for which event it was.

An event occurred during a write operation on the bufferevent. See the other flags for which event it was.

Got an end-of-file indication on the buffer event.

An error occurred during a bufferevent operation. For more information on what the error was, call EventUtil::getLastSocketErrno() and/or EventUtil::getLastSocketError().

Finished a requested connection on the bufferevent.

When the buffer event is freed, close the underlying transport. This will close an underlying socket, free an underlying buffer event, etc.

Automatically allocate locks for the bufferevent, so that it’s safe to use from multiple threads.

When this flag is set, the bufferevent defers all of its callbacks. See » Fast portable non-blocking network programming with Libevent, Deferred callbacks.

By default, when the bufferevent is set up to be threadsafe, the buffer event’s locks are held whenever the any user-provided callback is invoked. Setting this option makes Libevent release the buffer event’s lock when it’s invoking the callbacks.

The SSL handshake is done

SSL is currently performing negotiation as a client

SSL is currently performing negotiation as a server

## Table of Contents

- EventBufferEvent::close — Closes file descriptor associated with the current buffer event
- EventBufferEvent::connect — Connect buffer event's file descriptor to given address or UNIX socket
- EventBufferEvent::connectHost — Connects to a hostname with optionally asyncronous DNS resolving
- EventBufferEvent::__construct — Constructs EventBufferEvent object
- EventBufferEvent::createPair — Creates two buffer events connected to each other
- EventBufferEvent::disable — Disable events read, write, or both on a buffer event
- EventBufferEvent::enable — Enable events read, write, or both on a buffer event
- EventBufferEvent::free — Free a buffer event
- EventBufferEvent::getDnsErrorString — Returns string describing the last failed DNS lookup attempt
- EventBufferEvent::getEnabled — Returns bitmask of events currently enabled on the buffer event
- EventBufferEvent::getInput — Returns underlying input buffer associated with current buffer event
- EventBufferEvent::getOutput — Returns underlying output buffer associated with current buffer event
- EventBufferEvent::read — Read buffer's data
- EventBufferEvent::readBuffer — Drains the entire contents of the input buffer and places them into buf
- EventBufferEvent::setCallbacks — Assigns read, write and event(status) callbacks
- EventBufferEvent::setPriority — Assign a priority to a bufferevent
- EventBufferEvent::setTimeouts — Set the read and write timeout for a buffer event
- EventBufferEvent::setWatermark — Adjusts read and/or write watermarks
- EventBufferEvent::sslError — Returns most recent OpenSSL error reported on the buffer event
- EventBufferEvent::sslFilter — Create a new SSL buffer event to send its data over another buffer event
- EventBufferEvent::sslGetCipherInfo — Returns a textual description of the cipher
- EventBufferEvent::sslGetCipherName — Returns the current cipher name of the SSL connection
- EventBufferEvent::sslGetCipherVersion — Returns version of cipher used by current SSL connection
- EventBufferEvent::sslGetProtocol — Returns the name of the protocol used for current SSL connection
- EventBufferEvent::sslRenegotiate — Tells a bufferevent to begin SSL renegotiation
- EventBufferEvent::sslSocket — Creates a new SSL buffer event to send its data over an SSL on a socket
- EventBufferEvent::write — Adds data to a buffer event's output buffer
- EventBufferEvent::writeBuffer — Adds contents of the entire buffer to a buffer event's output buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventbufferevent.php
