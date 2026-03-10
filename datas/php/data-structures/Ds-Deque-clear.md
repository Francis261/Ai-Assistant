# Ds\Deque::clear

Source: https://devdocs.io/php/ds-deque.clear

(PECL ds >= 1.0.0)

Ds\Deque::clear — Removes all values from the deque

### Description

```
public Ds\Deque::clear(): void
```

Removes all values from the deque.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Deque::clear() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);
print_r($deque);

$deque->clear();
print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Deque Object
(
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.clear.php
