# Ds\PriorityQueue::toArray

Source: https://devdocs.io/php/ds-priorityqueue.toarray

(PECL ds >= 1.0.0)

Ds\PriorityQueue::toArray — Converts the queue to an array

### Description

```
public Ds\PriorityQueue::toArray(): array
```

Converts the queue to an array.

Note:

This method is not destructive.

Note:

Casting to an array is not supported yet.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the queue.

### Examples

Example #1 Ds\PriorityQueue::toArray() example

```
<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

var_dump($queue->toArray());
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  string(1) "b"
  [1]=>
  string(1) "c"
  [2]=>
  string(1) "a"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.toarray.php
