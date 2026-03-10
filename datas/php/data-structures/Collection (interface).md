# The Collection interface

Source: https://devdocs.io/php/class.ds-collection

## Introduction

(PECL ds >= 1.0.0)

Collection is the base interface which covers functionality common to all the data structures in this library. It guarantees that all structures are traversable, countable, and can be converted to json using json_encode().

## Interface synopsis

```
public clear(): void
```

```
public copy(): Ds\Collection
```

```
public isEmpty(): bool
```

```
public toArray(): array
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

## Changelog

## Table of Contents

- Ds\Collection::clear — Removes all values
- Ds\Collection::copy — Returns a shallow copy of the collection
- Ds\Collection::isEmpty — Returns whether the collection is empty
- Ds\Collection::toArray — Converts the collection to an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-collection.php
