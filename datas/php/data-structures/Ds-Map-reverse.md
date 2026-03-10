# Ds\Map::reverse

Source: https://devdocs.io/php/ds-map.reverse

(PECL ds >= 1.0.0)

Ds\Map::reverse — Reverses the map in-place

### Description

```
public Ds\Map::reverse(): void
```

Reverses the map in-place.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Map::reverse() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$map->reverse();

print_r($map);
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
 https://www.php.net/manual/en/ds-map.reverse.php
