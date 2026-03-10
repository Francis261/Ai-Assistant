# The Phar class

Source: https://devdocs.io/php/class.phar

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

The Phar class provides a high-level interface to accessing and creating phar archives.

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
final public static apiVersion(): string
```

```
public buildFromDirectory(string $directory, string $pattern = ""): array
```

```
public buildFromIterator(Traversable $iterator, ?string $baseDirectory = null): array
```

```
final public static canCompress(int $compression = 0): bool
```

```
final public static canWrite(): bool
```

```
public compress(int $compression, ?string $extension = null): ?Phar
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
public count(int $mode = COUNT_NORMAL): int
```

```
final public static createDefaultStub(?string $index = null, ?string $webIndex = null): string
```

```
public decompress(?string $extension = null): ?Phar
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
public getAlias(): ?string
```

```
public getMetadata(array $unserializeOptions = []): mixed
```

```
public getModified(): bool
```

```
public getPath(): string
```

```
public getSignature(): array|false
```

```
public getStub(): string
```

```
final public static getSupportedCompression(): array
```

```
final public static getSupportedSignatures(): array
```

```
public getVersion(): string
```

```
public hasMetadata(): bool
```

```
final public static interceptFileFuncs(): void
```

```
public isBuffering(): bool
```

```
public isCompressed(): int|false
```

```
public isFileFormat(int $format): bool
```

```
final public static isValidPharFilename(string $filename, bool $executable = true): bool
```

```
public isWritable(): bool
```

```
final public static loadPhar(string $filename, ?string $alias = null): bool
```

```
final public static mapPhar(?string $alias = null, int $offset = 0): bool
```

```
final public static mount(string $pharPath, string $externalPath): void
```

```
final public static mungServer(array $variables): void
```

```
public offsetExists(string $localName): bool
```

```
public offsetGet(string $localName): SplFileInfo
```

```
public offsetSet(string $localName, resource|string $value): void
```

```
public offsetUnset(string $localName): void
```

```
final public static running(bool $returnPhar = true): string
```

```
public setAlias(string $alias): true
```

```
public setDefaultStub(?string $index = null, ?string $webIndex = null): true
```

```
public setMetadata(mixed $metadata): void
```

```
public setSignatureAlgorithm(int $algo, ?string $privateKey = null): void
```

```
public setStub(resource|string $stub, int $length = -1): bool
```

```
public startBuffering(): void
```

```
public stopBuffering(): void
```

```
final public static unlinkArchive(string $filename): true
```

```
final public static webPhar(
 ?string $alias = null,
 ?string $index = null,
 ?string $fileNotFoundScript = null,
 array $mimeTypes = [],
 ?callable $rewrite = null
): void
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

## Changelog

## Notes

Prior to PHP 8.0.0, the meta-data was deserialized upon opening the archive. This could lead to security vulnerabilities. Starting with PHP 8.0.0, meta-data is only deserialized when calling Phar::getMetadata(), which has options to restrict deserialization for security reasons.

## Table of Contents

- Phar::addEmptyDir — Add an empty directory to the phar archive
- Phar::addFile — Add a file from the filesystem to the phar archive
- Phar::addFromString — Add a file from a string to the phar archive
- Phar::apiVersion — Returns the api version
- Phar::buildFromDirectory — Construct a phar archive from the files within a directory
- Phar::buildFromIterator — Construct a phar archive from an iterator
- Phar::canCompress — Returns whether phar extension supports compression using either zlib or bzip2
- Phar::canWrite — Returns whether phar extension supports writing and creating phars
- Phar::compress — Compresses the entire Phar archive using Gzip or Bzip2 compression
- Phar::compressFiles — Compresses all files in the current Phar archive
- Phar::__construct — Construct a Phar archive object
- Phar::convertToData — Convert a phar archive to a non-executable tar or zip file
- Phar::convertToExecutable — Convert a phar archive to another executable phar archive file format
- Phar::copy — Copy a file internal to the phar archive to another new file within the phar
- Phar::count — Returns the number of entries (files) in the Phar archive
- Phar::createDefaultStub — Create a phar-file format specific stub
- Phar::decompress — Decompresses the entire Phar archive
- Phar::decompressFiles — Decompresses all files in the current Phar archive
- Phar::delMetadata — Deletes the global metadata of the phar
- Phar::delete — Delete a file within a phar archive
- Phar::__destruct — Destructs a Phar archive object
- Phar::extractTo — Extract the contents of a phar archive to a directory
- Phar::getAlias — Get the alias for Phar
- Phar::getMetadata — Returns phar archive meta-data
- Phar::getModified — Return whether phar was modified
- Phar::getPath — Get the real path to the Phar archive on disk
- Phar::getSignature — Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive
- Phar::getStub — Return the PHP loader or bootstrap stub of a Phar archive
- Phar::getSupportedCompression — Return array of supported compression algorithms
- Phar::getSupportedSignatures — Return array of supported signature types
- Phar::getVersion — Return version info of Phar archive
- Phar::hasMetadata — Returns whether phar has global meta-data
- Phar::interceptFileFuncs — Instructs phar to intercept fopen, file_get_contents, opendir, and all of the stat-related functions
- Phar::isBuffering — Used to determine whether Phar write operations are being buffered, or are flushing directly to disk
- Phar::isCompressed — Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)
- Phar::isFileFormat — Returns true if the phar archive is based on the tar/phar/zip file format depending on the parameter
- Phar::isValidPharFilename — Returns whether the given filename is a valid phar filename
- Phar::isWritable — Returns true if the phar archive can be modified
- Phar::loadPhar — Loads any phar archive with an alias
- Phar::mapPhar — Reads the currently executed file (a phar) and registers its manifest
- Phar::mount — Mount an external path or file to a virtual location within the phar archive
- Phar::mungServer — Defines a list of up to 4 $_SERVER variables that should be modified for execution
- Phar::offsetExists — Determines whether a file exists in the phar
- Phar::offsetGet — Gets a PharFileInfo object for a specific file
- Phar::offsetSet — Set the contents of an internal file to those of an external file
- Phar::offsetUnset — Remove a file from a phar
- Phar::running — Returns the full path on disk or full phar URL to the currently executing Phar archive
- Phar::setAlias — Set the alias for the Phar archive
- Phar::setDefaultStub — Used to set the PHP loader or bootstrap stub of a Phar archive to the default loader
- Phar::setMetadata — Sets phar archive meta-data
- Phar::setSignatureAlgorithm — Set the signature algorithm for a phar and apply it
- Phar::setStub — Used to set the PHP loader or bootstrap stub of a Phar archive
- Phar::startBuffering — Start buffering Phar write operations, do not modify the Phar object on disk
- Phar::stopBuffering — Stop buffering write requests to the Phar archive, and save changes to disk
- Phar::unlinkArchive — Completely remove a phar archive from disk and from memory
- Phar::webPhar — Routes a request from a web browser to an internal file within the phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.phar.php
