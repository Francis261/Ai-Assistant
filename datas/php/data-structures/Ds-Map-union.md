# Ds\Map::union

Source: https://devdocs.io/php/ds-map.union

(PECL ds >= 1.0.0)

Ds\Map::union — Creates a new map using values from the current instance and another map

### Description

```
public Ds\Map::union(Ds\Map $map): Ds\Map
```

Creates a new map that contains the pairs of the current instance as well as the pairs of another map.

A ∪ B = {x: x ∈ A ∨ x ∈ B}

Note:

Values of the current instance will be overwritten by those provided where keys are equal.

### Parameters

The other map, to combine with the current instance.

### Return Values

A new map containing all the pairs of the current instance as well as another map.

### See Also

- » Union on Wikipedia

### Examples

Example #1 Ds\Map::union() example

```
<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 3, "c" => 4, "d" => 5]);

print_r($a->union($b));
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
            [value] => 3
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 4
        )

    [3] => Ds\Pair Object
        (
            [key] => d
            [value] => 5
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.union.php
