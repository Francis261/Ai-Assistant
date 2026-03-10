# Ds\PriorityQueue::peek

Source: https://devdocs.io/php/ds-priorityqueue.peek

(PECL ds >= 1.0.0)

Ds\PriorityQueue::peek — Returns the value at the front of the queue

### Description

```
public Ds\PriorityQueue::peek(): mixed
```

Returns the value at the front of the queue, but does not remove it.

### Parameters

This function has no parameters.

### Return Values

The value at the front of the queue.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\PriorityQueue::peek() example

```
<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

var_dump($queue->peek());
?>
```

The above example will output something similar to:

```
string(1) "b"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.peek.php
