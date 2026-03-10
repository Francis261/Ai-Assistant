# Ds\Map::xor

Source: https://devdocs.io/php/ds-map.xor

(PECL ds >= 1.0.0)

Ds\Map::xor — Creates a new map using keys of either the current instance or of another map, but not of both

### Description

```
public Ds\Map::xor(Ds\Map $map): Ds\Map
```

Creates a new map containing keys of the current instance as well as another map, but not of both.

A ⊖ B = {x : x ∈ (A \ B) ∪ (B \ A)}

### Parameters

The other map.

### Return Values

A new map containing keys in the current instance as well as another map, but not in both.

### See Also

- » Symmetric Difference on Wikipedia

### Examples

Example #1 Ds\Map::xor() example

```
<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 4, "c" => 5, "d" => 6]);

print_r($a->xor($b));
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
            [key] => d
            [value] => 6
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.xor.php
