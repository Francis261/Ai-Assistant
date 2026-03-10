# Ds\Deque::reverse

Source: https://devdocs.io/php/ds-deque.reverse

(PECL ds >= 1.0.0)

Ds\Deque::reverse — Reverses the deque in-place

### Description

```
public Ds\Deque::reverse(): void
```

Reverses the deque in-place.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Deque::reverse() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);
$deque->reverse();

print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => c
    [1] => b
    [2] => a
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.reverse.php
