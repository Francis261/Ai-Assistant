# Ds\PriorityQueue::clear

Source: https://devdocs.io/php/ds-priorityqueue.clear

(PECL ds >= 1.0.0)

Ds\PriorityQueue::clear — Removes all values

### Description

```
public Ds\PriorityQueue::clear(): void
```

Removes all values from the queue.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\PriorityQueue::clear() example

```
<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

$queue->clear();
print_r($queue);
?>
```

The above example will output something similar to:

```
Ds\PriorityQueue Object
(
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.clear.php
