# Ds\Queue::pop

Source: https://devdocs.io/php/ds-queue.pop

(PECL ds >= 1.0.0)

Ds\Queue::pop — Removes and returns the value at the front of the queue

### Description

```
public Ds\Queue::pop(): mixed
```

Removes and returns the value at the front of the queue.

### Parameters

This function has no parameters.

### Return Values

The removed value which was at the front of the queue.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Queue::pop() example

```
<?php
$queue = new \Ds\Queue();

$queue->push("a");
$queue->push("b");
$queue->push("c");

var_dump($queue->pop());
var_dump($queue->pop());
var_dump($queue->pop());
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.pop.php
