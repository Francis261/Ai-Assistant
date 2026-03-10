# The RecursiveIteratorIterator class

Source: https://devdocs.io/php/class.recursiveiteratoriterator

## Introduction

(PHP 5, PHP 7, PHP 8)

Can be used to iterate through recursive iterators.

## Class synopsis

```
public beginChildren(): void
```

```
public beginIteration(): void
```

```
public callGetChildren(): ?RecursiveIterator
```

```
public callHasChildren(): bool
```

```
public current(): mixed
```

```
public endChildren(): void
```

```
public endIteration(): void
```

```
public getDepth(): int
```

```
public getInnerIterator(): RecursiveIterator
```

```
public getMaxDepth(): int|false
```

```
public getSubIterator(?int $level = null): ?RecursiveIterator
```

```
public key(): mixed
```

```
public next(): void
```

```
public nextElement(): void
```

```
public rewind(): void
```

```
public setMaxDepth(int $maxDepth = -1): void
```

```
public valid(): bool
```

## Predefined Constants

## Table of Contents

- RecursiveIteratorIterator::beginChildren — Begin children
- RecursiveIteratorIterator::beginIteration — Begin Iteration
- RecursiveIteratorIterator::callGetChildren — Get children
- RecursiveIteratorIterator::callHasChildren — Has children
- RecursiveIteratorIterator::__construct — Construct a RecursiveIteratorIterator
- RecursiveIteratorIterator::current — Access the current element value
- RecursiveIteratorIterator::endChildren — End children
- RecursiveIteratorIterator::endIteration — End Iteration
- RecursiveIteratorIterator::getDepth — Get the current depth of the recursive iteration
- RecursiveIteratorIterator::getInnerIterator — Get inner iterator
- RecursiveIteratorIterator::getMaxDepth — Get max depth
- RecursiveIteratorIterator::getSubIterator — The current active sub iterator
- RecursiveIteratorIterator::key — Access the current key
- RecursiveIteratorIterator::next — Move forward to the next element
- RecursiveIteratorIterator::nextElement — Next element
- RecursiveIteratorIterator::rewind — Rewind the iterator to the first element of the top level inner iterator
- RecursiveIteratorIterator::setMaxDepth — Set max depth
- RecursiveIteratorIterator::valid — Check whether the current position is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursiveiteratoriterator.php
