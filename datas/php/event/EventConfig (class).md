# The EventConfig class

Source: https://devdocs.io/php/class.eventconfig

## Introduction

(PECL event >= 1.2.6-beta)

Represents configuration structure which could be used in construction of the EventBase.

## Class synopsis

```
public avoidMethod( string $method ): bool
```

```
public __construct()
```

```
public requireFeatures( int $feature ): bool
```

```
public setFlags( int $flags ): bool
```

```
public setMaxDispatchInterval( int $max_interval ,  int $max_callbacks ,  int $min_priority ): void
```

## Predefined Constants

Requires a backend method that supports edge-triggered I/O.

Requires a backend method where adding or deleting a single event, or having a single event become active, is an O(1) operation.

Requires a backend method that can support arbitrary file descriptor types, and not just sockets.

## Table of Contents

- EventConfig::avoidMethod — Tells libevent to avoid specific event method
- EventConfig::__construct — Constructs EventConfig object
- EventConfig::requireFeatures — Enters a required event method feature that the application demands
- EventConfig::setFlags — Sets one or more flags to configure the eventual EventBase will be initialized
- EventConfig::setMaxDispatchInterval — Prevents priority inversion

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventconfig.php
