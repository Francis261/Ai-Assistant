# The EvChild class

Source: https://devdocs.io/php/class.evchild

## Introduction

(PECL ev >= 0.2.0)

EvChild watchers trigger when the process receives a SIGCHLD in response to some child status changes (most typically when a child dies or exits). It is permissible to install an EvChild watcher after the child has been forked(which implies it might have already exited), as long as the event loop isn't entered(or is continued from a watcher), i.e. forking and then immediately registering a watcher for the child is fine, but forking and registering a watcher a few event loop iterations later or in the next callback invocation is not.

It is allowed to register EvChild watchers in the default loop only.

## Class synopsis

```
final public static createStopped(
  int $pid ,
  bool $trace ,
  callable $callback ,
  mixed $data  = ?,
  int $priority  = ?
): object
```

```
public set( int $pid ,  bool $trace ): void
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

Readonly. The process ID this watcher watches out for, or 0, meaning any process ID.

Readonly .The process ID that detected a status change.

Readonly. The process exit status caused by rpid.

## Table of Contents

- EvChild::__construct — Constructs the EvChild watcher object
- EvChild::createStopped — Create instance of a stopped EvCheck watcher
- EvChild::set — Configures the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evchild.php
