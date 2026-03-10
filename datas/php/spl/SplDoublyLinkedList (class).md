# The SplDoublyLinkedList class

Source: https://devdocs.io/php/class.spldoublylinkedlist

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplDoublyLinkedList class provides the main functionalities of a doubly linked list.

## Class synopsis

```
public add(int $index, mixed $value): void
```

```
public bottom(): mixed
```

```
public count(): int
```

```
public current(): mixed
```

```
public getIteratorMode(): int
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
public offsetExists(int $index): bool
```

```
public offsetGet(int $index): mixed
```

```
public offsetSet(?int $index, mixed $value): void
```

```
public offsetUnset(int $index): void
```

```
public pop(): mixed
```

```
public prev(): void
```

```
public push(mixed $value): void
```

```
public rewind(): void
```

```
public serialize(): string
```

```
public setIteratorMode(int $mode): int
```

```
public shift(): mixed
```

```
public top(): mixed
```

```
public unserialize(string $data): void
```

```
public unshift(mixed $value): void
```

```
public valid(): bool
```

## Predefined Constants

## Iteration Direction

The list will be iterated in a last in, first out order, like a stack.

The list will be iterated in a first in, first out order, like a queue.

## Iteration Behavior

Iteration will remove the iterated elements.

Iteration will not remove the iterated elements.

## Table of Contents

- SplDoublyLinkedList::add — Add/insert a new value at the specified index
- SplDoublyLinkedList::bottom — Peeks at the node from the beginning of the doubly linked list
- SplDoublyLinkedList::count — Counts the number of elements in the doubly linked list
- SplDoublyLinkedList::current — Return current array entry
- SplDoublyLinkedList::getIteratorMode — Returns the mode of iteration
- SplDoublyLinkedList::isEmpty — Checks whether the doubly linked list is empty
- SplDoublyLinkedList::key — Return current node index
- SplDoublyLinkedList::next — Move to next entry
- SplDoublyLinkedList::offsetExists — Returns whether the requested $index exists
- SplDoublyLinkedList::offsetGet — Returns the value at the specified $index
- SplDoublyLinkedList::offsetSet — Sets the value at the specified $index to $value
- SplDoublyLinkedList::offsetUnset — Unsets the value at the specified $index
- SplDoublyLinkedList::pop — Pops a node from the end of the doubly linked list
- SplDoublyLinkedList::prev — Move to previous entry
- SplDoublyLinkedList::push — Pushes an element at the end of the doubly linked list
- SplDoublyLinkedList::rewind — Rewind iterator back to the start
- SplDoublyLinkedList::serialize — Serializes the storage
- SplDoublyLinkedList::setIteratorMode — Sets the mode of iteration
- SplDoublyLinkedList::shift — Shifts a node from the beginning of the doubly linked list
- SplDoublyLinkedList::top — Peeks at the node from the end of the doubly linked list
- SplDoublyLinkedList::unserialize — Unserializes the storage
- SplDoublyLinkedList::unshift — Prepends the doubly linked list with an element
- SplDoublyLinkedList::valid — Check whether the doubly linked list contains more nodes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.spldoublylinkedlist.php
