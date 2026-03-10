# The MultipleIterator class

Source: https://devdocs.io/php/class.multipleiterator

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

An Iterator that sequentially iterates over all attached iterators

## Class synopsis

```
public attachIterator(Iterator $iterator, string|int|null $info = null): void
```

```
public containsIterator(Iterator $iterator): bool
```

```
public countIterators(): int
```

```
public current(): array
```

```
public detachIterator(Iterator $iterator): void
```

```
public getFlags(): int
```

```
public key(): array
```

```
public next(): void
```

```
public rewind(): void
```

```
public setFlags(int $flags): void
```

```
public valid(): bool
```

## Predefined Constants

Do not require all sub iterators to be valid in iteration.

Require all sub iterators to be valid in iteration.

Keys are created from the sub iterators position.

Keys are created from sub iterators associated information.

## Table of Contents

- MultipleIterator::attachIterator — Attaches iterator information
- MultipleIterator::__construct — Constructs a new MultipleIterator
- MultipleIterator::containsIterator — Checks if an iterator is attached
- MultipleIterator::countIterators — Gets the number of attached iterator instances
- MultipleIterator::current — Gets the registered iterator instances
- MultipleIterator::detachIterator — Detaches an iterator
- MultipleIterator::getFlags — Gets the flag information
- MultipleIterator::key — Gets the registered iterator instances
- MultipleIterator::next — Moves all attached iterator instances forward
- MultipleIterator::rewind — Rewinds all attached iterator instances
- MultipleIterator::setFlags — Sets flags
- MultipleIterator::valid — Checks the validity of sub iterators

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.multipleiterator.php
