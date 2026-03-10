# The FilterIterator class

Source: https://devdocs.io/php/class.filteriterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

This abstract iterator filters out unwanted values. This class should be extended to implement custom iterator filters. The FilterIterator::accept() must be implemented in the subclass.

## Class synopsis

```
public accept(): bool
```

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

- FilterIterator::accept — Check whether the current element of the iterator is acceptable
- FilterIterator::__construct — Construct a filterIterator
- FilterIterator::current — Get the current element value
- FilterIterator::key — Get the current key
- FilterIterator::next — Move the iterator forward
- FilterIterator::rewind — Rewind the iterator
- FilterIterator::valid — Check whether the current element is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.filteriterator.php
