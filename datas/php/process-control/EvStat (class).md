# The EvStat class

Source: https://devdocs.io/php/class.evstat

## Introduction

(PECL ev >= 0.2.0)

EvStat monitors a file system path for attribute changes. It calls stat() on that path in regular intervals (or when the OS signals it changed) and sees if it changed compared to the last time, invoking the callback if it did.

The path does not need to exist: changing from "path exists" to "path does not exist" is a status change like any other. The condition "path does not exist" is signified by the 'nlink' item being 0(returned by EvStat::attr() method).

The path must not end in a slash or contain special components such as '.' or ... The path should be absolute: if it is relative and the working directory changes, then the behaviour is undefined.

Since there is no portable change notification interface available, the portable implementation simply calls stat() regularly on the path to see if it changed somehow. For this case a recommended polling interval can be specified. If one specifies a polling interval of 0.0 (highly recommended) then a suitable, unspecified default value will be used(which could be expected to be around 5 seconds, although this might change dynamically). libev will also impose a minimum interval which is currently around 0.1, but that’s usually overkill.

This watcher type is not meant for massive numbers of EvStat watchers, as even with OS-supported change notifications, this can be resource-intensive.

## Class synopsis

```
public attr(): array
```

```
final public static createStopped(
  string $path ,
  float $interval ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): void
```

```
public prev(): void
```

```
public set( string $path ,  float $interval ): void
```

```
public stat(): bool
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

Readonly. Hint on how quickly a change is expected to be detected and should normally be specified as 0.0 to let libev choose a suitable value.

Readonly. The path to wait for status changes on.

## Table of Contents

- EvStat::attr — Returns the values most recently detected by Ev
- EvStat::__construct — Constructs EvStat watcher object
- EvStat::createStopped — Create a stopped EvStat watcher object
- EvStat::prev — Returns the previous set of values returned by EvStat::attr
- EvStat::set — Configures the watcher
- EvStat::stat — Initiates the stat call

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evstat.php
