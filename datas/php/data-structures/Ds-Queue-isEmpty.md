# Ds\Queue::isEmpty

Source: https://devdocs.io/php/ds-queue.isempty

(PECL ds >= 1.0.0)

Ds\Queue::isEmpty — Returns whether the queue is empty

### Description

```
public Ds\Queue::isEmpty(): bool
```

Returns whether the queue is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the queue is empty, false otherwise.

### Examples

Example #1 Ds\Queue::isEmpty() example

```
<?php
$a = new \Ds\Queue([1, 2, 3]);
$b = new \Ds\Queue();

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
 https://www.php.net/manual/en/ds-queue.isempty.php
