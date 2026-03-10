# The SplQueue class

Source: https://devdocs.io/php/class.splqueue

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplQueue class provides the main functionalities of a queue implemented using a doubly linked list by setting the iterator mode to SplDoublyLinkedList::IT_MODE_FIFO.

## Class synopsis

```
public dequeue(): mixed
```

```
public enqueue(mixed $value): void
```

```
public SplDoublyLinkedList::add(int $index, mixed $value): void
```

```
public SplDoublyLinkedList::bottom(): mixed
```

```
public SplDoublyLinkedList::count(): int
```

```
public SplDoublyLinkedList::current(): mixed
```

```
public SplDoublyLinkedList::getIteratorMode(): int
```

```
public SplDoublyLinkedList::isEmpty(): bool
```

```
public SplDoublyLinkedList::key(): int
```

```
public SplDoublyLinkedList::next(): void
```

```
public SplDoublyLinkedList::offsetExists(int $index): bool
```

```
public SplDoublyLinkedList::offsetGet(int $index): mixed
```

```
public SplDoublyLinkedList::offsetSet(?int $index, mixed $value): void
```

```
public SplDoublyLinkedList::offsetUnset(int $index): void
```

```
public SplDoublyLinkedList::pop(): mixed
```

```
public SplDoublyLinkedList::prev(): void
```

```
public SplDoublyLinkedList::push(mixed $value): void
```

```
public SplDoublyLinkedList::rewind(): void
```

```
public SplDoublyLinkedList::serialize(): string
```

```
public SplDoublyLinkedList::setIteratorMode(int $mode): int
```

```
public SplDoublyLinkedList::shift(): mixed
```

```
public SplDoublyLinkedList::top(): mixed
```

```
public SplDoublyLinkedList::unserialize(string $data): void
```

```
public SplDoublyLinkedList::unshift(mixed $value): void
```

```
public SplDoublyLinkedList::valid(): bool
```

## Examples

Example #1 SplQueue example

```
<?php
$q = new SplQueue();
$q[] = 1;
$q[] = 2;
$q[] = 3;
foreach ($q as $elem)  {
 echo $elem."\n";
}
?>
```

The above example will output:

```
1
2
3
```

Example #2 Efficiently handling tasks with SplQueue

```
<?php
$q = new SplQueue();
$q->setIteratorMode(SplQueue::IT_MODE_DELETE);
// ... enqueue some tasks on the queue ...
// process them
foreach ($q as $task) {
    // ... process $task ...
    // add new tasks on the queue
    $q[] = $newTask;
    // ...
}
?>
```

## Table of Contents

- SplQueue::dequeue — Dequeues a node from the queue
- SplQueue::enqueue — Adds an element to the queue

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splqueue.php
