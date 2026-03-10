# The InternalIterator class

Source: https://devdocs.io/php/class.internaliterator

## Introduction

(PHP 8)

Class to ease implementing IteratorAggregate for internal classes.

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

## Table of Contents

- InternalIterator::__construct — Private constructor to disallow direct instantiation
- InternalIterator::current — Return the current element
- InternalIterator::key — Return the key of the current element
- InternalIterator::next — Move forward to next element
- InternalIterator::rewind — Rewind the Iterator to the first element
- InternalIterator::valid — Check if current position is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.internaliterator.php
