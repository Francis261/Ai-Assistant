# Ds\Queue::peek

Source: https://devdocs.io/php/ds-queue.peek

(PECL ds >= 1.0.0)

Ds\Queue::peek — Returns the value at the front of the queue

### Description

```
public Ds\Queue::peek(): mixed
```

Returns the value at the front of the queue, but does not remove it.

### Parameters

This function has no parameters.

### Return Values

The value at the front of the queue.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Queue::peek() example

```
<?php
$queue = new \Ds\Queue();

$queue->push("a");
$queue->push("b");
$queue->push("c");

var_dump($queue->peek());
?>
```

The above example will output something similar to:

```
string(1) "a"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.peek.php
