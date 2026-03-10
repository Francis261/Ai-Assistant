# Ds\Map::reversed

Source: https://devdocs.io/php/ds-map.reversed

(PECL ds >= 1.0.0)

Ds\Map::reversed — Returns a reversed copy

### Description

```
public Ds\Map::reversed(): Ds\Map
```

Returns a reversed copy of the map.

### Parameters

This function has no parameters.

### Return Values

A reversed copy of the map.

Note:

The current instance is not affected.

### Examples

Example #1 Ds\Map::reversed() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

print_r($map->reversed());
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.reversed.php
