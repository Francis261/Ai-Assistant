# The EvEmbed class

Source: https://devdocs.io/php/class.evembed

## Introduction

(PECL ev >= 0.2.0)

Used to embed one event loop into another.

## Class synopsis

```
final public static createStopped(
  object $other ,
  callable $callback  = ?,
  mixed $data  = ?,
  int $priority  = ?
): void
```

```
public set( object $other ): void
```

```
public sweep(): void
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

## Table of Contents

- EvEmbed::__construct — Constructs the EvEmbed object
- EvEmbed::createStopped — Create stopped EvEmbed watcher object
- EvEmbed::set — Configures the watcher
- EvEmbed::sweep — Make a single, non-blocking sweep over the embedded loop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.evembed.php
