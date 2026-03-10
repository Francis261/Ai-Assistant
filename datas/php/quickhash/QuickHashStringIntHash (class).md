# The QuickHashStringIntHash class

Source: https://devdocs.io/php/class.quickhashstringinthash

## Introduction

(No version information available, might only be in Git)

This class wraps around a hash containing strings, where the values are integer numbers. Hashes are also available as implementation of the ArrayAccess interface.

Hashes can also be iterated over with foreach as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.

## Class synopsis

```
public add(string $key, int $value): bool
```

```
public __construct(int $size, int $options = 0)
```

```
public delete(string $key): bool
```

```
public exists(string $key): bool
```

```
public get(string $key): mixed
```

```
public getSize(): int
```

```
public static loadFromFile(string $filename, int $size = 0, int $options = 0): QuickHashStringIntHash
```

```
public static loadFromString(string $contents, int $size = 0, int $options = 0): QuickHashStringIntHash
```

```
public saveToFile(string $filename): void
```

```
public saveToString(): string
```

```
public set(string $key, int $value): int
```

```
public update(string $key, int $value): bool
```

## Predefined Constants

If enabled, adding duplicate elements to a set (through either QuickHashStringIntHash::add() or QuickHashStringIntHash::loadFromFile()) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.

Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.

## Table of Contents

- QuickHashStringIntHash::add — This method adds a new entry to the hash
- QuickHashStringIntHash::__construct — Creates a new QuickHashStringIntHash object
- QuickHashStringIntHash::delete — This method deletes an entry from the hash
- QuickHashStringIntHash::exists — This method checks whether a key is part of the hash
- QuickHashStringIntHash::get — This method retrieves a value from the hash by its key
- QuickHashStringIntHash::getSize — Returns the number of elements in the hash
- QuickHashStringIntHash::loadFromFile — This factory method creates a hash from a file
- QuickHashStringIntHash::loadFromString — This factory method creates a hash from a string
- QuickHashStringIntHash::saveToFile — This method stores an in-memory hash to disk
- QuickHashStringIntHash::saveToString — This method returns a serialized version of the hash
- QuickHashStringIntHash::set — This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist
- QuickHashStringIntHash::update — This method updates an entry in the hash with a new value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.quickhashstringinthash.php
