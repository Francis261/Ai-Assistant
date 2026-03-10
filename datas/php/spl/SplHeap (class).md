# The SplHeap class

Source: https://devdocs.io/php/class.splheap

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplHeap class provides the main functionalities of a Heap.

## Class synopsis

```
protected compare(mixed $value1, mixed $value2): int
```

```
public count(): int
```

```
public current(): mixed
```

```
public extract(): mixed
```

```
public insert(mixed $value): true
```

```
public isCorrupted(): bool
```

```
public isEmpty(): bool
```

```
public key(): int
```

```
public next(): void
```

```
public recoverFromCorruption(): true
```

```
public rewind(): void
```

```
public top(): mixed
```

```
public valid(): bool
```

## Table of Contents

- SplHeap::compare — Compare elements in order to place them correctly in the heap while sifting up
- SplHeap::count — Counts the number of elements in the heap
- SplHeap::current — Return current node pointed by the iterator
- SplHeap::extract — Extracts a node from top of the heap and sift up
- SplHeap::insert — Inserts an element in the heap by sifting it up
- SplHeap::isCorrupted — Tells if the heap is in a corrupted state
- SplHeap::isEmpty — Checks whether the heap is empty
- SplHeap::key — Return current node index
- SplHeap::next — Move to the next node
- SplHeap::recoverFromCorruption — Recover from the corrupted state and allow further actions on the heap
- SplHeap::rewind — Rewind iterator back to the start (no-op)
- SplHeap::top — Peeks at the node from the top of the heap
- SplHeap::valid — Check whether the heap contains more nodes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splheap.php
