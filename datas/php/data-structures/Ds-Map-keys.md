# Ds\Map::keys

Source: https://devdocs.io/php/ds-map.keys

(PECL ds >= 1.0.0)

Ds\Map::keys — Returns a set of the map's keys

### Description

```
public Ds\Map::keys(): Ds\Set
```

Returns a set containing all the keys of the map, in the same order.

### Parameters

This function has no parameters.

### Return Values

A Ds\Set containing all the keys of the map.

### Examples

Example #1 Ds\Map::keys() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->keys());
?>
```

The above example will output something similar to:

```
object(Ds\Set)#2 (3) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
  [2]=>
  string(1) "c"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.keys.php
