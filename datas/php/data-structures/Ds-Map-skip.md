# Ds\Map::skip

Source: https://devdocs.io/php/ds-map.skip

(PECL ds >= 1.0.0)

Ds\Map::skip — Returns the pair at a given positional index

### Description

```
public Ds\Map::skip(int $position): Ds\Pair
```

Returns the pair at a given zero-based position.

### Parameters

The zero-based positional index to return.

### Return Values

Returns the Ds\Pair at the given position.

### Errors/Exceptions

OutOfRangeException if the position is not valid.

### Examples

Example #1 Ds\Map::skip() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->skip(1));
?>
```

The above example will output something similar to:

```
object(Ds\Pair)#2 (2) {
  ["key"]=>
  string(1) "b"
  ["value"]=>
  int(2)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.skip.php
