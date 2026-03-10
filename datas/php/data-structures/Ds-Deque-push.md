# Ds\Deque::push

Source: https://devdocs.io/php/ds-deque.push

(PECL ds >= 1.0.0)

Ds\Deque::push — Adds values to the end of the deque

### Description

```
public Ds\Deque::push(mixed ...$values): void
```

Adds values to the end of the deque.

### Parameters

The values to add.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Deque::push() example

```
<?php
$deque = new \Ds\Deque();

$deque->push("a");
$deque->push("b");
$deque->push("c", "d");
$deque->push(...["e", "f"]);

print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
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
 https://www.php.net/manual/en/ds-deque.push.php
