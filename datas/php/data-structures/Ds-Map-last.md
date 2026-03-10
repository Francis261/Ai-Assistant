# Ds\Map::last

Source: https://devdocs.io/php/ds-map.last

(PECL ds >= 1.0.0)

Ds\Map::last — Returns the last pair of the map

### Description

```
public Ds\Map::last(): Ds\Pair
```

Returns the last pair of the map.

### Parameters

This function has no parameters.

### Return Values

The last pair of the map.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Map::last() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->last());
?>
```

The above example will output something similar to:

```
object(Ds\Pair)#2 (2) {
  ["key"]=>
  string(1) "c"
  ["value"]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.last.php
