# The Set class

Source: https://devdocs.io/php/class.ds-set

## Introduction

(PECL ds >= 1.0.0)

A Set is a sequence of unique values. This implementation uses the same hash table as Ds\Map, where values are used as keys and the mapped value is ignored.

## Strengths

- Values can be any type, including objects.
- Supports array syntax (square brackets).
- Insertion order is preserved.
- Automatically frees allocated memory when its size drops low enough.
- add(), remove() and contains() are all O(1).

## Weaknesses

- Doesn’t support push(), pop(), insert(), shift(), or unshift().
- get() is O(n) if there are deleted values in the buffer before the accessed index, O(1) otherwise.

## Class synopsis

```
public add(mixed ...$values): void
```

```
public allocate(int $capacity): void
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
public copy(): Ds\Set
```

```
public diff(Ds\Set $set): Ds\Set
```

```
public filter(callable $callback = ?): Ds\Set
```

```
public first(): mixed
```

```
public get(int $index): mixed
```

```
public intersect(Ds\Set $set): Ds\Set
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
public map(callable $callback): Ds\Set
```

```
public merge(mixed $values): Ds\Set
```

```
public reduce(callable $callback, mixed $initial = ?): mixed
```

```
public remove(mixed ...$values): void
```

```
public reverse(): void
```

```
public reversed(): Ds\Set
```

```
public slice(int $index, int $length = ?): Ds\Set
```

```
public sort(callable $comparator = ?): void
```

```
public sorted(callable $comparator = ?): Ds\Set
```

```
public sum(): int|float
```

```
public toArray(): array
```

```
public union(Ds\Set $set): Ds\Set
```

```
public xor(Ds\Set $set): Ds\Set
```

## Predefined Constants

## Changelog

## Table of Contents

- Ds\Set::add — Adds values to the set
- Ds\Set::allocate — Allocates enough memory for a required capacity
- Ds\Set::capacity — Returns the current capacity
- Ds\Set::clear — Removes all values
- Ds\Set::__construct — Creates a new instance
- Ds\Set::contains — Determines if the set contains all values
- Ds\Set::copy — Returns a shallow copy of the set
- Ds\Set::count — Returns the number of values in the set
- Ds\Set::diff — Creates a new set using values that aren't in another set
- Ds\Set::filter — Creates a new set using a callable to determine which values to include
- Ds\Set::first — Returns the first value in the set
- Ds\Set::get — Returns the value at a given index
- Ds\Set::intersect — Creates a new set by intersecting values with another set
- Ds\Set::isEmpty — Returns whether the set is empty
- Ds\Set::join — Joins all values together as a string
- Ds\Set::jsonSerialize — Returns a representation that can be converted to JSON
- Ds\Set::last — Returns the last value in the set
- Ds\Set::map — Returns the result of applying a callback to each value
- Ds\Set::merge — Returns the result of adding all given values to the set
- Ds\Set::reduce — Reduces the set to a single value using a callback function
- Ds\Set::remove — Removes all given values from the set
- Ds\Set::reverse — Reverses the set in-place
- Ds\Set::reversed — Returns a reversed copy
- Ds\Set::slice — Returns a sub-set of a given range
- Ds\Set::sort — Sorts the set in-place
- Ds\Set::sorted — Returns a sorted copy
- Ds\Set::sum — Returns the sum of all values in the set
- Ds\Set::toArray — Converts the set to an array
- Ds\Set::union — Creates a new set using values from the current instance and another set
- Ds\Set::xor — Creates a new set using values in either the current instance or in another set, but not in both

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-set.php
