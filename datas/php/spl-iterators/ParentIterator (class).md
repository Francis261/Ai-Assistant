# The ParentIterator class

Source: https://devdocs.io/php/class.parentiterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

This extended FilterIterator allows a recursive iteration using RecursiveIteratorIterator that only shows those elements which have children.

## Class synopsis

```
public accept(): bool
```

```
public getChildren(): ParentIterator
```

```
public hasChildren(): bool
```

```
public next(): void
```

```
public rewind(): void
```

```
public RecursiveFilterIterator::getChildren(): ?RecursiveFilterIterator
```

```
public RecursiveFilterIterator::hasChildren(): bool
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

- ParentIterator::accept — Determines acceptability
- ParentIterator::__construct — Constructs a ParentIterator
- ParentIterator::getChildren — Return the inner iterator's children contained in a ParentIterator
- ParentIterator::hasChildren — Check whether the inner iterator's current element has children
- ParentIterator::next — Move the iterator forward
- ParentIterator::rewind — Rewind the iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.parentiterator.php
