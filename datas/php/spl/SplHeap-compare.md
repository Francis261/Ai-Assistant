# SplHeap::compare

Source: https://devdocs.io/php/splheap.compare

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplHeap::compare — Compare elements in order to place them correctly in the heap while sifting up

### Description

```
protected SplHeap::compare(mixed $value1, mixed $value2): int
```

Compare value1 with value2.

Throwing exceptions in SplHeap::compare() can corrupt the Heap and place it in a blocked state. You can unblock it by calling SplHeap::recoverFromCorruption(). However, some elements might not be placed correctly and it may hence break the heap-property.

### Parameters

The value of the first node being compared.

The value of the second node being compared.

### Return Values

Result of the comparison, positive integer if value1 is greater than value2, 0 if they are equal, negative integer otherwise.

Note:

Having multiple elements with the same value in a Heap is not recommended. They will end up in an arbitrary relative position.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splheap.compare.php
