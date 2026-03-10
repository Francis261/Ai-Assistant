# The RarArchive class

Source: https://devdocs.io/php/class.rararchive

## Introduction

(PECL rar >= 2.0.0)

This class represents a RAR archive, which may be formed by several volumes (parts) and which contains a number of RAR entries (i.e., files, directories and other special objects such as symbolic links).

Objects of this class can be traversed, yielding the entries stored in the respective RAR archive. Those entries can also be obtained through RarArchive::getEntry() and RarArchive::getEntries().

## Class synopsis

```
public close(): bool
```

```
public getComment(): string
```

```
public getEntries(): array|false
```

```
public getEntry(string $entryname): RarEntry|false
```

```
public isBroken(): bool
```

```
public isSolid(): bool
```

```
public static open(string $filename, string $password = NULL, callable $volume_callback = NULL): RarArchive|false
```

```
public setAllowBroken(bool $allow_broken): bool
```

```
public __toString(): string
```

## Table of Contents

- RarArchive::close — Close RAR archive and free all resources
- RarArchive::getComment — Get comment text from the RAR archive
- RarArchive::getEntries — Get full list of entries from the RAR archive
- RarArchive::getEntry — Get entry object from the RAR archive
- RarArchive::isBroken — Test whether an archive is broken (incomplete)
- RarArchive::isSolid — Check whether the RAR archive is solid
- RarArchive::open — Open RAR archive
- RarArchive::setAllowBroken — Whether opening broken archives is allowed
- RarArchive::__toString — Get text representation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.rararchive.php
