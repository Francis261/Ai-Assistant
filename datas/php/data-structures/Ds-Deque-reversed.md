# Ds\Deque::reversed

Source: https://devdocs.io/php/ds-deque.reversed

(PECL ds >= 1.0.0)

Ds\Deque::reversed — Returns a reversed copy

### Description

```
public Ds\Deque::reversed(): Ds\Deque
```

Returns a reversed copy of the deque.

### Parameters

This function has no parameters.

### Return Values

A reversed copy of the deque.

Note:

The current instance is not affected.

### Examples

Example #1 Ds\Deque::reversed() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

print_r($deque->reversed());
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
Ds\Deque Object
(
    [0] => a
    [1] => b
    [2] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.reversed.php
