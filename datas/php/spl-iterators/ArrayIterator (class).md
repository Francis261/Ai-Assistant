# The ArrayIterator class

Source: https://devdocs.io/php/class.arrayiterator

## Introduction

(PHP 5, PHP 7, PHP 8)

Allows the removal of elements, and the modification of keys or values while iterating over arrays or objects.

To iterate the same array more than once, it is recommended to instantiate ArrayObject and use the ArrayIterator instance either implicitly created when using foreach to iterate over the array stored internally, or create one by calling the ArrayObject::getIterator() method manually.

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
public current(): mixed
```

```
public getArrayCopy(): array
```

```
public getFlags(): int
```

```
public key(): string|int|null
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
public next(): void
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
public rewind(): void
```

```
public seek(int $offset): void
```

```
public serialize(): string
```

```
public setFlags(int $flags): void
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

```
public valid(): bool
```

## Predefined Constants

## ArrayIterator Flags

Properties of the object have their normal functionality when accessed as list (var_dump(), foreach, etc.).

Entries can be accessed as properties (read and write).

## Table of Contents

- ArrayIterator::append — Append an element
- ArrayIterator::asort — Sort entries by values
- ArrayIterator::__construct — Construct an ArrayIterator
- ArrayIterator::count — Count elements
- ArrayIterator::current — Return current array entry
- ArrayIterator::getArrayCopy — Get array copy
- ArrayIterator::getFlags — Get behavior flags
- ArrayIterator::key — Return current array key
- ArrayIterator::ksort — Sort entries by keys
- ArrayIterator::natcasesort — Sort entries naturally, case insensitive
- ArrayIterator::natsort — Sort entries naturally
- ArrayIterator::next — Move to next entry
- ArrayIterator::offsetExists — Check if offset exists
- ArrayIterator::offsetGet — Get value for an offset
- ArrayIterator::offsetSet — Set value for an offset
- ArrayIterator::offsetUnset — Unset value for an offset
- ArrayIterator::rewind — Rewind array back to the start
- ArrayIterator::seek — Seeks to a position
- ArrayIterator::serialize — Serialize
- ArrayIterator::setFlags — Set behaviour flags
- ArrayIterator::uasort — Sort with a user-defined comparison function and maintain index association
- ArrayIterator::uksort — Sort by keys using a user-defined comparison function
- ArrayIterator::unserialize — Unserialize
- ArrayIterator::valid — Check whether array contains more entries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.arrayiterator.php
