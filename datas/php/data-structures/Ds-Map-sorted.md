# Ds\Map::sorted

Source: https://devdocs.io/php/ds-map.sorted

(PECL ds >= 1.0.0)

Ds\Map::sorted — Returns a copy, sorted by value

### Description

```
public Ds\Map::sorted(callable $comparator = ?): Ds\Map
```

Returns a copy, sorted by value using an optional comparator function.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

Returns a copy of the map, sorted by value.

### Examples

Example #1 Ds\Map::sort() example

```
<?php
$map = new \Ds\Map(["a" => 2, "b" => 3, "c" => 1]);

print_r($map->sorted());
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => c
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => a
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => b
            [value] => 3
        )

)
```

Example #2 Ds\Map::sort() example using a comparator

```
<?php
$map = new \Ds\Map(["a" => 2, "b" => 3, "c" => 1]);

// Reverse
$sorted = $map->sorted(function($a, $b) {
    return $b <=> $a;
});

print_r($sorted);
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => b
            [value] => 3
        )

    [1] => Ds\Pair Object
        (
            [key] => a
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 1
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.sorted.php
