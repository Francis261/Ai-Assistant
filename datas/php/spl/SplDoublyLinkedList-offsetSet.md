# SplDoublyLinkedList::offsetSet

Source: https://devdocs.io/php/spldoublylinkedlist.offsetset

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplDoublyLinkedList::offsetSet — Sets the value at the specified $index to $value

### Description

```
public SplDoublyLinkedList::offsetSet(?int $index, mixed $value): void
```

Sets the value at the specified index to value.

### Parameters

The index being set. If null, the next value will be added after the last item.

The new value for the index.

### Return Values

No value is returned.

### Errors/Exceptions

Throws OutOfRangeException when index is out of bounds or when index cannot be parsed as an integer.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spldoublylinkedlist.offsetset.php
