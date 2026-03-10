# The EvIo class

Source: https://devdocs.io/php/class.evio

## Introduction

(PECL ev >= 0.2.0)

EvIo watchers check whether a file descriptor(or socket, or a stream castable to numeric file descriptor) is readable or writable in each iteration of the event loop, or, more precisely, when reading would not block the process and writing would at least be able to write some data. This behaviour is called level-triggering because events are kept receiving as long as the condition persists. To stop receiving events just stop the watcher.

The number of read and/or write event watchers per fd is unlimited. Setting all file descriptors to non-blocking mode is also usually a good idea(but not required).

Another thing to watch out for is that it is quite easy to receive false readiness notifications, i.e. the callback might be called with Ev::READ but a subsequent read() will actually block because there is no data. It is very easy to get into this situation. Thus it is best to always use non-blocking I/O: An extra read() returning EAGAIN (or similar) is far preferable to a program hanging until some data arrives.

If for some reason it is impossible to run the fd in non-blocking mode, then separately re-test whether a file descriptor is really ready. Some people additionally use SIGALRM and an interval timer, just to be sure thry won't block infinitely.

Always consider using non-blocking mode.

## Class synopsis

```
final public static createStopped(
  mixed $fd ,
  int $events ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvIo
```

```
public set( mixed $fd ,  int $events ): void
```

```
public EvWatcher::clear(): int
```

```
public EvWatcher::feed( int $revents ): void
```

```
public EvWatcher::getLoop(): EvLoop
```

```
public EvWatcher::invoke( int $revents ): void
```

```
public EvWatcher::keepalive( bool $value  = ?): bool
```

```
public EvWatcher::setCallback( callable $callback ): void
```

```
public EvWatcher::start(): void
```

```
public EvWatcher::stop(): void
```

## Properties

## Table of Contents

- EvIo::__construct — Constructs EvIo watcher object
- EvIo::createStopped — Create stopped EvIo watcher object
- EvIo::set — Configures the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evio.php
