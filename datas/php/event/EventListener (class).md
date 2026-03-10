# The EventListener class

Source: https://devdocs.io/php/class.eventlistener

## Introduction

(PECL event >= 1.5.0)

Represents a connection listener.

## Class synopsis

```
public __construct(
  EventBase $base ,
  callable $cb ,
  mixed $data ,
  int $flags ,
  int $backlog ,
  mixed $target 
)
```

```
public disable(): bool
```

```
public enable(): bool
```

```
public getBase(): void
```

```
public static getSocketName( string &$address ,  mixed &$port  = ?): bool
```

```
public setCallback( callable $cb ,  mixed $arg  = null ): void
```

```
public setErrorCallback( string $cb ): void
```

## Properties

Numeric file descriptor of the underlying socket. (Added in event-1.6.0 .)

## Predefined Constants

By default Libevent turns underlying file descriptors, or sockets, to non-blocking mode. This flag tells Libevent to leave them in blocking mode.

If this option is set, the connection listener closes its underlying socket when the EventListener object is freed.

If this option is set, the connection listener sets the close-on-exec flag on the underlying listener socket. See platform documentation for fcntl and FD_CLOEXEC for more information.

By default on some platforms, once a listener socket is closed, no other socket can bind to the same port until a while has passed. Setting this option makes Libevent mark the socket as reusable, so that once it is closed, another socket can be opened to listen on the same port.

Allocate locks for the listener, so that it’s safe to use it from multiple threads.

## Table of Contents

- EventListener::__construct — Creates new connection listener associated with an event base
- EventListener::disable — Disables an event connect listener object
- EventListener::enable — Enables an event connect listener object
- EventListener::getBase — Returns event base associated with the event listener
- EventListener::getSocketName — Retreives the current address to which the listener's socket is bound
- EventListener::setCallback — The setCallback purpose
- EventListener::setErrorCallback — Set event listener's error callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventlistener.php
