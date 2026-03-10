# SplPriorityQueue::compare

Source: https://devdocs.io/php/splpriorityqueue.compare

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplPriorityQueue::compare — Compare priorities in order to place elements correctly in the heap while sifting up

### Description

```
public SplPriorityQueue::compare(mixed $priority1, mixed $priority2): int
```

Compare priority1 with priority2.

### Parameters

The priority of the first node being compared.

The priority of the second node being compared.

### Return Values

Result of the comparison, positive integer if priority1 is greater than priority2, 0 if they are equal, negative integer otherwise.

Note:

Multiple elements with the same priority will get dequeued in no particular order.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splpriorityqueue.compare.php
