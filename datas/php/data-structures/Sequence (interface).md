# The Sequence interface

Source: https://devdocs.io/php/class.ds-sequence

## Introduction

(PECL ds >= 1.0.0)

A Sequence describes the behaviour of values arranged in a single, linear dimension. Some languages refer to this as a "List". It’s similar to an array that uses incremental integer keys, with the exception of a few characteristics:

- Values will always be indexed as [0, 1, 2, …, size - 1].
- Only allowed to access values by index in the range [0, size - 1].

Use cases:

- Wherever you would use an array as a list (not concerned with keys).
- A more efficient alternative to SplDoublyLinkedList and SplFixedArray.

## Interface synopsis

```
abstract public allocate(int $capacity): void
```

```
abstract public apply(callable $callback): void
```

```
abstract public capacity(): int
```

```
abstract public contains(mixed ...$values): bool
```

```
abstract public filter(callable $callback = ?): Ds\Sequence
```

```
abstract public find(mixed $value): mixed
```

```
abstract public first(): mixed
```

```
abstract public get(int $index): mixed
```

```
abstract public insert(int $index, mixed ...$values): void
```

```
abstract public join(string $glue = ?): string
```

```
abstract public last(): mixed
```

```
abstract public map(callable $callback): Ds\Sequence
```

```
abstract public merge(mixed $values): Ds\Sequence
```

```
abstract public pop(): mixed
```

```
abstract public push(mixed ...$values): void
```

```
abstract public reduce(callable $callback, mixed $initial = ?): mixed
```

```
abstract public remove(int $index): mixed
```

```
abstract public reverse(): void
```

```
abstract public reversed(): Ds\Sequence
```

```
abstract public rotate(int $rotations): void
```

```
abstract public set(int $index, mixed $value): void
```

```
abstract public shift(): mixed
```

```
abstract public slice(int $index, int $length = ?): Ds\Sequence
```

```
abstract public sort(callable $comparator = ?): void
```

```
abstract public sorted(callable $comparator = ?): Ds\Sequence
```

```
abstract public sum(): int|float
```

```
abstract public unshift(mixed $values = ?): void
```

```
public Ds\Collection::clear(): void
```

```
public Ds\Collection::copy(): Ds\Collection
```

```
public Ds\Collection::isEmpty(): bool
```

```
public Ds\Collection::toArray(): array
```

```
public Countable::count(): int
```

```
public IteratorAggregate::getIterator(): Traversable
```

```
public JsonSerializable::jsonSerialize(): mixed
```

```
public ArrayAccess::offsetExists(mixed $offset): bool
```

```
public ArrayAccess::offsetGet(mixed $offset): mixed
```

```
public ArrayAccess::offsetSet(mixed $offset, mixed $value): void
```

```
public ArrayAccess::offsetUnset(mixed $offset): void
```

## Changelog

## Table of Contents

- Ds\Sequence::allocate — Allocates enough memory for a required capacity
- Ds\Sequence::apply — Updates all values by applying a callback function to each value
- Ds\Sequence::capacity — Returns the current capacity
- Ds\Sequence::contains — Determines if the sequence contains given values
- Ds\Sequence::filter — Creates a new sequence using a callable to determine which values to include
- Ds\Sequence::find — Attempts to find a value's index
- Ds\Sequence::first — Returns the first value in the sequence
- Ds\Sequence::get — Returns the value at a given index
- Ds\Sequence::insert — Inserts values at a given index
- Ds\Sequence::join — Joins all values together as a string
- Ds\Sequence::last — Returns the last value
- Ds\Sequence::map — Returns the result of applying a callback to each value
- Ds\Sequence::merge — Returns the result of adding all given values to the sequence
- Ds\Sequence::pop — Removes and returns the last value
- Ds\Sequence::push — Adds values to the end of the sequence
- Ds\Sequence::reduce — Reduces the sequence to a single value using a callback function
- Ds\Sequence::remove — Removes and returns a value by index
- Ds\Sequence::reverse — Reverses the sequence in-place
- Ds\Sequence::reversed — Returns a reversed copy
- Ds\Sequence::rotate — Rotates the sequence by a given number of rotations
- Ds\Sequence::set — Updates a value at a given index
- Ds\Sequence::shift — Removes and returns the first value
- Ds\Sequence::slice — Returns a sub-sequence of a given range
- Ds\Sequence::sort — Sorts the sequence in-place
- Ds\Sequence::sorted — Returns a sorted copy
- Ds\Sequence::sum — Returns the sum of all values in the sequence
- Ds\Sequence::unshift — Adds values to the front of the sequence

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-sequence.php
