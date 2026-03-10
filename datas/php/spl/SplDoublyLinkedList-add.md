# SplDoublyLinkedList::add

Source: https://devdocs.io/php/spldoublylinkedlist.add

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

SplDoublyLinkedList::add — Add/insert a new value at the specified index

### Description

```
public SplDoublyLinkedList::add(int $index, mixed $value): void
```

Insert the value value at the specified index, shuffling the previous value at that index (and all subsequent values) up through the list.

### Parameters

The index where the new value is to be inserted.

The new value for the index.

### Return Values

No value is returned.

### Errors/Exceptions

Throws OutOfRangeException when index is out of bounds or when index cannot be parsed as an integer.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spldoublylinkedlist.add.php
