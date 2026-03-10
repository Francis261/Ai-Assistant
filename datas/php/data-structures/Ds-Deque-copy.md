# Ds\Deque::copy

Source: https://devdocs.io/php/ds-deque.copy

(PECL ds >= 1.0.0)

Ds\Deque::copy — Returns a shallow copy of the deque

### Description

```
public Ds\Deque::copy(): Ds\Deque
```

Returns a shallow copy of the deque.

### Parameters

This function has no parameters.

### Return Values

A shallow copy of the deque.

### Examples

Example #1 Ds\Deque::copy() example

```
<?php
$a = new \Ds\Deque([1, 2, 3]);
$b = $a->copy();

$b->push(4);

print_r($a);
print_r($b);
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
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.copy.php
