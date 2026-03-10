# The EvCheck class

Source: https://devdocs.io/php/class.evcheck

## Introduction

(PECL ev >= 0.2.0)

EvPrepare and EvCheck watchers are usually used in pairs. EvPrepare watchers get invoked before the process blocks, EvCheck afterwards.

It is not allowed to call EvLoop::run() or similar methods or functions that enter the current event loop from either EvPrepare or EvCheck watchers. Other loops than the current one are fine, however. The rationale behind this is that one don't need to check for recursion in those watchers, i.e. the sequence will always be: EvPrepare -> blocking -> EvCheck, so having a watcher of each kind they will always be called in pairs bracketing the blocking call.

The main purpose is to integrate other event mechanisms into libev and their use is somewhat advanced. They could be used, for example, to track variable changes, implement custom watchers, integrate net-snmp or a coroutine library and lots more. They are also occasionally useful to cache some data and want to flush it before blocking.

It is recommended to give EvCheck watchers highest( Ev::MAXPRI) priority, to ensure that they are being run before any other watchers after the poll (this doesn’t matter for EvPrepare watchers).

Also, EvCheck watchers should not activate/feed events. While libev fully supports this, they might get executed before other EvCheck watchers did their job.

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

- EvCheck::__construct — Constructs the EvCheck watcher object
- EvCheck::createStopped — Create instance of a stopped EvCheck watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evcheck.php
