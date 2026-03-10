# Ds\Map::reduce

Source: https://devdocs.io/php/ds-map.reduce

(PECL ds >= 1.0.0)

Ds\Map::reduce — Reduces the map to a single value using a callback function

### Description

```
public Ds\Map::reduce(callable $callback, mixed $initial = ?): mixed
```

Reduces the map to a single value using a callback function.

### Parameters

```
callback(mixed $carry, mixed $key, mixed $value): mixed
```

The return value of the previous callback, or initial if it's the first iteration.

The key of the current iteration.

The value of the current iteration.

The initial value of the carry value. Can be null.

### Return Values

The return value of the final callback.

### Examples

Example #1 Ds\Map::reduce() with initial value example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

$callback = function($carry, $key, $value) {
    return $carry * $value;
};

var_dump($map->reduce($callback, 5));

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

Example #2 Ds\Map::reduce() without an initial value example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->reduce(function($carry, $key, $value) {
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
 https://www.php.net/manual/en/ds-map.reduce.php
