# Ds\PriorityQueue::copy

Source: https://devdocs.io/php/ds-priorityqueue.copy

(PECL ds >= 1.0.0)

Ds\PriorityQueue::copy — Returns a shallow copy of the queue

### Description

```
public Ds\PriorityQueue::copy(): Ds\PriorityQueue
```

Returns a shallow copy of the queue.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the queue.

### Examples

Example #1 Ds\PriorityQueue::copy() example

```
<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

print_r($queue->copy());
?>
```

The above example will output something similar to:

```
Ds\PriorityQueue Object
(
    [0] => b
    [1] => c
    [2] => a
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.copy.php
