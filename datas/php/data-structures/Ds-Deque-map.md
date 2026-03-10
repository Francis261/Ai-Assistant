# Ds\Deque::map

Source: https://devdocs.io/php/ds-deque.map

(PECL ds >= 1.0.0)

Ds\Deque::map — Returns the result of applying a callback to each value

### Description

```
public Ds\Deque::map(callable $callback): Ds\Deque
```

Returns the result of applying a callback function to each value in the deque.

### Parameters

```
callback(mixed $value): mixed
```

A callable to apply to each value in the deque.

The callable should return what the new value will be in the new deque.

### Return Values

The result of applying a callback to each value in the deque.

Note:

The values of the current instance won't be affected.

### Examples

Example #1 Ds\Deque::map() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);

print_r($deque->map(function($value) { return $value * 2; }));
print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.map.php
