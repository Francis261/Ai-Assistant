# Ds\PriorityQueue::capacity

Source: https://devdocs.io/php/ds-priorityqueue.capacity

(PECL ds >= 1.0.0)

Ds\PriorityQueue::capacity — Returns the current capacity

### Description

```
public Ds\PriorityQueue::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\PriorityQueue::capacity() example

```
<?php
$queue = new \Ds\PriorityQueue();
var_dump($queue->capacity());
?>
```

The above example will output something similar to:

```
int(8)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-priorityqueue.capacity.php
