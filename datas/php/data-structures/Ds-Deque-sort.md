# Ds\Deque::sort

Source: https://devdocs.io/php/ds-deque.sort

(PECL ds >= 1.0.0)

Ds\Deque::sort — Sorts the deque in-place

### Description

```
public Ds\Deque::sort(callable $comparator = ?): void
```

Sorts the deque in-place, using an optional comparator function.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Deque::sort() example

```
<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);
$deque->sort();

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
    [3] => 4
    [4] => 5
)
```

Example #2 Ds\Deque::sort() example using a comparator

```
<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);

$deque->sort(function($a, $b) {
    return $b <=> $a;
});

print_r($deque);
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
 https://www.php.net/manual/en/ds-deque.sort.php
