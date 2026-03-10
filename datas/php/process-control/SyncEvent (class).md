# The SyncEvent class

Source: https://devdocs.io/php/class.syncevent

## Introduction

(PECL sync >= 1.0.0)

A cross-platform, native implementation of named and unnamed event objects. Both automatic and manual event objects are supported.

An event object waits, without polling, for the object to be fired/set. One instance waits on the event object while another instance fires/sets the event. Event objects are useful wherever a long-running process would otherwise poll a resource (e.g. checking to see if uploaded data needs to be processed).

## Class synopsis

```
public __construct(string $name = ?, bool $manual = false, bool $prefire = false)
```

```
public fire(): bool
```

```
public reset(): bool
```

```
public wait(int $wait = -1): bool
```

## Table of Contents

- SyncEvent::__construct — Constructs a new SyncEvent object
- SyncEvent::fire — Fires/sets the event
- SyncEvent::reset — Resets a manual event
- SyncEvent::wait — Waits for the event to be fired/set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.syncevent.php
