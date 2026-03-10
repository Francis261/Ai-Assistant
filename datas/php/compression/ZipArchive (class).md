# The ZipArchive class

Source: https://devdocs.io/php/class.ziparchive

## Introduction

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

A file archive, compressed with Zip.

## Class synopsis

```
public addEmptyDir(string $dirname, int $flags = 0): bool
```

```
public addFile(
 string $filepath,
 string $entryname = "",
 int $start = 0,
 int $length = ZipArchive::LENGTH_TO_END,
 int $flags = ZipArchive::FL_OVERWRITE
): bool
```

```
public addFromString(string $name, string $content, int $flags = ZipArchive::FL_OVERWRITE): bool
```

```
public addGlob(string $pattern, int $flags = 0, array $options = []): array|false
```

```
public addPattern(string $pattern, string $path = ".", array $options = []): array|false
```

```
public clearError(): void
```

```
public close(): bool
```

```
public count(): int
```

```
public deleteIndex(int $index): bool
```

```
public deleteName(string $name): bool
```

```
public extractTo(string $pathto, array|string|null $files = null): bool
```

```
public getArchiveComment(int $flags = 0): string|false
```

```
public getArchiveFlag(int $flag, int $flags = 0): int
```

```
public getCommentIndex(int $index, int $flags = 0): string|false
```

```
public getCommentName(string $name, int $flags = 0): string|false
```

```
public getExternalAttributesIndex(
 int $index,
 int &$opsys,
 int &$attr,
 int $flags = 0
): bool
```

```
public getExternalAttributesName(
 string $name,
 int &$opsys,
 int &$attr,
 int $flags = 0
): bool
```

```
public getFromIndex(int $index, int $len = 0, int $flags = 0): string|false
```

```
public getFromName(string $name, int $len = 0, int $flags = 0): string|false
```

```
public getNameIndex(int $index, int $flags = 0): string|false
```

```
public getStatusString(): string
```

```
public getStream(string $name): resource|false
```

```
public getStreamIndex(int $index, int $flags = 0): resource|false
```

```
public getStreamName(string $name, int $flags = 0): resource|false
```

```
public static isCompressionMethodSupported(int $method, bool $enc = true): bool
```

```
public static isEncryptionMethodSupported(int $method, bool $enc = true): bool
```

```
public locateName(string $name, int $flags = 0): int|false
```

```
public open(string $filename, int $flags = 0): bool|int
```

```
public registerCancelCallback(callable $callback): bool
```

```
public registerProgressCallback(float $rate, callable $callback): bool
```

```
public renameIndex(int $index, string $new_name): bool
```

```
public renameName(string $name, string $new_name): bool
```

```
public replaceFile(
 string $filepath,
 int $index,
 int $start = 0,
 int $length = ZipArchive::LENGTH_TO_END,
 int $flags = 0
): bool
```

```
public setArchiveComment(string $comment): bool
```

```
public setArchiveFlag(int $flag, int $value): bool
```

```
public setCommentIndex(int $index, string $comment): bool
```

```
public setCommentName(string $name, string $comment): bool
```

```
public setCompressionIndex(int $index, int $method, int $compflags = 0): bool
```

```
public setCompressionName(string $name, int $method, int $compflags = 0): bool
```

```
public setEncryptionIndex(int $index, int $method, #[\SensitiveParameter] ?string $password = null): bool
```

```
public setEncryptionName(string $name, int $method, #[\SensitiveParameter] ?string $password = null): bool
```

```
public setExternalAttributesIndex(
 int $index,
 int $opsys,
 int $attr,
 int $flags = 0
): bool
```

```
public setExternalAttributesName(
 string $name,
 int $opsys,
 int $attr,
 int $flags = 0
): bool
```

```
public setMtimeIndex(int $index, int $timestamp, int $flags = 0): bool
```

```
public setMtimeName(string $name, int $timestamp, int $flags = 0): bool
```

```
public setPassword(#[\SensitiveParameter] string $password): bool
```

```
public statIndex(int $index, int $flags = 0): array|false
```

```
public statName(string $name, int $flags = 0): array|false
```

```
public unchangeAll(): bool
```

```
public unchangeArchive(): bool
```

```
public unchangeIndex(int $index): bool
```

```
public unchangeName(string $name): bool
```

## Properties

Index value of last added entry (file or directory). Available as of PHP 8.0.0 and PECL zip 1.18.0.

Status of the Zip Archive. Available for closed archive, as of PHP 8.0.0 and PECL zip 1.18.0.

System status of the Zip Archive. Available for closed archive, as of PHP 8.0.0 and PECL zip 1.18.0.

Number of files in archive

File name in the file system

Comment for the archive

## Table of Contents

- ZipArchive::addEmptyDir — Add a new directory
- ZipArchive::addFile — Adds a file to a ZIP archive from the given path
- ZipArchive::addFromString — Add a file to a ZIP archive using its contents
- ZipArchive::addGlob — Add files from a directory by glob pattern
- ZipArchive::addPattern — Add files from a directory by PCRE pattern
- ZipArchive::clearError — Clear the status error message, system and/or zip messages
- ZipArchive::close — Close the active archive (opened or newly created)
- ZipArchive::count — Counts the number of files in the archive
- ZipArchive::deleteIndex — Delete an entry in the archive using its index
- ZipArchive::deleteName — Delete an entry in the archive using its name
- ZipArchive::extractTo — Extract the archive contents
- ZipArchive::getArchiveComment — Returns the Zip archive comment
- ZipArchive::getArchiveFlag — Returns the value of a Zip archive global flag
- ZipArchive::getCommentIndex — Returns the comment of an entry using the entry index
- ZipArchive::getCommentName — Returns the comment of an entry using the entry name
- ZipArchive::getExternalAttributesIndex — Retrieve the external attributes of an entry defined by its index
- ZipArchive::getExternalAttributesName — Retrieve the external attributes of an entry defined by its name
- ZipArchive::getFromIndex — Returns the entry contents using its index
- ZipArchive::getFromName — Returns the entry contents using its name
- ZipArchive::getNameIndex — Returns the name of an entry using its index
- ZipArchive::getStatusString — Returns the status error message, system and/or zip messages
- ZipArchive::getStream — Get a file handler to the entry defined by its name (read only)
- ZipArchive::getStreamIndex — Get a file handler to the entry defined by its index (read only)
- ZipArchive::getStreamName — Get a file handler to the entry defined by its name (read only)
- ZipArchive::isCompressionMethodSupported — Check if a compression method is supported by libzip
- ZipArchive::isEncryptionMethodSupported — Check if a encryption method is supported by libzip
- ZipArchive::locateName — Returns the index of the entry in the archive
- ZipArchive::open — Open a ZIP file archive
- ZipArchive::registerCancelCallback — Register a callback to allow cancellation during archive close.
- ZipArchive::registerProgressCallback — Register a callback to provide updates during archive close.
- ZipArchive::renameIndex — Renames an entry defined by its index
- ZipArchive::renameName — Renames an entry defined by its name
- ZipArchive::replaceFile — Replace file in ZIP archive with a given path
- ZipArchive::setArchiveComment — Set the comment of a ZIP archive
- ZipArchive::setArchiveFlag — Set a global flag of a ZIP archive
- ZipArchive::setCommentIndex — Set the comment of an entry defined by its index
- ZipArchive::setCommentName — Set the comment of an entry defined by its name
- ZipArchive::setCompressionIndex — Set the compression method of an entry defined by its index
- ZipArchive::setCompressionName — Set the compression method of an entry defined by its name
- ZipArchive::setEncryptionIndex — Set the encryption method of an entry defined by its index
- ZipArchive::setEncryptionName — Set the encryption method of an entry defined by its name
- ZipArchive::setExternalAttributesIndex — Set the external attributes of an entry defined by its index
- ZipArchive::setExternalAttributesName — Set the external attributes of an entry defined by its name
- ZipArchive::setMtimeIndex — Set the modification time of an entry defined by its index
- ZipArchive::setMtimeName — Set the modification time of an entry defined by its name
- ZipArchive::setPassword — Set the password for the active archive
- ZipArchive::statIndex — Get the details of an entry defined by its index
- ZipArchive::statName — Get the details of an entry defined by its name
- ZipArchive::unchangeAll — Undo all changes done in the archive
- ZipArchive::unchangeArchive — Revert all global changes done in the archive
- ZipArchive::unchangeIndex — Revert all changes done to an entry at the given index
- ZipArchive::unchangeName — Revert all changes done to an entry with the given name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ziparchive.php
