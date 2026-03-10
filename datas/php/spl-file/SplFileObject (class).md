# The SplFileObject class

Source: https://devdocs.io/php/class.splfileobject

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The SplFileObject class offers an object-oriented interface for a file.

## Class synopsis

```
public current(): string|array|false
```

```
public eof(): bool
```

```
public fflush(): bool
```

```
public fgetc(): string|false
```

```
public fgetcsv(string $separator = ",", string $enclosure = "\"", string $escape = "\\"): array|false
```

```
public fgets(): string
```

```
public fgetss(string $allowable_tags = ?): string
```

```
public flock(int $operation, int &$wouldBlock = null): bool
```

```
public fpassthru(): int
```

```
public fputcsv(
 array $fields,
 string $separator = ",",
 string $enclosure = "\"",
 string $escape = "\\",
 string $eol = "\n"
): int|false
```

```
public fread(int $length): string|false
```

```
public fscanf(string $format, mixed &...$vars): array|int|null
```

```
public fseek(int $offset, int $whence = SEEK_SET): int
```

```
public fstat(): array
```

```
public ftell(): int|false
```

```
public ftruncate(int $size): bool
```

```
public fwrite(string $data, int $length = 0): int|false
```

```
public getChildren(): null
```

```
public getCsvControl(): array
```

```
public getFlags(): int
```

```
public getMaxLineLen(): int
```

```
public hasChildren(): false
```

```
public key(): int
```

```
public next(): void
```

```
public rewind(): void
```

```
public seek(int $line): void
```

```
public setCsvControl(string $separator = ",", string $enclosure = "\"", string $escape = "\\"): void
```

```
public setFlags(int $flags): void
```

```
public setMaxLineLen(int $maxLength): void
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

## Predefined Constants

Drop newlines at the end of a line.

Read on rewind/next.

Skips empty lines in the file. This requires the READ_AHEAD flag be enabled, to work as expected.

Read lines as CSV rows.

## Table of Contents

- SplFileObject::__construct — Construct a new file object
- SplFileObject::current — Retrieve current line of file
- SplFileObject::eof — Reached end of file
- SplFileObject::fflush — Flushes the output to the file
- SplFileObject::fgetc — Gets character from file
- SplFileObject::fgetcsv — Gets line from file and parse as CSV fields
- SplFileObject::fgets — Gets line from file
- SplFileObject::fgetss — Gets line from file and strip HTML tags
- SplFileObject::flock — Portable file locking
- SplFileObject::fpassthru — Output all remaining data on a file pointer
- SplFileObject::fputcsv — Write a field array as a CSV line
- SplFileObject::fread — Read from file
- SplFileObject::fscanf — Parses input from file according to a format
- SplFileObject::fseek — Seek to a position
- SplFileObject::fstat — Gets information about the file
- SplFileObject::ftell — Return current file position
- SplFileObject::ftruncate — Truncates the file to a given length
- SplFileObject::fwrite — Write to file
- SplFileObject::getChildren — No purpose
- SplFileObject::getCsvControl — Get the delimiter, enclosure and escape character for CSV
- SplFileObject::getCurrentLine — Alias of SplFileObject::fgets
- SplFileObject::getFlags — Gets flags for the SplFileObject
- SplFileObject::getMaxLineLen — Get maximum line length
- SplFileObject::hasChildren — SplFileObject does not have children
- SplFileObject::key — Get line number
- SplFileObject::next — Read next line
- SplFileObject::rewind — Rewind the file to the first line
- SplFileObject::seek — Seek to specified line
- SplFileObject::setCsvControl — Set the delimiter, enclosure and escape character for CSV
- SplFileObject::setFlags — Sets flags for the SplFileObject
- SplFileObject::setMaxLineLen — Set maximum line length
- SplFileObject::__toString — Returns the current line as a string
- SplFileObject::valid — Not at EOF

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splfileobject.php
