# The EvFork class

Source: https://devdocs.io/php/class.evfork

## Introduction

(PECL ev >= 0.2.0)

Fork watchers are called when a fork() was detected (usually because whoever signalled libev about it by calling EvLoop::fork() ). The invocation is done before the event loop blocks next and before EvCheck watchers are being called, and only in the child after the fork. Note, that if whoever calling EvLoop::fork() calls it in the wrong process, the fork handlers will be invoked, too.

## Class synopsis

```
final public static createStopped( string $callback ,  string $data  = ?,  string $priority  = ?): object
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

- EvFork::__construct — Constructs the EvFork watcher object
- EvFork::createStopped — Creates a stopped instance of EvFork watcher class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evfork.php
