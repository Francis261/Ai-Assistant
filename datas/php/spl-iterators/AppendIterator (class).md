# The AppendIterator class

Source: https://devdocs.io/php/class.appenditerator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

An Iterator that iterates over several iterators one after the other.

## Class synopsis

```
public append(Iterator $iterator): void
```

```
public current(): mixed
```

```
public getArrayIterator(): ArrayIterator
```

```
public getIteratorIndex(): ?int
```

```
public key(): scalar
```

```
public next(): void
```

```
public rewind(): void
```

```
public valid(): bool
```

```
public IteratorIterator::current(): mixed
```

```
public IteratorIterator::getInnerIterator(): ?Iterator
```

```
public IteratorIterator::key(): mixed
```

```
public IteratorIterator::next(): void
```

```
public IteratorIterator::rewind(): void
```

```
public IteratorIterator::valid(): bool
```

## Table of Contents

- AppendIterator::append — Appends an iterator
- AppendIterator::__construct — Constructs an AppendIterator
- AppendIterator::current — Gets the current value
- AppendIterator::getArrayIterator — Gets the ArrayIterator
- AppendIterator::getIteratorIndex — Gets an index of iterators
- AppendIterator::key — Gets the current key
- AppendIterator::next — Moves to the next element
- AppendIterator::rewind — Rewinds the Iterator
- AppendIterator::valid — Checks validity of the current element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.appenditerator.php
