# Ds\Map::first

Source: https://devdocs.io/php/ds-map.first

(PECL ds >= 1.0.0)

Ds\Map::first — Returns the first pair in the map

### Description

```
public Ds\Map::first(): Ds\Pair
```

Returns the first pair in the map.

### Parameters

This function has no parameters.

### Return Values

The first pair in the map.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Map::first() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->first());
?>
```

The above example will output something similar to:

```
object(Ds\Pair)#2 (2) {
  ["key"]=>
  string(1) "a"
  ["value"]=>
  int(1)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.first.php
