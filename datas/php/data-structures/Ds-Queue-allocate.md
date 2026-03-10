# Ds\Queue::allocate

Source: https://devdocs.io/php/ds-queue.allocate

(PECL ds >= 1.0.0)

Ds\Queue::allocate — Allocates enough memory for a required capacity

### Description

```
public Ds\Queue::allocate(int $capacity): void
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal as values are added.

Note:

Capacity will always be rounded up to the nearest power of 2.

### Parameters

The number of values for which capacity should be allocated.

Note:

Capacity will stay the same if this value is less than or equal to the current capacity.

Note:

Capacity will always be rounded up to the nearest power of 2.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Queue::allocate() example

```
<?php
$queue = new \Ds\Queue();
var_dump($queue->capacity());

$queue->allocate(100);
var_dump($queue->capacity());
?>
```

The above example will output something similar to:

```
int(8)
int(128)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.allocate.php
