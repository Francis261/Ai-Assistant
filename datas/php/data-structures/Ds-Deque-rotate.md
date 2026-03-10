# Ds\Deque::rotate

Source: https://devdocs.io/php/ds-deque.rotate

(PECL ds >= 1.0.0)

Ds\Deque::rotate — Rotates the deque by a given number of rotations

### Description

```
public Ds\Deque::rotate(int $rotations): void
```

Rotates the deque by a given number of rotations, which is equivalent to successively calling $deque->push($deque->shift()) if the number of rotations is positive, or $deque->unshift($deque->pop()) if negative.

### Parameters

The number of times the deque should be rotated.

### Return Values

No value is returned.. The deque of the current instance will be rotated.

### Examples

Example #1 Ds\Deque::rotate() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c", "d"]);

$deque->rotate(1);  // "a" is shifted, then pushed.
print_r($deque);

$deque->rotate(2);  // "b" and "c" are both shifted, the pushed.
print_r($deque);
?>
```

The above example will output something similar to:

```
(
    [0] => b
    [1] => c
    [2] => d
    [3] => a
)
Ds\Deque Object
(
    [0] => d
    [1] => a
    [2] => b
    [3] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.rotate.php
