# Ds\Map::diff

Source: https://devdocs.io/php/ds-map.diff

(PECL ds >= 1.0.0)

Ds\Map::diff — Creates a new map using keys that aren't in another map

### Description

```
public Ds\Map::diff(Ds\Map $map): Ds\Map
```

Returns the result of removing all keys from the current instance that are present in a given map.

A \ B = {x ∈ A | x ∉ B}

### Parameters

The map containing the keys to exclude in the resulting map.

### Return Values

The result of removing all keys from the current instance that are present in a given map.

### See Also

- » Complement on Wikipedia

### Examples

Example #1 Ds\Map::diff() example

```
<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 4, "c" => 5, "d" => 6]);

var_dump($a->diff($b));
?>
```

The above example will output something similar to:

```
object(Ds\Map)#3 (1) {
  [0]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    string(1) "a"
    ["value"]=>
    int(1)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.diff.php
