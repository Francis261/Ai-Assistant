# The EvSignal class

Source: https://devdocs.io/php/class.evsignal

## Introduction

(PECL ev >= 0.2.0)

EvSignal watchers will trigger an event when the process receives a specific signal one or more times. Even though signals are very asynchronous, libev will try its best to deliver signals synchronously, i.e. as part of the normal event processing, like any other event.

There is no limit for the number of watchers for the same signal, but only within the same loop, i.e. one can watch for SIGINT in the default loop and for SIGIO in another loop, but it is not allowed to watch for SIGINT in both the default loop and another loop at the same time. At the moment, SIGCHLD is permanently tied to the default loop.

If possible and supported, libev will install its handlers with SA_RESTART (or equivalent) behaviour enabled, so system calls should not be unduly interrupted. In case of a problem with system calls getting interrupted by signals, all the signals can be blocked in an EvCheck watcher and unblocked in a EvPrepare watcher.

## Class synopsis

```
final public static createStopped(
  int $signum ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvSignal
```

```
public set( int $signum ): void
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

Signal number. See the constants exported by pcntl extension. See also signal(7) man page.

## Table of Contents

- EvSignal::__construct — Constructs EvSignal watcher object
- EvSignal::createStopped — Create stopped EvSignal watcher object
- EvSignal::set — Configures the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evsignal.php
