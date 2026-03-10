# Ds\Map::pairs

Source: https://devdocs.io/php/ds-map.pairs

(PECL ds >= 1.0.0)

Ds\Map::pairs — Returns a sequence containing all the pairs of the map

### Description

```
public Ds\Map::pairs(): Ds\Sequence
```

Returns a Ds\Sequence containing all the pairs of the map.

### Parameters

This function has no parameters.

### Return Values

Ds\Sequence containing all the pairs of the map.

### Examples

Example #1 Ds\Map::pairs() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->pairs());
?>
```

The above example will output something similar to:

```
object(Ds\Map)#8 (3) {
  [0]=>
  object(Ds\Pair)#5 (2) {
    ["key"]=>
    string(1) "a"
    ["value"]=>
    int(1)
  }
  [1]=>
  object(Ds\Pair)#6 (2) {
    ["key"]=>
    string(1) "b"
    ["value"]=>
    int(2)
  }
  [2]=>
  object(Ds\Pair)#7 (2) {
    ["key"]=>
    string(1) "c"
    ["value"]=>
    int(3)
  }
}
p
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.pairs.php
