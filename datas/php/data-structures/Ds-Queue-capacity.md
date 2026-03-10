# Ds\Queue::capacity

Source: https://devdocs.io/php/ds-queue.capacity

(PECL ds >= 1.0.0)

Ds\Queue::capacity — Returns the current capacity

### Description

```
public Ds\Queue::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\Queue::capacity() example

```
<?php
$queue = new \Ds\Queue();
var_dump($queue->capacity());

$queue->push(...range(1, 50));
var_dump($queue->capacity());
?>
```

The above example will output something similar to:

```
int(8)
int(64)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.capacity.php
