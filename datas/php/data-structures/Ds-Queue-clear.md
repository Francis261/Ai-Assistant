# Ds\Queue::clear

Source: https://devdocs.io/php/ds-queue.clear

(PECL ds >= 1.0.0)

Ds\Queue::clear — Removes all values

### Description

```
public Ds\Queue::clear(): void
```

Removes all values from the queue.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Queue::clear() example

```
<?php
$queue = new \Ds\Queue([1, 2, 3]);
print_r($queue);

$queue->clear();
print_r($queue);
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
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.clear.php
