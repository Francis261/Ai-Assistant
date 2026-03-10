# The NoRewindIterator class

Source: https://devdocs.io/php/class.norewinditerator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

This iterator ignores rewind operations. This allows processing an iterator in multiple partial foreach loops.

## Class synopsis

```
public current(): mixed
```

```
public key(): mixed
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

- NoRewindIterator::__construct — Construct a NoRewindIterator
- NoRewindIterator::current — Get the current value
- NoRewindIterator::key — Get the current key
- NoRewindIterator::next — Forward to the next element
- NoRewindIterator::rewind — Prevents the rewind operation on the inner iterator
- NoRewindIterator::valid — Validates the iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.norewinditerator.php
