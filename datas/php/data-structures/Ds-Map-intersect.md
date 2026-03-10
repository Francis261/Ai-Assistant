# Ds\Map::intersect

Source: https://devdocs.io/php/ds-map.intersect

(PECL ds >= 1.0.0)

Ds\Map::intersect — Creates a new map by intersecting keys with another map

### Description

```
public Ds\Map::intersect(Ds\Map $map): Ds\Map
```

Creates a new map containing the pairs of the current instance whose keys are also present in the given map. In other words, returns a copy of the current instance with all keys removed that are not also in the other map.

A ∩ B = {x : x ∈ A ∧ x ∈ B}

Note:

Values from the current instance will be kept.

### Parameters

The other map, containing the keys to intersect with.

### Return Values

The key intersection of the current instance and another map.

### See Also

- » Intersection on Wikipedia

### Examples

Example #1 Ds\Map::intersect() example

```
<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 4, "c" => 5, "d" => 6]);

var_dump($a->intersect($b));
?>
```

The above example will output something similar to:

```
object(Ds\Map)#3 (2) {
  [0]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    string(1) "b"
    ["value"]=>
    int(2)
  }
  [1]=>
  object(Ds\Pair)#5 (2) {
    ["key"]=>
    string(1) "c"
    ["value"]=>
    int(3)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.intersect.php
