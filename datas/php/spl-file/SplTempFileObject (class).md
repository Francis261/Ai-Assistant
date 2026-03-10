# The SplTempFileObject class

Source: https://devdocs.io/php/class.spltempfileobject

## Introduction

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

The SplTempFileObject class offers an object-oriented interface for a temporary file.

## Class synopsis

```
public SplFileObject::current(): string|array|false
```

```
public SplFileObject::eof(): bool
```

```
public SplFileObject::fflush(): bool
```

```
public SplFileObject::fgetc(): string|false
```

```
public SplFileObject::fgetcsv(string $separator = ",", string $enclosure = "\"", string $escape = "\\"): array|false
```

```
public SplFileObject::fgets(): string
```

```
public SplFileObject::fgetss(string $allowable_tags = ?): string
```

```
public SplFileObject::flock(int $operation, int &$wouldBlock = null): bool
```

```
public SplFileObject::fpassthru(): int
```

```
public SplFileObject::fputcsv(
 array $fields,
 string $separator = ",",
 string $enclosure = "\"",
 string $escape = "\\",
 string $eol = "\n"
): int|false
```

```
public SplFileObject::fread(int $length): string|false
```

```
public SplFileObject::fscanf(string $format, mixed &...$vars): array|int|null
```

```
public SplFileObject::fseek(int $offset, int $whence = SEEK_SET): int
```

```
public SplFileObject::fstat(): array
```

```
public SplFileObject::ftell(): int|false
```

```
public SplFileObject::ftruncate(int $size): bool
```

```
public SplFileObject::fwrite(string $data, int $length = 0): int|false
```

```
public SplFileObject::getChildren(): null
```

```
public SplFileObject::getCsvControl(): array
```

```
public SplFileObject::getFlags(): int
```

```
public SplFileObject::getMaxLineLen(): int
```

```
public SplFileObject::hasChildren(): false
```

```
public SplFileObject::key(): int
```

```
public SplFileObject::next(): void
```

```
public SplFileObject::rewind(): void
```

```
public SplFileObject::seek(int $line): void
```

```
public SplFileObject::setCsvControl(string $separator = ",", string $enclosure = "\"", string $escape = "\\"): void
```

```
public SplFileObject::setFlags(int $flags): void
```

```
public SplFileObject::setMaxLineLen(int $maxLength): void
```

```
public SplFileObject::__toString(): string
```

```
public SplFileObject::valid(): bool
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

- SplTempFileObject::__construct — Construct a new temporary file object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.spltempfileobject.php
