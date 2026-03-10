# Ds\Map::values

Source: https://devdocs.io/php/ds-map.values

(PECL ds >= 1.0.0)

Ds\Map::values — Returns a sequence of the map's values

### Description

```
public Ds\Map::values(): Ds\Sequence
```

Returns a sequence containing all the values of the map, in the same order.

### Parameters

This function has no parameters.

### Return Values

A Ds\Sequence containing all the values of the map.

### Examples

Example #1 Ds\Map::values() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->values());
?>
```

The above example will output something similar to:

```
object(Ds\Vector)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.values.php
