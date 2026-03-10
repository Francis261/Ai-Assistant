# The RecursiveDirectoryIterator class

Source: https://devdocs.io/php/class.recursivedirectoryiterator

## Introduction

(PHP 5, PHP 7, PHP 8)

The RecursiveDirectoryIterator provides an interface for iterating recursively over filesystem directories.

## Class synopsis

```
public getChildren(): RecursiveDirectoryIterator
```

```
public getSubPath(): string
```

```
public getSubPathname(): string
```

```
public hasChildren(bool $allowLinks = false): bool
```

```
public key(): string
```

```
public next(): void
```

```
public rewind(): void
```

```
public FilesystemIterator::current(): string|SplFileInfo|FilesystemIterator
```

```
public FilesystemIterator::getFlags(): int
```

```
public FilesystemIterator::key(): string
```

```
public FilesystemIterator::next(): void
```

```
public FilesystemIterator::rewind(): void
```

```
public FilesystemIterator::setFlags(int $flags): void
```

```
public DirectoryIterator::current(): mixed
```

```
public DirectoryIterator::getBasename(string $suffix = ""): string
```

```
public DirectoryIterator::getExtension(): string
```

```
public DirectoryIterator::getFilename(): string
```

```
public DirectoryIterator::isDot(): bool
```

```
public DirectoryIterator::key(): mixed
```

```
public DirectoryIterator::next(): void
```

```
public DirectoryIterator::rewind(): void
```

```
public DirectoryIterator::seek(int $offset): void
```

```
public DirectoryIterator::__toString(): string
```

```
public DirectoryIterator::valid(): bool
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

- RecursiveDirectoryIterator::__construct — Constructs a RecursiveDirectoryIterator
- RecursiveDirectoryIterator::getChildren — Returns an iterator for the current entry if it is a directory
- RecursiveDirectoryIterator::getSubPath — Get sub path
- RecursiveDirectoryIterator::getSubPathname — Get sub path and name
- RecursiveDirectoryIterator::hasChildren — Returns whether current entry is a directory and not '.' or '..'
- RecursiveDirectoryIterator::key — Return path and filename of current dir entry
- RecursiveDirectoryIterator::next — Move to next entry
- RecursiveDirectoryIterator::rewind — Rewind dir back to the start

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursivedirectoryiterator.php
