# Ds\Map::__construct

Source: https://devdocs.io/php/ds-map.construct

(PECL ds >= 1.0.0)

Ds\Map::__construct — Creates a new instance

### Description

Creates a new instance, using either a traversable object or an array for the initial values.

### Parameters

A traversable object or an array to use for the initial values.

### Examples

Example #1 Ds\Map::__construct() example

```
<?php
$map = new \Ds\Map();
var_dump($map);

$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map);
?>
```

The above example will output something similar to:

```
object(Ds\Map)#1 (0) {
}
object(Ds\Map)#2 (3) {
  [0]=>
  object(Ds\Pair)#1 (2) {
    ["key"]=>
    string(1) "a"
    ["value"]=>
    int(1)
  }
  [1]=>
  object(Ds\Pair)#3 (2) {
    ["key"]=>
    string(1) "b"
    ["value"]=>
    int(2)
  }
  [2]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    string(1) "c"
    ["value"]=>
    int(3)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.construct.php
