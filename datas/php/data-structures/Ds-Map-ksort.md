# Ds\Map::ksort

Source: https://devdocs.io/php/ds-map.ksort

(PECL ds >= 1.0.0)

Ds\Map::ksort — Sorts the map in-place by key

### Description

```
public Ds\Map::ksort(callable $comparator = ?): void
```

Sorts the map in-place by key, using an optional comparator function.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Map::ksort() example

```
<?php
$map = new \Ds\Map(["b" => 2, "c" => 3, "a" => 1]);
$map->ksort();

print_r($map);
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

)
```

Example #2 Ds\Map::ksort() example using a comparator

```
<?php
$map = new \Ds\Map([1 => "x", 2 => "y", 0 => "z"]);

// Reverse
$map->ksort(function($a, $b) {
    return $b <=> $a;
});

print_r($map);
?>
```

The above example will output something similar to:

```
Ds\Map Object
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => 2
            [value] => y
        )

    [1] => Ds\Pair Object
        (
            [key] => 1
            [value] => x
        )

    [2] => Ds\Pair Object
        (
            [key] => 0
            [value] => z
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.ksort.php
