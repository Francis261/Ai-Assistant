# The QuickHashIntSet class

Source: https://devdocs.io/php/class.quickhashintset

## Introduction

(PECL quickhash >= Unknown)

This class wraps around a set containing integer numbers.

Sets can also be iterated over with foreach as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.

## Class synopsis

```
public add(int $key): bool
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
publicgetSize(): int
```

```
public static loadFromFile(string $filename, int $size = ?, int $options = ?): QuickHashIntSet
```

```
public static loadFromString(string $contents, int $size = ?, int $options = ?): QuickHashIntSet
```

```
public saveToFile(string $filename): void
```

```
public saveToString(): string
```

## Predefined Constants

If enabled, adding duplicate elements to a set (through either QuickHashIntSet::add() or QuickHashIntSet::loadFromFile()) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.

Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.

Selects to not use a hashing function, but merely use a modulo to find the bucket list index. This is not faster than normal hashing, and gives more collisions.

This is the default hashing function to turn the integer hashes into bucket list indexes.

Selects a variant hashing algorithm.

## Table of Contents

- QuickHashIntSet::add — This method adds a new entry to the set
- QuickHashIntSet::__construct — Creates a new QuickHashIntSet object
- QuickHashIntSet::delete — This method deletes an entry from the set
- QuickHashIntSet::exists — This method checks whether a key is part of the set
- QuickHashIntSet::getSize — Returns the number of elements in the set
- QuickHashIntSet::loadFromFile — This factory method creates a set from a file
- QuickHashIntSet::loadFromString — This factory method creates a set from a string
- QuickHashIntSet::saveToFile — This method stores an in-memory set to disk
- QuickHashIntSet::saveToString — This method returns a serialized version of the set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.quickhashintset.php
