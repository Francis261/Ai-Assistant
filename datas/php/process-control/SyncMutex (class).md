# The SyncMutex class

Source: https://devdocs.io/php/class.syncmutex

## Introduction

(PECL sync >= 1.0.0)

A cross-platform, native implementation of named and unnamed countable mutex objects.

A mutex is a mutual exclusion object that restricts access to a shared resource (e.g. a file) to a single instance. Countable mutexes acquire the mutex a single time and internally track the number of times the mutex is locked. The mutex is unlocked as soon as it goes out of scope or is unlocked the same number of times that it was locked.

## Class synopsis

```
public __construct(string $name = ?)
```

```
public lock(int $wait = -1): bool
```

```
public unlock(bool $all = false): bool
```

## Table of Contents

- SyncMutex::__construct — Constructs a new SyncMutex object
- SyncMutex::lock — Waits for an exclusive lock
- SyncMutex::unlock — Unlocks the mutex

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.syncmutex.php
