# Ds\Queue::copy

Source: https://devdocs.io/php/ds-queue.copy

(PECL ds >= 1.0.0)

Ds\Queue::copy — Returns a shallow copy of the queue

### Description

```
public Ds\Queue::copy(): Ds\Queue
```

Returns a shallow copy of the queue.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the queue.

### Examples

Example #1 Ds\Queue::copy() example

```
<?php
$a = new \Ds\Queue([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->push(4);

print_r($a);
print_r($b);
?>
```

The above example will output something similar to:

```
Ds\Queue Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Queue Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.copy.php
