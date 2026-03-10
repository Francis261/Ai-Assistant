# The Deque class

Source: https://devdocs.io/php/class.ds-deque

## Introduction

(PECL ds >= 1.0.0)

A Deque (pronounced “deck”) is a sequence of values in a contiguous buffer that grows and shrinks automatically. The name is a common abbreviation of “double-ended queue” and is used internally by Ds\Queue.

Two pointers are used to keep track of a head and a tail. The pointers can “wrap around” the end of the buffer, which avoids the need to move other values around to make room. This makes shift and unshift very fast — something a Ds\Vector can’t compete with.

Accessing a value by index requires a translation between the index and its corresponding position in the buffer: ((head + position) % capacity).

## Strengths

- Supports array syntax (square brackets).
- Uses less overall memory than an array for the same number of values.
- Automatically frees allocated memory when its size drops low enough.
- get(), set(), push(), pop(), shift(), and unshift() are all O(1).

## Weaknesses

- Capacity must be a power of 2.
- insert() and remove() are O(n).

## Class synopsis

```
public allocate(int $capacity): void
```

```
public apply(callable $callback): void
```

```
public capacity(): int
```

```
public clear(): void
```

```
public contains(mixed ...$values): bool
```

```
public copy(): Ds\Deque
```

```
public filter(callable $callback = ?): Ds\Deque
```

```
public find(mixed $value): mixed
```

```
public first(): mixed
```

```
public get(int $index): mixed
```

```
public insert(int $index, mixed ...$values): void
```

```
public isEmpty(): bool
```

```
public join(string $glue = ?): string
```

```
public last(): mixed
```

```
public map(callable $callback): Ds\Deque
```

```
public merge(mixed $values): Ds\Deque
```

```
public pop(): mixed
```

```
public push(mixed ...$values): void
```

```
public reduce(callable $callback, mixed $initial = ?): mixed
```

```
public remove(int $index): mixed
```

```
public reverse(): void
```

```
public reversed(): Ds\Deque
```

```
public rotate(int $rotations): void
```

```
public set(int $index, mixed $value): void
```

```
public shift(): mixed
```

```
public slice(int $index, int $length = ?): Ds\Deque
```

```
public sort(callable $comparator = ?): void
```

```
public sorted(callable $comparator = ?): Ds\Deque
```

```
public sum(): int|float
```

```
public toArray(): array
```

```
public unshift(mixed $values = ?): void
```

## Predefined Constants

## Changelog

## Table of Contents

- Ds\Deque::allocate — Allocates enough memory for a required capacity
- Ds\Deque::apply — Updates all values by applying a callback function to each value
- Ds\Deque::capacity — Returns the current capacity
- Ds\Deque::clear — Removes all values from the deque
- Ds\Deque::__construct — Creates a new instance
- Ds\Deque::contains — Determines if the deque contains given values
- Ds\Deque::copy — Returns a shallow copy of the deque
- Ds\Deque::count — Returns the number of values in the collection
- Ds\Deque::filter — Creates a new deque using a callable to determine which values to include
- Ds\Deque::find — Attempts to find a value's index
- Ds\Deque::first — Returns the first value in the deque
- Ds\Deque::get — Returns the value at a given index
- Ds\Deque::insert — Inserts values at a given index
- Ds\Deque::isEmpty — Returns whether the deque is empty
- Ds\Deque::join — Joins all values together as a string
- Ds\Deque::jsonSerialize — Returns a representation that can be converted to JSON
- Ds\Deque::last — Returns the last value
- Ds\Deque::map — Returns the result of applying a callback to each value
- Ds\Deque::merge — Returns the result of adding all given values to the deque
- Ds\Deque::pop — Removes and returns the last value
- Ds\Deque::push — Adds values to the end of the deque
- Ds\Deque::reduce — Reduces the deque to a single value using a callback function
- Ds\Deque::remove — Removes and returns a value by index
- Ds\Deque::reverse — Reverses the deque in-place
- Ds\Deque::reversed — Returns a reversed copy
- Ds\Deque::rotate — Rotates the deque by a given number of rotations
- Ds\Deque::set — Updates a value at a given index
- Ds\Deque::shift — Removes and returns the first value
- Ds\Deque::slice — Returns a sub-deque of a given range
- Ds\Deque::sort — Sorts the deque in-place
- Ds\Deque::sorted — Returns a sorted copy
- Ds\Deque::sum — Returns the sum of all values in the deque
- Ds\Deque::toArray — Converts the deque to an array
- Ds\Deque::unshift — Adds values to the front of the deque

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-deque.php
