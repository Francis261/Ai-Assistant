# The ArrayObject class

Source: https://devdocs.io/php/class.arrayobject

## Introduction

(PHP 5, PHP 7, PHP 8)

This class allows objects to work as arrays.

Note: Wrapping objects with this class is fundamentally flawed, and therefore its usage with objects is discouraged.

## Class synopsis

```
public append(mixed $value): void
```

```
public asort(int $flags = SORT_REGULAR): true
```

```
public count(): int
```

```
public exchangeArray(array|object $array): array
```

```
public getArrayCopy(): array
```

```
public getFlags(): int
```

```
public getIterator(): Iterator
```

```
public getIteratorClass(): string
```

```
public ksort(int $flags = SORT_REGULAR): true
```

```
public natcasesort(): true
```

```
public natsort(): true
```

```
public offsetExists(mixed $key): bool
```

```
public offsetGet(mixed $key): mixed
```

```
public offsetSet(mixed $key, mixed $value): void
```

```
public offsetUnset(mixed $key): void
```

```
public serialize(): string
```

```
public setFlags(int $flags): void
```

```
public setIteratorClass(string $iteratorClass): void
```

```
public uasort(callable $callback): true
```

```
public uksort(callable $callback): true
```

```
public unserialize(string $data): void
```

## Predefined Constants

## ArrayObject Flags

Properties of the object have their normal functionality when accessed as list (var_dump(), foreach, etc.).

Entries can be accessed as properties (read and write). The ArrayObject class uses its own logic to access properties, thus no warning or error is raised when trying to read or write dynamic properties.

## Table of Contents

- ArrayObject::append — Appends the value
- ArrayObject::asort — Sort the entries by value
- ArrayObject::__construct — Construct a new array object
- ArrayObject::count — Get the number of public properties in the ArrayObject
- ArrayObject::exchangeArray — Exchange the array for another one
- ArrayObject::getArrayCopy — Creates a copy of the ArrayObject
- ArrayObject::getFlags — Gets the behavior flags
- ArrayObject::getIterator — Create a new iterator from an ArrayObject instance
- ArrayObject::getIteratorClass — Gets the iterator classname for the ArrayObject
- ArrayObject::ksort — Sort the entries by key
- ArrayObject::natcasesort — Sort an array using a case insensitive "natural order" algorithm
- ArrayObject::natsort — Sort entries using a "natural order" algorithm
- ArrayObject::offsetExists — Returns whether the requested index exists
- ArrayObject::offsetGet — Returns the value at the specified index
- ArrayObject::offsetSet — Sets the value at the specified index to newval
- ArrayObject::offsetUnset — Unsets the value at the specified index
- ArrayObject::serialize — Serialize an ArrayObject
- ArrayObject::setFlags — Sets the behavior flags
- ArrayObject::setIteratorClass — Sets the iterator classname for the ArrayObject
- ArrayObject::uasort — Sort the entries with a user-defined comparison function and maintain key association
- ArrayObject::uksort — Sort the entries by keys using a user-defined comparison function
- ArrayObject::unserialize — Unserialize an ArrayObject

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.arrayobject.php
