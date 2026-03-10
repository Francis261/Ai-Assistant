# The SyncSemaphore class

Source: https://devdocs.io/php/class.syncsemaphore

## Introduction

(PECL sync >= 1.0.0)

A cross-platform, native implementation of named and unnamed semaphore objects.

A semaphore restricts access to a limited resource to a limited number of instances. Semaphores differ from mutexes in that they can allow more than one instance to access a resource at one time while a mutex only allows one instance at a time.

## Class synopsis

```
public __construct(string $name = ?, int $initialval = 1, bool $autounlock = true)
```

```
public lock(int $wait = -1): bool
```

```
public unlock(int &$prevcount = ?): bool
```

## Table of Contents

- SyncSemaphore::__construct — Constructs a new SyncSemaphore object
- SyncSemaphore::lock — Decreases the count of the semaphore or waits
- SyncSemaphore::unlock — Increases the count of the semaphore

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.syncsemaphore.php
