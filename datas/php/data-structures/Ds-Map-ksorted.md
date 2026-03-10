# Ds\Map::ksorted

Source: https://devdocs.io/php/ds-map.ksorted

(No version information available, might only be in Git)

Ds\Map::ksorted — Returns a copy, sorted by key

### Description

```
public Ds\Map::ksorted(callable $comparator = ?): Ds\Map
```

Returns a copy sorted by key, using an optional comparator function.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

Returns a copy of the map, sorted by key.

### Examples

Example #1 Ds\Map::ksorted() example

```
<?php
$map = new \Ds\Map(["b" => 2, "c" => 3, "a" => 1]);

print_r($map->ksorted());
?>
```

The above example will output something similar to:

```
Ds\Map Object
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

Example #2 Ds\Map::ksorted() example using a comparator

```
<?php
$map = new \Ds\Map([1 => "x", 2 => "y", 0 => "z"]);

// Reverse
$sorted = $map->ksorted(function($a, $b) {
    return $b <=> $a;
});

print_r($sorted);
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
 https://www.php.net/manual/en/ds-map.ksorted.php
