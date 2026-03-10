# The QuickHashIntStringHash class

Source: https://devdocs.io/php/class.quickhashintstringhash

## Introduction

(PECL quickhash >= Unknown)

This class wraps around a hash containing integer numbers, where the values are strings. Hashes are also available as implementation of the ArrayAccess interface.

Hashes can also be iterated over with foreach as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.

## Class synopsis

```
public add(int $key, string $value): bool
```

```
public __construct(int $size, int $options = 0)
```

```
public delete(int $key): bool
```

```
public exists(int $key): bool
```

```
public get(int $key): mixed
```

```
public getSize(): int
```

```
public static loadFromFile(string $filename, int $size = 0, int $options = 0): QuickHashIntStringHash
```

```
public static loadFromString(string $contents, int $size = 0, int $options = 0): QuickHashIntStringHash
```

```
public saveToFile(string $filename): void
```

```
public saveToString(): string
```

```
public set(int $key, string $value): int
```

```
public update(int $key, string $value): bool
```

## Predefined Constants

If enabled, adding duplicate elements to a set (through either QuickHashIntStringHash::add() or QuickHashIntStringHash::loadFromFile()) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.

Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.

Selects to not use a hashing function, but merely use a modulo to find the bucket list index. This is not faster than normal hashing, and gives more collisions.

This is the default hashing function to turn the integer hashes into bucket list indexes.

Selects a variant hashing algorithm.

## Table of Contents

- QuickHashIntStringHash::add — This method adds a new entry to the hash
- QuickHashIntStringHash::__construct — Creates a new QuickHashIntStringHash object
- QuickHashIntStringHash::delete — This method deletes an entry from the hash
- QuickHashIntStringHash::exists — This method checks whether a key is part of the hash
- QuickHashIntStringHash::get — This method retrieves a value from the hash by its key
- QuickHashIntStringHash::getSize — Returns the number of elements in the hash
- QuickHashIntStringHash::loadFromFile — This factory method creates a hash from a file
- QuickHashIntStringHash::loadFromString — This factory method creates a hash from a string
- QuickHashIntStringHash::saveToFile — This method stores an in-memory hash to disk
- QuickHashIntStringHash::saveToString — This method returns a serialized version of the hash
- QuickHashIntStringHash::set — This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist
- QuickHashIntStringHash::update — This method updates an entry in the hash with a new value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.quickhashintstringhash.php
