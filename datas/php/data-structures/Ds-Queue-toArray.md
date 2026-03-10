# Ds\Queue::toArray

Source: https://devdocs.io/php/ds-queue.toarray

(PECL ds >= 1.0.0)

Ds\Queue::toArray — Converts the queue to an array

### Description

```
public Ds\Queue::toArray(): array
```

Converts the queue to an array.

Note:

Casting to an array is not supported yet.

Note:

This method is not destructive.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the queue.

### Examples

Example #1 Ds\Queue::toArray() example

```
<?php
$queue = new \Ds\Queue([1, 2, 3]);

var_dump($queue->toArray());
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.toarray.php
