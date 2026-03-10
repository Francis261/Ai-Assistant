# Ds\Map::sum

Source: https://devdocs.io/php/ds-map.sum

(No version information available, might only be in Git)

Ds\Map::sum — Returns the sum of all values in the map

### Description

```
public Ds\Map::sum(): int|float
```

Returns the sum of all values in the map.

Note:

Arrays and objects are considered equal to zero when calculating the sum.

### Parameters

This function has no parameters.

### Return Values

The sum of all the values in the map as either a float or int depending on the values in the map.

### Examples

Example #1 Ds\Map::sum() integer example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->sum());
?>
```

The above example will output something similar to:

```
int(6)
```

Example #2 Ds\Map::sum() float example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2.5, "c" => 3]);
var_dump($map->sum());
?>
```

The above example will output something similar to:

```
float(6.5)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.sum.php
