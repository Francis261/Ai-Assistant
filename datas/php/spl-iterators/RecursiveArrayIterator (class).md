# The RecursiveArrayIterator class

Source: https://devdocs.io/php/class.recursivearrayiterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

This iterator allows for unsetting and modifying values and keys while iterating over arrays and objects, in the same way as the ArrayIterator. Additionally, it is possible to iterate over the current iterator entry.

## Class synopsis

```
public getChildren(): ?RecursiveArrayIterator
```

```
public hasChildren(): bool
```

```
public ArrayIterator::append(mixed $value): void
```

```
public ArrayIterator::asort(int $flags = SORT_REGULAR): true
```

```
public ArrayIterator::count(): int
```

```
public ArrayIterator::current(): mixed
```

```
public ArrayIterator::getArrayCopy(): array
```

```
public ArrayIterator::getFlags(): int
```

```
public ArrayIterator::key(): string|int|null
```

```
public ArrayIterator::ksort(int $flags = SORT_REGULAR): true
```

```
public ArrayIterator::natcasesort(): true
```

```
public ArrayIterator::natsort(): true
```

```
public ArrayIterator::next(): void
```

```
public ArrayIterator::offsetExists(mixed $key): bool
```

```
public ArrayIterator::offsetGet(mixed $key): mixed
```

```
public ArrayIterator::offsetSet(mixed $key, mixed $value): void
```

```
public ArrayIterator::offsetUnset(mixed $key): void
```

```
public ArrayIterator::rewind(): void
```

```
public ArrayIterator::seek(int $offset): void
```

```
public ArrayIterator::serialize(): string
```

```
public ArrayIterator::setFlags(int $flags): void
```

```
public ArrayIterator::uasort(callable $callback): true
```

```
public ArrayIterator::uksort(callable $callback): true
```

```
public ArrayIterator::unserialize(string $data): void
```

```
public ArrayIterator::valid(): bool
```

## Predefined Constants

## RecursiveArrayIterator Flags

Treat only arrays (not objects) as having children for recursive iteration.

## Table of Contents

- RecursiveArrayIterator::getChildren — Returns an iterator for the current entry if it is an array or an object
- RecursiveArrayIterator::hasChildren — Returns whether current entry is an array or an object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursivearrayiterator.php
