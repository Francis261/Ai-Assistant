# Ds\Deque::reduce

Source: https://devdocs.io/php/ds-deque.reduce

(PECL ds >= 1.0.0)

Ds\Deque::reduce — Reduces the deque to a single value using a callback function

### Description

```
public Ds\Deque::reduce(callable $callback, mixed $initial = ?): mixed
```

Reduces the deque to a single value using a callback function.

### Parameters

```
callback(mixed $carry, mixed $value): mixed
```

The return value of the previous callback, or initial if it's the first iteration.

The value of the current iteration.

The initial value of the carry value. Can be null.

### Return Values

The return value of the final callback.

### Examples

Example #1 Ds\Deque::reduce() with initial value example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);

$callback = function($carry, $value) {
    return $carry * $value;
};

var_dump($deque->reduce($callback, 5));

// Iterations:
//
// $carry = $initial = 5
//
// $carry = $carry * 1 =  5
// $carry = $carry * 2 = 10
// $carry = $carry * 3 = 30
?>
```

The above example will output something similar to:

```
int(30)
```

Example #2 Ds\Deque::reduce() without an initial value example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);

var_dump($deque->reduce(function($carry, $value) {
    return $carry + $value + 5;
}));

// Iterations:
//
// $carry = $initial = null
//
// $carry = $carry + 1 + 5 =  6
// $carry = $carry + 2 + 5 = 13
// $carry = $carry + 3 + 5 = 21
?>
```

The above example will output something similar to:

```
int(21)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.reduce.php
