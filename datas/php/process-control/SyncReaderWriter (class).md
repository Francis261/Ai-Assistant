# The SyncReaderWriter class

Source: https://devdocs.io/php/class.syncreaderwriter

## Introduction

(PECL sync >= 1.0.0)

A cross-platform, native implementation of named and unnamed reader-writer objects.

A reader-writer object allows many readers or one writer to access a resource. This is an efficient solution for managing resources where access will primarily be read-only but exclusive write access is occasionally necessary.

## Class synopsis

```
public __construct(string $name = ?, int $autounlock = 1)
```

```
public readlock(int $wait = -1): bool
```

```
public readunlock(): bool
```

```
public writelock(int $wait = -1): bool
```

```
public writeunlock(): bool
```

## Table of Contents

- SyncReaderWriter::__construct — Constructs a new SyncReaderWriter object
- SyncReaderWriter::readlock — Waits for a read lock
- SyncReaderWriter::readunlock — Releases a read lock
- SyncReaderWriter::writelock — Waits for an exclusive write lock
- SyncReaderWriter::writeunlock — Releases a write lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.syncreaderwriter.php
