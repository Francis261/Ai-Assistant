# The FilesystemIterator class

Source: https://devdocs.io/php/class.filesystemiterator

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The Filesystem iterator

## Class synopsis

```
public current(): string|SplFileInfo|FilesystemIterator
```

```
public getFlags(): int
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
public setFlags(int $flags): void
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

## Predefined Constants

Makes FilesystemIterator::current() return the pathname.

Makes FilesystemIterator::current() return an SplFileInfo instance.

Makes FilesystemIterator::current() return $this (the FilesystemIterator).

Masks FilesystemIterator::current()

Makes FilesystemIterator::key() return the pathname.

Makes FilesystemIterator::key() return the filename.

Makes RecursiveDirectoryIterator::hasChildren() follow symlinks.

Masks FilesystemIterator::key()

Same as FilesystemIterator::KEY_AS_FILENAME | FilesystemIterator::CURRENT_AS_FILEINFO.

Mask used for FilesystemIterator::getFlags() and FilesystemIterator::setFlags().

Skips dot files (. and ..).

Makes paths use Unix-style forward slash irrespective of system default. Note that the path that is passed to the constructor is not modified.

## Table of Contents

- FilesystemIterator::__construct — Constructs a new filesystem iterator
- FilesystemIterator::current — The current file
- FilesystemIterator::getFlags — Get the handling flags
- FilesystemIterator::key — Retrieve the key for the current file
- FilesystemIterator::next — Move to the next file
- FilesystemIterator::rewind — Rewinds back to the beginning
- FilesystemIterator::setFlags — Sets handling flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.filesystemiterator.php
