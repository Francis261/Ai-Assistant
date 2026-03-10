# The SplFileInfo class

Source: https://devdocs.io/php/class.splfileinfo

## Introduction

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

The SplFileInfo class offers a high-level object-oriented interface to information for an individual file.

## Class synopsis

```
public getATime(): int|false
```

```
public getBasename(string $suffix = ""): string
```

```
public getCTime(): int|false
```

```
public getExtension(): string
```

```
public getFileInfo(?string $class = null): SplFileInfo
```

```
public getFilename(): string
```

```
public getGroup(): int|false
```

```
public getInode(): int|false
```

```
public getLinkTarget(): string|false
```

```
public getMTime(): int|false
```

```
public getOwner(): int|false
```

```
public getPath(): string
```

```
public getPathInfo(?string $class = null): ?SplFileInfo
```

```
public getPathname(): string
```

```
public getPerms(): int|false
```

```
public getRealPath(): string|false
```

```
public getSize(): int|false
```

```
public getType(): string|false
```

```
public isDir(): bool
```

```
public isExecutable(): bool
```

```
public isFile(): bool
```

```
public isLink(): bool
```

```
public isReadable(): bool
```

```
public isWritable(): bool
```

```
public openFile(string $mode = "r", bool $useIncludePath = false, ?resource $context = null): SplFileObject
```

```
public setFileClass(string $class = SplFileObject::class): void
```

```
public setInfoClass(string $class = SplFileInfo::class): void
```

```
public __toString(): string
```

## Changelog

## Table of Contents

- SplFileInfo::__construct — Construct a new SplFileInfo object
- SplFileInfo::getATime — Gets last access time of the file
- SplFileInfo::getBasename — Gets the base name of the file
- SplFileInfo::getCTime — Gets the inode change time
- SplFileInfo::getExtension — Gets the file extension
- SplFileInfo::getFileInfo — Gets an SplFileInfo object for the file
- SplFileInfo::getFilename — Gets the filename
- SplFileInfo::getGroup — Gets the file group
- SplFileInfo::getInode — Gets the inode for the file
- SplFileInfo::getLinkTarget — Gets the target of a link
- SplFileInfo::getMTime — Gets the last modified time
- SplFileInfo::getOwner — Gets the owner of the file
- SplFileInfo::getPath — Gets the path without filename
- SplFileInfo::getPathInfo — Gets an SplFileInfo object for the path
- SplFileInfo::getPathname — Gets the path to the file
- SplFileInfo::getPerms — Gets file permissions
- SplFileInfo::getRealPath — Gets absolute path to file
- SplFileInfo::getSize — Gets file size
- SplFileInfo::getType — Gets file type
- SplFileInfo::isDir — Tells if the file is a directory
- SplFileInfo::isExecutable — Tells if the file is executable
- SplFileInfo::isFile — Tells if the object references a regular file
- SplFileInfo::isLink — Tells if the file is a link
- SplFileInfo::isReadable — Tells if file is readable
- SplFileInfo::isWritable — Tells if the entry is writable
- SplFileInfo::openFile — Gets an SplFileObject object for the file
- SplFileInfo::setFileClass — Sets the class used with SplFileInfo::openFile
- SplFileInfo::setInfoClass — Sets the class used with SplFileInfo::getFileInfo and SplFileInfo::getPathInfo
- SplFileInfo::__toString — Returns the path to the file as a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splfileinfo.php
