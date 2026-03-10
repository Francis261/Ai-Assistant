# Ds\PriorityQueue::push

Source: https://devdocs.io/php/ds-priorityqueue.push

(PECL ds >= 1.0.0)

Ds\PriorityQueue::push — Pushes values into the queue

### Description

```
public Ds\PriorityQueue::push(mixed $value, int $priority): void
```

Pushes a value with a given priority into the queue.

### Parameters

The value to push into the queue.

The priority associated with the value.

### Return Values

No value is returned.

### Examples

Example #1 Ds\PriorityQueue::push() example

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
string(1) "b"
string(1) "c"
string(1) "a"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.push.php
