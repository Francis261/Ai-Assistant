# Ds\Deque::sorted

Source: https://devdocs.io/php/ds-deque.sorted

(PECL ds >= 1.0.0)

Ds\Deque::sorted — Returns a sorted copy

### Description

```
public Ds\Deque::sorted(callable $comparator = ?): Ds\Deque
```

Returns a sorted copy, using an optional comparator function.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

Returns a sorted copy of the deque.

### Examples

Example #1 Ds\Deque::sorted() example

```
<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);

print_r($deque->sorted());
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
    [4] => 5
)
```

Example #2 Ds\Deque::sorted() example using a comparator

```
<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);

$sorted = $deque->sorted(function($a, $b) {
    return $b <=> $a;
});

print_r($sorted);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => 5
    [1] => 4
    [2] => 3
    [3] => 2
    [4] => 1
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.sorted.php
