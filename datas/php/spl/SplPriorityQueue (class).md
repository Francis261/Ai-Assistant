# The SplPriorityQueue class

Source: https://devdocs.io/php/class.splpriorityqueue

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplPriorityQueue class provides the main functionalities of a prioritized queue, implemented using a max heap.

Note: The order of elements with identical priority is undefined. It may differ from the order in which they have been inserted.

## Class synopsis

```
public compare(mixed $priority1, mixed $priority2): int
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
public getExtractFlags(): int
```

```
public insert(mixed $value, mixed $priority): true
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
public setExtractFlags(int $flags): int
```

```
public top(): mixed
```

```
public valid(): bool
```

## Predefined Constants

## Table of Contents

- SplPriorityQueue::compare — Compare priorities in order to place elements correctly in the heap while sifting up
- SplPriorityQueue::count — Counts the number of elements in the queue
- SplPriorityQueue::current — Return current node pointed by the iterator
- SplPriorityQueue::extract — Extracts a node from top of the heap and sift up
- SplPriorityQueue::getExtractFlags — Get the flags of extraction
- SplPriorityQueue::insert — Inserts an element in the queue by sifting it up
- SplPriorityQueue::isCorrupted — Tells if the priority queue is in a corrupted state
- SplPriorityQueue::isEmpty — Checks whether the queue is empty
- SplPriorityQueue::key — Return current node index
- SplPriorityQueue::next — Move to the next node
- SplPriorityQueue::recoverFromCorruption — Recover from the corrupted state and allow further actions on the queue
- SplPriorityQueue::rewind — Rewind iterator back to the start (no-op)
- SplPriorityQueue::setExtractFlags — Sets the mode of extraction
- SplPriorityQueue::top — Peeks at the node from the top of the queue
- SplPriorityQueue::valid — Check whether the queue contains more nodes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splpriorityqueue.php
