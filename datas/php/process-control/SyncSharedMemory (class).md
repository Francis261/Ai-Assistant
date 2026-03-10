# The SyncSharedMemory class

Source: https://devdocs.io/php/class.syncsharedmemory

## Introduction

(PECL sync >= 1.1.0)

A cross-platform, native, consistent implementation of named shared memory objects.

Shared memory lets two separate processes communicate without the need for complex pipes or sockets. There are several integer-based shared memory implementations for PHP. Named shared memory is an alternative.

Synchronization objects (e.g. SyncMutex) are still required to protect most uses of shared memory.

## Class synopsis

```
public __construct(string $name, int $size)
```

```
public first(): bool
```

```
public read(int $start = 0, int $length = ?)
```

```
public size(): int
```

```
public write(string $string = ?, int $start = 0)
```

## Table of Contents

- SyncSharedMemory::__construct — Constructs a new SyncSharedMemory object
- SyncSharedMemory::first — Check to see if the object is the first instance system-wide of named shared memory
- SyncSharedMemory::read — Copy data from named shared memory
- SyncSharedMemory::size — Returns the size of the named shared memory
- SyncSharedMemory::write — Copy data to named shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.syncsharedmemory.php
