# Ds\Map::filter

Source: https://devdocs.io/php/ds-map.filter

(PECL ds >= 1.0.0)

Ds\Map::filter — Creates a new map using a callable to determine which pairs to include

### Description

```
public Ds\Map::filter(callable $callback = ?): Ds\Map
```

Creates a new map using a callable to determine which pairs to include.

### Parameters

```
callback(mixed $key, mixed $value): bool
```

Optional callable which returns true if the pair should be included, false otherwise.

If a callback is not provided, only values which are true (see converting to boolean) will be included.

### Return Values

A new map containing all the pairs for which either the callback returned true, or all values that convert to true if a callback was not provided.

### Examples

Example #1 Ds\Map::filter() example using callback function

```
<?php
$map = new \Ds\Map(["a", "b", "c", "d", "e"]);

var_dump($map->filter(function($key, $value) {
    return $key % 2 == 0;
}));
?>
```

The above example will output something similar to:

```
object(Ds\Map)#3 (3) {
  [0]=>
  object(Ds\Pair)#2 (2) {
    ["key"]=>
    int(0)
    ["value"]=>
    string(1) "a"
  }
  [1]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    int(2)
    ["value"]=>
    string(1) "c"
  }
  [2]=>
  object(Ds\Pair)#5 (2) {
    ["key"]=>
    int(4)
    ["value"]=>
    string(1) "e"
  }
}
```

Example #2 Ds\Map::filter() example without a callback function

```
<?php
$map = new \Ds\Map(["a" => 0, "b" => 1, "c" => true, "d" => false]);

var_dump($map->filter());
?>
```

The above example will output something similar to:

```
object(Ds\Map)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  string(1) "a"
  [2]=>
  bool(true)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.filter.php
