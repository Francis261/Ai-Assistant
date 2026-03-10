# Ds\Queue::push

Source: https://devdocs.io/php/ds-queue.push

(PECL ds >= 1.0.0)

Ds\Queue::push — Pushes values into the queue

### Description

```
public Ds\Queue::push(mixed ...$values): void
```

Pushes values into the queue.

### Parameters

The values to push into the queue.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Queue::push() example

```
<?php
$queue = new \Ds\Queue();

$queue->push("a");
$queue->push("b");
$queue->push("c", "d");
$queue->push(...["e", "f"]);

print_r($queue);
?>
```

The above example will output something similar to:

```
Ds\Queue Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-queue.push.php
