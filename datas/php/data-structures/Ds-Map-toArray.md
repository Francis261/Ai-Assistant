# Ds\Map::toArray

Source: https://devdocs.io/php/ds-map.toarray

(PECL ds >= 1.0.0)

Ds\Map::toArray — Converts the map to an array

### Description

```
public Ds\Map::toArray(): array
```

Converts the map to an array.

Maps where non-scalar keys are can't be converted to an array.

An array will treat all numeric keys as integers, eg. "1" and 1 as keys in the map will only result in 1 being included in the array.

Note:

Casting to an array is not supported yet.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the map.

### Examples

Example #1 Ds\Map::toArray() example

```
<?php
$map = new \Ds\Map([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);

var_dump($map->toArray());
?>
```

The above example will output something similar to:

```
array(3) {
  ["a"]=>
  int(1)
  ["b"]=>
  int(2)
  ["c"]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.toarray.php
