# The EventBase class

Source: https://devdocs.io/php/class.eventbase

## Introduction

(PECL event >= 1.2.6-beta)

EventBase class represents libevent's event base structure. It holds a set of events and can poll to determine which events are active.

Each event base has a method, or a backend that it uses to determine which events are ready. The recognized methods are: select, poll, epoll, kqueue, devpoll, evport and win32.

To configure event base to use, or avoid specific backend EventConfig class can be used.

Do NOT destroy the EventBase object as long as resources of the associated Event objects are not released. Otherwise, it will lead to unpredictable results!

## Class synopsis

```
public __construct( EventConfig $cfg  = ?)
```

```
public dispatch(): void
```

```
public exit( float $timeout  = ?): bool
```

```
public free(): void
```

```
public getFeatures(): int
```

```
public getMethod(): string
```

```
public getTimeOfDayCached(): float
```

```
public gotExit(): bool
```

```
public gotStop(): bool
```

```
public loop( int $flags  = ?): bool
```

```
public priorityInit( int $n_priorities ): bool
```

```
public reInit(): bool
```

```
public stop(): bool
```

## Predefined Constants

Flag used with EventBase::loop() method which means: "block until libevent has an active event, then exit once all active events have had their callbacks run".

Flag used with EventBase::loop() method which means: "do not block: see which events are ready now, run the callbacks of the highest-priority ones, then exit".

Configuration flag. Do not allocate a lock for the event base, even if we have locking set up".

Windows-only configuration flag. Enables the IOCP dispatcher at startup.

Configuration flag. Instead of checking the current time every time the event loop is ready to run timeout callbacks, check after each timeout callback.

If we are using the epoll backend, this flag says that it is safe to use Libevent's internal change-list code to batch up adds and deletes in order to try to do as few syscalls as possible.

Setting this flag can make code run faster, but it may trigger a Linux bug: it is not safe to use this flag if one has any fds cloned by dup(), or its variants. Doing so will produce strange and hard-to-diagnose bugs.

This flag can also be activated by settnig the EVENT_EPOLL_USE_CHANGELIST environment variable.

This flag has no effect if one winds up using a backend other than epoll.

## Table of Contents

- EventBase::__construct — Constructs EventBase object
- EventBase::dispatch — Dispatch pending events
- EventBase::exit — Stop dispatching events
- EventBase::free — Free resources allocated for this event base
- EventBase::getFeatures — Returns bitmask of features supported
- EventBase::getMethod — Returns event method in use
- EventBase::getTimeOfDayCached — Returns the current event base time
- EventBase::gotExit — Checks if the event loop was told to exit
- EventBase::gotStop — Checks if the event loop was told to exit
- EventBase::loop — Dispatch pending events
- EventBase::priorityInit — Sets number of priorities per event base
- EventBase::reInit — Re-initialize event base(after a fork)
- EventBase::stop — Tells event_base to stop dispatching events

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventbase.php
