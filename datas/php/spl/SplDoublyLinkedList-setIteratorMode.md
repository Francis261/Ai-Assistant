# SplDoublyLinkedList::setIteratorMode

Source: https://devdocs.io/php/spldoublylinkedlist.setiteratormode

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplDoublyLinkedList::setIteratorMode — Sets the mode of iteration

### Description

```
public SplDoublyLinkedList::setIteratorMode(int $mode): int
```

### Parameters

There are two orthogonal sets of modes that can be set:

- The direction of the iteration (either one or the other):
  - SplDoublyLinkedList::IT_MODE_LIFO (Stack style)
  - SplDoublyLinkedList::IT_MODE_FIFO (Queue style)
- The behavior of the iterator (either one or the other):
  - SplDoublyLinkedList::IT_MODE_DELETE (Elements are deleted by the iterator)
  - SplDoublyLinkedList::IT_MODE_KEEP (Elements are traversed by the iterator)

- SplDoublyLinkedList::IT_MODE_LIFO (Stack style)
- SplDoublyLinkedList::IT_MODE_FIFO (Queue style)

- SplDoublyLinkedList::IT_MODE_DELETE (Elements are deleted by the iterator)
- SplDoublyLinkedList::IT_MODE_KEEP (Elements are traversed by the iterator)

The default mode is: SplDoublyLinkedList::IT_MODE_FIFO | SplDoublyLinkedList::IT_MODE_KEEP

The direction of iteration can not be changed for SplStack and SplQueue classes, it is always SplDoublyLinkedList::IT_MODE_FIFO. Trying to modify it will result in a RuntimeException being thrown.

### Return Values

Returns the different modes and flags that affect the iteration.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spldoublylinkedlist.setiteratormode.php
