# The Event class

Source: https://devdocs.io/php/class.event

## Introduction

(PECL event >= 1.2.6-beta)

Event class represents and event firing on a file descriptor being ready to read from or write to; a file descriptor becoming ready to read from or write to(edge-triggered I/O only); a timeout expiring; a signal occurring; a user-triggered event.

Every event is associated with EventBase. However, event will never fire until it is added (via Event::add() ). An added event remains in pending state until the registered event occurs, thus turning it to active state. To handle events user may register a callback which is called when event becomes active. If event is configured persistent, it remains pending. If it is not persistent, it stops being pending when it's callback runs. Event::del() method deletes event, thus making it non-pending. By means of Event::add() method it could be added again.

## Class synopsis

```
public add( float $timeout  = ?): bool
```

```
public __construct(
  EventBase $base ,
  mixed $fd ,
  int $what ,
  callable $cb ,
  mixed $arg  = NULL 
)
```

```
public del(): bool
```

```
public free(): void
```

```
public static getSupportedMethods(): array
```

```
public pending( int $flags ): bool
```

```
public set(
  EventBase $base ,
  mixed $fd ,
  int $what  = ?,
  callable $cb  = ?,
  mixed $arg  = ?
): bool
```

```
public setPriority( int $priority ): bool
```

```
public setTimer( EventBase $base ,  callable $cb ,  mixed $arg  = ?): bool
```

```
public static signal(
  EventBase $base ,
  int $signum ,
  callable $cb ,
  mixed $arg  = ?
): Event
```

```
public static timer( EventBase $base ,  callable $cb ,  mixed $arg  = ?): Event
```

## Properties

Whether event is pending. See About event persistence.

## Predefined Constants

Indicates that the event should be edge-triggered, if the underlying event base backend supports edge-triggered events. This affects the semantics of Event::READ and Event::WRITE.

Indicates that the event is persistent. See About event persistence.

This flag indicates an event that becomes active when the provided file descriptor(usually a stream resource, or socket) is ready for reading.

This flag indicates an event that becomes active when the provided file descriptor(usually a stream resource, or socket) is ready for reading.

Used to implement signal detection. See "Constructing signal events" below.

This flag indicates an event that becomes active after a timeout elapses.

The Event::TIMEOUT flag is ignored when constructing an event: one can either set a timeout when event is added, or not. It is set in the $what argument to the callback function when a timeout has occurred.

## Table of Contents

- Event::add — Makes event pending
- Event::addSignal — Alias of Event::add
- Event::addTimer — Alias of Event::add
- Event::__construct — Constructs Event object
- Event::del — Makes event non-pending
- Event::delSignal — Alias of Event::del
- Event::delTimer — Alias of Event::del
- Event::free — Make event non-pending and free resources allocated for this event
- Event::getSupportedMethods — Returns array with of the names of the methods supported in this version of Libevent
- Event::pending — Detects whether event is pending or scheduled
- Event::set — Re-configures event
- Event::setPriority — Set event priority
- Event::setTimer — Re-configures timer event
- Event::signal — Constructs signal event object
- Event::timer — Constructs timer event object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.event.php
