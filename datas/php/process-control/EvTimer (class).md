# The EvTimer class

Source: https://devdocs.io/php/class.evtimer

## Introduction

(PECL ev >= 0.2.0)

EvTimer watchers are simple relative timers that generate an event after a given time, and optionally repeating in regular intervals after that.

The timers are based on real time, that is, if one registers an event that times out after an hour and resets the system clock to January last year, it will still time out after(roughly) one hour. "Roughly" because detecting time jumps is hard, and some inaccuracies are unavoidable.

The callback is guaranteed to be invoked only after its timeout has passed (not at, so on systems with very low-resolution clocks this might introduce a small delay). If multiple timers become ready during the same loop iteration then the ones with earlier time-out values are invoked before ones of the same priority with later time-out values (but this is no longer true when a callback calls EvLoop::run() recursively).

The timer itself will do a best-effort at avoiding drift, that is, if a timer is configured to trigger every 10 seconds, then it will normally trigger at exactly 10 second intervals. If, however, the script cannot keep up with the timer because it takes longer than those 10 seconds to do) the timer will not fire more than once per event loop iteration.

## Class synopsis

```
public again(): void
```

```
final public static createStopped(
  float $after ,
  float $repeat ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvTimer
```

```
public set( float $after ,  float $repeat ): void
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

If repeat is 0.0, then it will automatically be stopped once the timeout is reached. If it is positive, then the timer will automatically be configured to trigger again every repeat seconds later, until stopped manually.

Returns the remaining time until a timer fires. If the timer is active, then this time is relative to the current event loop time, otherwise it's the timeout value currently configured.

That is, after instanciating an EvTimer with an after value of 5.0 and repeat value of 7.0, remaining returns 5.0. When the timer is started and one second passes, remaining will return 4.0. When the timer expires and is restarted, it will return roughly 7.0 (likely slightly less as callback invocation takes some time too), and so on.

## Table of Contents

- EvTimer::again — Restarts the timer watcher
- EvTimer::__construct — Constructs an EvTimer watcher object
- EvTimer::createStopped — Creates EvTimer stopped watcher object
- EvTimer::set — Configures the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evtimer.php
