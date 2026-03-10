# The DirectoryIterator class

Source: https://devdocs.io/php/class.directoryiterator

## Introduction

(PHP 5, PHP 7, PHP 8)

The DirectoryIterator class provides a simple interface for viewing the contents of filesystem directories.

## Class synopsis

```
public current(): mixed
```

```
public getBasename(string $suffix = ""): string
```

```
public getExtension(): string
```

```
public getFilename(): string
```

```
public isDot(): bool
```

```
public key(): mixed
```

```
public next(): void
```

```
public rewind(): void
```

```
public seek(int $offset): void
```

```
public __toString(): string
```

```
public valid(): bool
```

```
public SplFileInfo::getATime(): int|false
```

```
public SplFileInfo::getBasename(string $suffix = ""): string
```

```
public SplFileInfo::getCTime(): int|false
```

```
public SplFileInfo::getExtension(): string
```

```
public SplFileInfo::getFileInfo(?string $class = null): SplFileInfo
```

```
public SplFileInfo::getFilename(): string
```

```
public SplFileInfo::getGroup(): int|false
```

```
public SplFileInfo::getInode(): int|false
```

```
public SplFileInfo::getLinkTarget(): string|false
```

```
public SplFileInfo::getMTime(): int|false
```

```
public SplFileInfo::getOwner(): int|false
```

```
public SplFileInfo::getPath(): string
```

```
public SplFileInfo::getPathInfo(?string $class = null): ?SplFileInfo
```

```
public SplFileInfo::getPathname(): string
```

```
public SplFileInfo::getPerms(): int|false
```

```
public SplFileInfo::getRealPath(): string|false
```

```
public SplFileInfo::getSize(): int|false
```

```
public SplFileInfo::getType(): string|false
```

```
public SplFileInfo::isDir(): bool
```

```
public SplFileInfo::isExecutable(): bool
```

```
public SplFileInfo::isFile(): bool
```

```
public SplFileInfo::isLink(): bool
```

```
public SplFileInfo::isReadable(): bool
```

```
public SplFileInfo::isWritable(): bool
```

```
public SplFileInfo::openFile(string $mode = "r", bool $useIncludePath = false, ?resource $context = null): SplFileObject
```

```
public SplFileInfo::setFileClass(string $class = SplFileObject::class): void
```

```
public SplFileInfo::setInfoClass(string $class = SplFileInfo::class): void
```

```
public SplFileInfo::__toString(): string
```

## Table of Contents

- DirectoryIterator::__construct — Constructs a new directory iterator from a path
- DirectoryIterator::current — Return the current DirectoryIterator item
- DirectoryIterator::getBasename — Get base name of current DirectoryIterator item
- DirectoryIterator::getExtension — Gets the file extension
- DirectoryIterator::getFilename — Return file name of current DirectoryIterator item
- DirectoryIterator::isDot — Determine if current DirectoryIterator item is '.' or '..'
- DirectoryIterator::key — Return the key for the current DirectoryIterator item
- DirectoryIterator::next — Move forward to next DirectoryIterator item
- DirectoryIterator::rewind — Rewind the DirectoryIterator back to the start
- DirectoryIterator::seek — Seek to a DirectoryIterator item
- DirectoryIterator::__toString — Get file name as a string
- DirectoryIterator::valid — Check whether current DirectoryIterator position is a valid file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.directoryiterator.php
