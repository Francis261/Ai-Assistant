# Ds\Map::copy

Source: https://devdocs.io/php/ds-map.copy

(PECL ds >= 1.0.0)

Ds\Map::copy — Returns a shallow copy of the map

### Description

```
public Ds\Map::copy(): Ds\Map
```

Returns a shallow copy of the map.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the map.

### Examples

Example #1 Ds\Map::copy() example

```
<?php
$map = new \Ds\Map([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);

print_r($map->copy());
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.copy.php
