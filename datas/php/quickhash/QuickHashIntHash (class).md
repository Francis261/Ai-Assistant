# The QuickHashIntHash class

Source: https://devdocs.io/php/class.quickhashinthash

## Introduction

(PECL quickhash >= Unknown)

This class wraps around a hash containing integer numbers, where the values are also integer numbers. Hashes are also available as implementation of the ArrayAccess interface.

Hashes can also be iterated over with foreach as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.

## Class synopsis

```
public add(int $key, int $value = ?): bool
```

```
public __construct(int $size, int $options = ?)
```

```
public delete(int $key): bool
```

```
public exists(int $key): bool
```

```
public get(int $key): int
```

```
public getSize(): int
```

```
public static loadFromFile(string $filename, int $options = ?): QuickHashIntHash
```

```
public static loadFromString(string $contents, int $options = ?): QuickHashIntHash
```

```
public saveToFile(string $filename): void
```

```
public saveToString(): string
```

```
public set(int $key, int $value): bool
```

```
public update(int $key, int $value): bool
```

## Predefined Constants

If enabled, adding duplicate elements to a set (through either QuickHashIntHash::add() or QuickHashIntHash::loadFromFile()) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.

Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.

Selects to not use a hashing function, but merely use a modulo to find the bucket list index. This is not faster than normal hashing, and gives more collisions.

This is the default hashing function to turn the integer hashes into bucket list indexes.

Selects a variant hashing algorithm.

## Table of Contents

- QuickHashIntHash::add — This method adds a new entry to the hash
- QuickHashIntHash::__construct — Creates a new QuickHashIntHash object
- QuickHashIntHash::delete — This method deletes an entry from the hash
- QuickHashIntHash::exists — This method checks whether a key is part of the hash
- QuickHashIntHash::get — This method retrieves a value from the hash by its key
- QuickHashIntHash::getSize — Returns the number of elements in the hash
- QuickHashIntHash::loadFromFile — This factory method creates a hash from a file
- QuickHashIntHash::loadFromString — This factory method creates a hash from a string
- QuickHashIntHash::saveToFile — This method stores an in-memory hash to disk
- QuickHashIntHash::saveToString — This method returns a serialized version of the hash
- QuickHashIntHash::set — This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist
- QuickHashIntHash::update — This method updates an entry in the hash with a new value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.quickhashinthash.php
