# The PharData class

Source: https://devdocs.io/php/class.phardata

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

The PharData class provides a high-level interface to accessing and creating non-executable tar and zip archives. Because these archives do not contain a stub and cannot be executed by the phar extension, it is possible to create and manipulate regular zip and tar files using the PharData class even if phar.readonly php.ini setting is 1.

## Class synopsis

```
public addEmptyDir(string $directory): void
```

```
public addFile(string $filename, ?string $localName = null): void
```

```
public addFromString(string $localName, string $contents): void
```

```
public buildFromDirectory(string $directory, string $pattern = ""): array
```

```
public buildFromIterator(Traversable $iterator, ?string $baseDirectory = null): array
```

```
public compress(int $compression, ?string $extension = null): ?PharData
```

```
public compressFiles(int $compression): void
```

```
public convertToData(?int $format = null, ?int $compression = null, ?string $extension = null): ?PharData
```

```
public convertToExecutable(?int $format = null, ?int $compression = null, ?string $extension = null): ?Phar
```

```
public copy(string $from, string $to): true
```

```
public decompress(?string $extension = null): ?PharData
```

```
public decompressFiles(): true
```

```
public delMetadata(): true
```

```
public delete(string $localName): true
```

```
public extractTo(string $directory, array|string|null $files = null, bool $overwrite = false): bool
```

```
public isWritable(): bool
```

```
public offsetSet(string $localName, resource|string $value): void
```

```
public offsetUnset(string $localName): void
```

```
public setAlias(string $alias): bool
```

```
public setDefaultStub(?string $index = null, ?string $webIndex = null): bool
```

```
public setMetadata(mixed $metadata): void
```

```
public setSignatureAlgorithm(int $algo, ?string $privateKey = null): void
```

```
public setStub(string $stub, int $len = -1): bool
```

```
public RecursiveDirectoryIterator::getChildren(): RecursiveDirectoryIterator
```

```
public RecursiveDirectoryIterator::getSubPath(): string
```

```
public RecursiveDirectoryIterator::getSubPathname(): string
```

```
public RecursiveDirectoryIterator::hasChildren(bool $allowLinks = false): bool
```

```
public RecursiveDirectoryIterator::key(): string
```

```
public RecursiveDirectoryIterator::next(): void
```

```
public RecursiveDirectoryIterator::rewind(): void
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

- PharData::addEmptyDir — Add an empty directory to the tar/zip archive
- PharData::addFile — Add a file from the filesystem to the tar/zip archive
- PharData::addFromString — Add a file from a string to the tar/zip archive
- PharData::buildFromDirectory — Construct a tar/zip archive from the files within a directory
- PharData::buildFromIterator — Construct a tar or zip archive from an iterator
- PharData::compress — Compresses the entire tar/zip archive using Gzip or Bzip2 compression
- PharData::compressFiles — Compresses all files in the current tar/zip archive
- PharData::__construct — Construct a non-executable tar or zip archive object
- PharData::convertToData — Convert a phar archive to a non-executable tar or zip file
- PharData::convertToExecutable — Convert a non-executable tar/zip archive to an executable phar archive
- PharData::copy — Copy a file internal to the tar/zip archive to another new file within the same archive
- PharData::decompress — Decompresses the entire Phar archive
- PharData::decompressFiles — Decompresses all files in the current zip archive
- PharData::delMetadata — Deletes the global metadata of a zip archive
- PharData::delete — Delete a file within a tar/zip archive
- PharData::__destruct — Destructs a non-executable tar or zip archive object
- PharData::extractTo — Extract the contents of a tar/zip archive to a directory
- PharData::isWritable — Returns true if the tar/zip archive can be modified
- PharData::offsetSet — Set the contents of a file within the tar/zip to those of an external file or string
- PharData::offsetUnset — Remove a file from a tar/zip archive
- PharData::setAlias — Dummy function (Phar::setAlias is not valid for PharData)
- PharData::setDefaultStub — Dummy function (Phar::setDefaultStub is not valid for PharData)
- PharData::setMetadata — Sets phar archive meta-data
- PharData::setSignatureAlgorithm — Set the signature algorithm for a phar and apply it
- PharData::setStub — Dummy function (Phar::setStub is not valid for PharData)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.phardata.php
