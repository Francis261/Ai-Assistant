# Ds\PriorityQueue::pop

Source: https://devdocs.io/php/ds-priorityqueue.pop

(PECL ds >= 1.0.0)

Ds\PriorityQueue::pop — Removes and returns the value with the highest priority

### Description

```
public Ds\PriorityQueue::pop(): mixed
```

Removes and returns the value at the front of the queue, ie. the value with the highest priority.

Note:

Values with equal priority fall back to FIFO (first in first out).

### Parameters

This function has no parameters.

### Return Values

The removed value which was at the front of the queue.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\PriorityQueue::pop() example

```
<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

print_r($queue->pop());
print_r($queue->pop());
print_r($queue->pop());
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.pop.php
