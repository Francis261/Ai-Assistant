# The EvIdle class

Source: https://devdocs.io/php/class.evidle

## Introduction

(PECL ev >= 0.2.0)

EvIdle watchers trigger events when no other events of the same or higher priority are pending ( EvPrepare, EvCheck and other EvIdle watchers do not count as receiving events ).

Thus, as long as the process is busy handling sockets or timeouts(or even signals) of the same or higher priority it will not be triggered. But when the process is in idle(or only lower-priority watchers are pending), the EvIdle watchers are being called once per event loop iteration - until stopped, that is, or the process receives more events and becomes busy again with higher priority stuff.

Apart from keeping the process non-blocking(which is a useful on its own sometimes), EvIdle watchers are a good place to do "pseudo-background processing", or delay processing stuff to after the event loop has handled all outstanding events.

The most noticeable effect is that as long as any idle watchers are active, the process will not block when waiting for new events.

## Class synopsis

```
final public static createStopped( string $callback ,  mixed $data  = ?,  int $priority  = ?): object
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

## Table of Contents

- EvIdle::__construct — Constructs the EvIdle watcher object
- EvIdle::createStopped — Creates instance of a stopped EvIdle watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evidle.php
