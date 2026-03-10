# The Map class

Source: https://devdocs.io/php/class.ds-map

## Introduction

(PECL ds >= 1.0.0)

A Map is a sequential collection of key-value pairs, almost identical to an array used in a similar context. Keys can be any type, but must be unique. Values are replaced if added to the map using the same key.

## Strengths

- Keys and values can be any type, including objects.
- Supports array syntax (square brackets).
- Insertion order is preserved.
- Performance and memory efficiency is very similar to an array.
- Automatically frees allocated memory when its size drops low enough.

## Weaknesses

- Can’t be converted to an array when objects are used as keys.

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
public copy(): Ds\Map
```

```
public diff(Ds\Map $map): Ds\Map
```

```
public filter(callable $callback = ?): Ds\Map
```

```
public first(): Ds\Pair
```

```
public get(mixed $key, mixed $default = ?): mixed
```

```
public hasKey(mixed $key): bool
```

```
public hasValue(mixed $value): bool
```

```
public intersect(Ds\Map $map): Ds\Map
```

```
public isEmpty(): bool
```

```
public keys(): Ds\Set
```

```
public ksort(callable $comparator = ?): void
```

```
public ksorted(callable $comparator = ?): Ds\Map
```

```
public last(): Ds\Pair
```

```
public map(callable $callback): Ds\Map
```

```
public merge(mixed $values): Ds\Map
```

```
public pairs(): Ds\Sequence
```

```
public put(mixed $key, mixed $value): void
```

```
public putAll(mixed $pairs): void
```

```
public reduce(callable $callback, mixed $initial = ?): mixed
```

```
public remove(mixed $key, mixed $default = ?): mixed
```

```
public reverse(): void
```

```
public reversed(): Ds\Map
```

```
public skip(int $position): Ds\Pair
```

```
public slice(int $index, int $length = ?): Ds\Map
```

```
public sort(callable $comparator = ?): void
```

```
public sorted(callable $comparator = ?): Ds\Map
```

```
public sum(): int|float
```

```
public toArray(): array
```

```
public union(Ds\Map $map): Ds\Map
```

```
public values(): Ds\Sequence
```

```
public xor(Ds\Map $map): Ds\Map
```

## Predefined Constants

## Changelog

## Table of Contents

- Ds\Map::allocate — Allocates enough memory for a required capacity
- Ds\Map::apply — Updates all values by applying a callback function to each value
- Ds\Map::capacity — Returns the current capacity
- Ds\Map::clear — Removes all values
- Ds\Map::__construct — Creates a new instance
- Ds\Map::copy — Returns a shallow copy of the map
- Ds\Map::count — Returns the number of values in the map
- Ds\Map::diff — Creates a new map using keys that aren't in another map
- Ds\Map::filter — Creates a new map using a callable to determine which pairs to include
- Ds\Map::first — Returns the first pair in the map
- Ds\Map::get — Returns the value for a given key
- Ds\Map::hasKey — Determines whether the map contains a given key
- Ds\Map::hasValue — Determines whether the map contains a given value
- Ds\Map::intersect — Creates a new map by intersecting keys with another map
- Ds\Map::isEmpty — Returns whether the map is empty
- Ds\Map::jsonSerialize — Returns a representation that can be converted to JSON
- Ds\Map::keys — Returns a set of the map's keys
- Ds\Map::ksort — Sorts the map in-place by key
- Ds\Map::ksorted — Returns a copy, sorted by key
- Ds\Map::last — Returns the last pair of the map
- Ds\Map::map — Returns the result of applying a callback to each value
- Ds\Map::merge — Returns the result of adding all given associations
- Ds\Map::pairs — Returns a sequence containing all the pairs of the map
- Ds\Map::put — Associates a key with a value
- Ds\Map::putAll — Associates all key-value pairs of a traversable object or array
- Ds\Map::reduce — Reduces the map to a single value using a callback function
- Ds\Map::remove — Removes and returns a value by key
- Ds\Map::reverse — Reverses the map in-place
- Ds\Map::reversed — Returns a reversed copy
- Ds\Map::skip — Returns the pair at a given positional index
- Ds\Map::slice — Returns a subset of the map defined by a starting index and length
- Ds\Map::sort — Sorts the map in-place by value
- Ds\Map::sorted — Returns a copy, sorted by value
- Ds\Map::sum — Returns the sum of all values in the map
- Ds\Map::toArray — Converts the map to an array
- Ds\Map::union — Creates a new map using values from the current instance and another map
- Ds\Map::values — Returns a sequence of the map's values
- Ds\Map::xor — Creates a new map using keys of either the current instance or of another map, but not of both

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-map.php
