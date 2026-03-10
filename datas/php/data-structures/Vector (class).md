# The Vector class

Source: https://devdocs.io/php/class.ds-vector

## Introduction

(PECL ds >= 1.0.0)

A Vector is a sequence of values in a contiguous buffer that grows and shrinks automatically. It’s the most efficient sequential structure because a value’s index is a direct mapping to its index in the buffer, and the growth factor isn't bound to a specific multiple or exponent.

## Strengths

- Supports array syntax (square brackets).
- Uses less overall memory than an array for the same number of values.
- Automatically frees allocated memory when its size drops low enough.
- Capacity does not have to be a power of 2.
- get(), set(), push(), pop() are all O(1).

## Weaknesses

- shift(), unshift(), insert() and remove() are all O(n).

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
public copy(): Ds\Vector
```

```
public filter(callable $callback = ?): Ds\Vector
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
public map(callable $callback): Ds\Vector
```

```
public merge(mixed $values): Ds\Vector
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
public reversed(): Ds\Vector
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
public slice(int $index, int $length = ?): Ds\Vector
```

```
public sort(callable $comparator = ?): void
```

```
public sorted(callable $comparator = ?): Ds\Vector
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

- Ds\Vector::allocate — Allocates enough memory for a required capacity
- Ds\Vector::apply — Updates all values by applying a callback function to each value
- Ds\Vector::capacity — Returns the current capacity
- Ds\Vector::clear — Removes all values
- Ds\Vector::__construct — Creates a new instance
- Ds\Vector::contains — Determines if the vector contains given values
- Ds\Vector::copy — Returns a shallow copy of the vector
- Ds\Vector::count — Returns the number of values in the collection
- Ds\Vector::filter — Creates a new vector using a callable to determine which values to include
- Ds\Vector::find — Attempts to find a value's index
- Ds\Vector::first — Returns the first value in the vector
- Ds\Vector::get — Returns the value at a given index
- Ds\Vector::insert — Inserts values at a given index
- Ds\Vector::isEmpty — Returns whether the vector is empty
- Ds\Vector::join — Joins all values together as a string
- Ds\Vector::jsonSerialize — Returns a representation that can be converted to JSON
- Ds\Vector::last — Returns the last value
- Ds\Vector::map — Returns the result of applying a callback to each value
- Ds\Vector::merge — Returns the result of adding all given values to the vector
- Ds\Vector::pop — Removes and returns the last value
- Ds\Vector::push — Adds values to the end of the vector
- Ds\Vector::reduce — Reduces the vector to a single value using a callback function
- Ds\Vector::remove — Removes and returns a value by index
- Ds\Vector::reverse — Reverses the vector in-place
- Ds\Vector::reversed — Returns a reversed copy
- Ds\Vector::rotate — Rotates the vector by a given number of rotations
- Ds\Vector::set — Updates a value at a given index
- Ds\Vector::shift — Removes and returns the first value
- Ds\Vector::slice — Returns a sub-vector of a given range
- Ds\Vector::sort — Sorts the vector in-place
- Ds\Vector::sorted — Returns a sorted copy
- Ds\Vector::sum — Returns the sum of all values in the vector
- Ds\Vector::toArray — Converts the vector to an array
- Ds\Vector::unshift — Adds values to the front of the vector

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-vector.php
