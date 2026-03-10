# The PharFileInfo class

Source: https://devdocs.io/php/class.pharfileinfo

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

The PharFileInfo class provides a high-level interface to the contents and attributes of a single file within a phar archive.

## Class synopsis

```
public chmod(int $perms): void
```

```
public compress(int $compression): true
```

```
public decompress(): true
```

```
public delMetadata(): true
```

```
public getCRC32(): int
```

```
public getCompressedSize(): int
```

```
public getContent(): string
```

```
public getMetadata(array $unserializeOptions = []): mixed
```

```
public getPharFlags(): int
```

```
public hasMetadata(): bool
```

```
public isCRCChecked(): bool
```

```
public isCompressed(?int $compression = null): bool
```

```
public setMetadata(mixed $metadata): void
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

- PharFileInfo::chmod — Sets file-specific permission bits
- PharFileInfo::compress — Compresses the current Phar entry with either zlib or bzip2 compression
- PharFileInfo::__construct — Construct a Phar entry object
- PharFileInfo::decompress — Decompresses the current Phar entry within the phar
- PharFileInfo::delMetadata — Deletes the metadata of the entry
- PharFileInfo::__destruct — Destructs a Phar entry object
- PharFileInfo::getCRC32 — Returns CRC32 code or throws an exception if CRC has not been verified
- PharFileInfo::getCompressedSize — Returns the actual size of the file (with compression) inside the Phar archive
- PharFileInfo::getContent — Get the complete file contents of the entry
- PharFileInfo::getMetadata — Returns file-specific meta-data saved with a file
- PharFileInfo::getPharFlags — Returns the Phar file entry flags
- PharFileInfo::hasMetadata — Returns the metadata of the entry
- PharFileInfo::isCRCChecked — Returns whether file entry has had its CRC verified
- PharFileInfo::isCompressed — Returns whether the entry is compressed
- PharFileInfo::setMetadata — Sets file-specific meta-data saved with a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pharfileinfo.php
