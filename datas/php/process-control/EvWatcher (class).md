# The EvWatcher class

Source: https://devdocs.io/php/class.evwatcher

## Introduction

(PECL ev >= 0.2.0)

EvWatcher is a base class for all watchers( EvCheck, EvChild etc.). Since EvWatcher 's constructor is abstract, one can't(and don't need to) create EvWatcher objects directly.

## Class synopsis

```
public clear(): int
```

```
public feed( int $revents ): void
```

```
public getLoop(): EvLoop
```

```
public invoke( int $revents ): void
```

```
public keepalive( bool $value  = ?): bool
```

```
public setCallback( callable $callback ): void
```

```
public start(): void
```

```
public stop(): void
```

## Properties

Readonly. true if the watcher is active. false otherwise.

User custom data associated with the watcher

Readonly .true if the watcher is pending, i.e. it has outstanding events, but its callback has not yet been invoked. false otherwise. As long, as a watcher is pending(but not active), one must not change its priority.

int between Ev::MINPRI and Ev::MAXPRI. Pending watchers with higher priority will be invoked before watchers with lower priority, but priority will not keep watchers from being executed(except for EvIdle watchers). EvIdle watchers provide functionality to suppress invocation when higher priority events are pending.

## Table of Contents

- EvWatcher::clear — Clear watcher pending status
- EvWatcher::__construct — Abstract constructor of a watcher object
- EvWatcher::feed — Feeds the given revents set into the event loop
- EvWatcher::getLoop — Returns the loop responsible for the watcher
- EvWatcher::invoke — Invokes the watcher callback with the given received events bit mask
- EvWatcher::keepalive — Configures whether to keep the loop from returning
- EvWatcher::setCallback — Sets new callback for the watcher
- EvWatcher::start — Starts the watcher
- EvWatcher::stop — Stops the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evwatcher.php
