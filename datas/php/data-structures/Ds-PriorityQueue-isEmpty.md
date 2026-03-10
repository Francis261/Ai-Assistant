# Ds\PriorityQueue::isEmpty

Source: https://devdocs.io/php/ds-priorityqueue.isempty

(PECL ds >= 1.0.0)

Ds\PriorityQueue::isEmpty — Returns whether the queue is empty

### Description

```
public Ds\PriorityQueue::isEmpty(): bool
```

Returns whether the queue is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the queue is empty, false otherwise.

### Examples

Example #1 Ds\PriorityQueue::isEmpty() example

```
<?php
$a = new \Ds\PriorityQueue();
$b = new \Ds\PriorityQueue();

$a->push("a",  5);
$a->push("b", 15);
$a->push("c", 10);

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.isempty.php
