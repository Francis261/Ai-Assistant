# Ds\Deque::unshift

Source: https://devdocs.io/php/ds-deque.unshift

(PECL ds >= 1.0.0)

Ds\Deque::unshift — Adds values to the front of the deque

### Description

```
public Ds\Deque::unshift(mixed $values = ?): void
```

Adds values to the front of the deque, moving all the current values forward to make room for the new values.

### Parameters

The values to add to the front of the deque.

Note:

Multiple values will be added in the same order that they are passed.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Deque::unshift() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);

$deque->unshift("a");
$deque->unshift("b", "c");

print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => b
    [1] => c
    [2] => a
    [3] => 1
    [4] => 2
    [5] => 3
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.unshift.php
