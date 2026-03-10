# The Ev class

Source: https://devdocs.io/php/class.ev

## Introduction

(PECL ev >= 0.2.0)

Ev is a static class providing access to the default loop and to some common operations.

## Class synopsis

```
final public static backend(): int
```

```
final public static depth(): int
```

```
final public static embeddableBackends(): int
```

```
final public static feedSignal( int $signum ): void
```

```
final public static feedSignalEvent( int $signum ): void
```

```
final public static iteration(): int
```

```
final public static now(): float
```

```
final public static nowUpdate(): void
```

```
final public static recommendedBackends(): int
```

```
final public static resume(): void
```

```
final public static run( int $flags  = ?): void
```

```
final public static sleep( float $seconds ): void
```

```
final public static stop( int $how  = ?): void
```

```
final public static supportedBackends(): int
```

```
final public static suspend(): void
```

```
final public static time(): float
```

```
final public static verify(): void
```

## Predefined Constants

Flags passed to create a loop:

The default flags value

If this flag used(or the program runs setuid or setgid), libev won't look at the environment variable LIBEV_FLAGS. Otherwise(by default), LIBEV_FLAGS will override the flags completely if it is found. Useful for performance tests and searching for bugs.

Makes libev check for a fork in each iteration, instead of calling EvLoop::fork() manually. This works by calling getpid() on every iteration of the loop, and thus this might slow down the event loop with lots of loop iterations, but usually is not noticeable. This flag setting cannot be overridden or specified in the LIBEV_FLAGS environment variable.

When this flag is specified, libev won't attempt to use the inotify API for its » ev_stat watchers. The flag can be useful to conserve inotify file descriptors, as otherwise each loop using ev_stat watchers consumes one inotify handle.

When this flag is specified, libev will attempt to use the signalfd API for its » ev_signal (and » ev_child) watchers. This API delivers signals synchronously, which makes it both faster and might make it possible to get the queued signal data. It can also simplify signal handling with threads, as long as signals are properly blocked in threads. Signalfd will not be used by default.

When this flag is specified, libev will avoid to modify the signal mask. Specifically, this means having to make sure signals are unblocked before receiving them.

This behaviour is useful for custom signal handling, or handling signals only in specific threads.

Flags passed to Ev::run(), or EvLoop::run()

Means that event loop will look for new events, will handle those events and any already outstanding ones, but will not wait and block the process in case there are no events and will return after one iteration of the loop. This is sometimes useful to poll and handle new events while doing lengthy calculations, to keep the program responsive.

Means that event loop will look for new events (waiting if necessary) and will handle those and any already outstanding ones. It will block the process until at least one new event arrives (which could be an event internal to libev itself, so there is no guarantee that a user-registered callback will be called), and will return after one iteration of the loop.

Flags passed to Ev::stop(), or EvLoop::stop()

Cancel the break operation.

Makes the innermost Ev::run() (or EvLoop::run()) call return.

Makes all nested Ev::run() (or EvLoop::run()) calls return.

Watcher priorities:

Minimum allowed watcher priority.

Maximum allowed watcher priority.

Bit masks of (received) events:

The file descriptor in the EvIo watcher has become readable.

The file descriptor in the EvIo watcher has become writable.

EvTimer watcher has been timed out.

EvPeriodic watcher has been timed out.

A signal specified in EvSignal::__construct() has been received.

The pid specified in EvChild::__construct() has received a status change.

The path specified in EvStat watcher changed its attributes.

EvIdle watcher works when there is nothing to do with other watchers.

All EvPrepare watchers are invoked just before Ev::run() starts. Thus, EvPrepare watchers are the last watchers invoked before the event loop sleeps or polls for new events.

All EvCheck watchers are queued just after Ev::run() has gathered the new events, but before it queues any callbacks for any received events. Thus, EvCheck watchers will be invoked before any other watchers of the same or lower priority within an event loop iteration.

The embedded event loop specified in the EvEmbed watcher needs attention.

Not ever sent(or otherwise used) by libev itself, but can be freely used by libev users to signal watchers (e.g. via EvWatcher::feed() ).

An unspecified error has occurred, the watcher has been stopped. This might happen because the watcher could not be properly started because libev ran out of memory, a file descriptor was found to be closed or any other problem. Libev considers these application bugs. See also » ANATOMY OF A WATCHER

Backend flags:

select(2) backend

poll(2) backend

Linux-specific epoll(7) backend for both pre- and post-2.6.9 kernels

kqueue backend used on most BSD systems. EvEmbed watcher could be used to embed one loop(with kqueue backend) into another. For instance, one can try to create an event loop with kqueue backend and use it for sockets only.

Solaris 8 backend. This is not implemented yet.

Solaris 10 event port mechanism with a good scaling.

Try all backends(even currupted ones). It's not recommended to use it explicitly. Bitwise operators should be applied here(e.g. Ev::BACKEND_ALL & ~ Ev::BACKEND_KQUEUE) Use Ev::recommendedBackends(), or don't specify any backends at all.

Not a backend, but a mask to select all backend bits from flags value to mask out any backends(e.g. when modifying the LIBEV_FLAGS environment variable).

Note:

For the default loop during module initialization phase Ev registers » ev_loop_fork call by means of pthread_atfork (if available).

Note:

There are methods providing access to the default event loop in Ev class(e.g. Ev::iteration(), Ev::depth() etc.) For custom loops (created with EvLoop::__construct()) these values may be accessed via corresponding properties and methods of the EvLoop class.

The instance of the default event loop itself can be fetched by means of EvLoop::defaultLoop() method.

## Table of Contents

- Ev::backend — Returns an integer describing the backend used by libev
- Ev::depth — Returns recursion depth
- Ev::embeddableBackends — Returns the set of backends that are embeddable in other event loops
- Ev::feedSignal — Feed a signal event info Ev
- Ev::feedSignalEvent — Feed signal event into the default loop
- Ev::iteration — Return the number of times the default event loop has polled for new events
- Ev::now — Returns the time when the last iteration of the default event loop has started
- Ev::nowUpdate — Establishes the current time by querying the kernel, updating the time returned by Ev::now in the progress
- Ev::recommendedBackends — Returns a bit mask of recommended backends for current platform
- Ev::resume — Resume previously suspended default event loop
- Ev::run — Begin checking for events and calling callbacks for the default loop
- Ev::sleep — Block the process for the given number of seconds
- Ev::stop — Stops the default event loop
- Ev::supportedBackends — Returns the set of backends supported by current libev configuration
- Ev::suspend — Suspend the default event loop
- Ev::time — Returns the current time in fractional seconds since the epoch
- Ev::verify — Performs internal consistency checks(for debugging)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ev.php
