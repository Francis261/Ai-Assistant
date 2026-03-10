# The EvLoop class

Source: https://devdocs.io/php/class.evloop

## Introduction

(PECL ev >= 0.2.0)

Represents an event loop that is always distinct from the default loop. Unlike the default loop, it cannot handle EvChild watchers.

Having threads we have to create a loop per thread, and use the default loop in the parent thread.

The default event loop is initialized automatically by Ev. It is accessible via methods of the Ev class, or via EvLoop::defaultLoop() method.

## Class synopsis

```
public backend(): int
```

```
final public check( string $callback ,  string $data  = ?,  string $priority  = ?): EvCheck
```

```
final public child(
  string $pid ,
  string $trace ,
  string $callback ,
  string $data  = ?,
  string $priority  = ?
): EvChild
```

```
public static defaultLoop(
  int $flags  = Ev::FLAG_AUTO ,
  mixed $data  = NULL ,
  float $io_interval  = 0. ,
  float $timeout_interval  = 0. 
): EvLoop
```

```
final public embed(
  string $other ,
  string $callback  = ?,
  string $data  = ?,
  string $priority  = ?
): EvEmbed
```

```
final public fork( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvFork
```

```
final public idle( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvIdle
```

```
public invokePending(): void
```

```
final public io(
  mixed $fd ,
  int $events ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvIo
```

```
public loopFork(): void
```

```
public now(): float
```

```
public nowUpdate(): void
```

```
final public periodic(
  float $offset ,
  float $interval ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvPeriodic
```

```
final public prepare( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvPrepare
```

```
public resume(): void
```

```
public run( int $flags  = 0 ): void
```

```
final public signal(
  int $signum ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvSignal
```

```
final public stat(
  string $path ,
  float $interval ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvStat
```

```
public stop( int $how  = ?): void
```

```
public suspend(): void
```

```
final public timer(
  float $after ,
  float $repeat ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvTimer
```

```
public verify(): void
```

## Properties

Custom data attached to loop

Readonly. The backend flags indicating the event backend in use.

Readonly. true if it is the default event loop.

The current iteration count of the loop. See Ev::iteration()

The number of pending watchers. 0 indicates that there are no watchers pending.

Higher io_interval allows libev to spend more time collecting EvIo events, so more events can be handled per iteration, at the cost of increasing latency. Timeouts (both EvPeriodic and EvTimer) will not be affected. Setting this to a non-zero value will introduce an additional sleep() call into most loop iterations. The sleep time ensures that libev will not poll for EvIo events more often than once per this interval, on average. Many programs can usually benefit by setting the io_interval to a value near 0.1, which is often enough for interactive servers(not for games). It usually doesn't make much sense to set it to a lower value than 0.01, as this approaches the timing granularity of most systems.

See also » FUNCTIONS CONTROLLING EVENT LOOPS.

Higher timeout_interval allows libev to spend more time collecting timeouts, at the expense of increased latency/jitter/inexactness(the watcher callback will be called later). EvIo watchers will not be affected. Setting this to a non-null value will not introduce any overhead in libev. See also » FUNCTIONS CONTROLLING EVENT LOOPS.

The recursion depth. See Ev::depth().

## Table of Contents

- EvLoop::backend — Returns an integer describing the backend used by libev
- EvLoop::check — Creates EvCheck object associated with the current event loop instance
- EvLoop::child — Creates EvChild object associated with the current event loop
- EvLoop::__construct — Constructs the event loop object
- EvLoop::defaultLoop — Returns or creates the default event loop
- EvLoop::embed — Creates an instance of EvEmbed watcher associated with the current EvLoop object
- EvLoop::fork — Creates EvFork watcher object associated with the current event loop instance
- EvLoop::idle — Creates EvIdle watcher object associated with the current event loop instance
- EvLoop::invokePending — Invoke all pending watchers while resetting their pending state
- EvLoop::io — Create EvIo watcher object associated with the current event loop instance
- EvLoop::loopFork — Must be called after a fork
- EvLoop::now — Returns the current "event loop time"
- EvLoop::nowUpdate — Establishes the current time by querying the kernel, updating the time returned by EvLoop::now in the progress
- EvLoop::periodic — Creates EvPeriodic watcher object associated with the current event loop instance
- EvLoop::prepare — Creates EvPrepare watcher object associated with the current event loop instance
- EvLoop::resume — Resume previously suspended default event loop
- EvLoop::run — Begin checking for events and calling callbacks for the loop
- EvLoop::signal — Creates EvSignal watcher object associated with the current event loop instance
- EvLoop::stat — Creates EvStat watcher object associated with the current event loop instance
- EvLoop::stop — Stops the event loop
- EvLoop::suspend — Suspend the loop
- EvLoop::timer — Creates EvTimer watcher object associated with the current event loop instance
- EvLoop::verify — Performs internal consistency checks(for debugging)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evloop.php
