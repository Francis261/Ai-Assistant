# The InfiniteIterator class

Source: https://devdocs.io/php/class.infiniteiterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The InfiniteIterator allows one to infinitely iterate over an iterator without having to manually rewind the iterator upon reaching its end.

## Class synopsis

```
public next(): void
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

- InfiniteIterator::__construct — Constructs an InfiniteIterator
- InfiniteIterator::next — Moves the inner Iterator forward or rewinds it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.infiniteiterator.php
