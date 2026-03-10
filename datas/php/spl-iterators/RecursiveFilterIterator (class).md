# The RecursiveFilterIterator class

Source: https://devdocs.io/php/class.recursivefilteriterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

This abstract iterator filters out unwanted values for a RecursiveIterator. This class should be extended to implement custom filters. The RecursiveFilterIterator::accept() must be implemented in the subclass.

## Class synopsis

```
public getChildren(): ?RecursiveFilterIterator
```

```
public hasChildren(): bool
```

```
public FilterIterator::accept(): bool
```

```
public FilterIterator::current(): mixed
```

```
public FilterIterator::key(): mixed
```

```
public FilterIterator::next(): void
```

```
public FilterIterator::rewind(): void
```

```
public FilterIterator::valid(): bool
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

- RecursiveFilterIterator::__construct — Create a RecursiveFilterIterator from a RecursiveIterator
- RecursiveFilterIterator::getChildren — Return the inner iterator's children contained in a RecursiveFilterIterator
- RecursiveFilterIterator::hasChildren — Check whether the inner iterator's current element has children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursivefilteriterator.php
