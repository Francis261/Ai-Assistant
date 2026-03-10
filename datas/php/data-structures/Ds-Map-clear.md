# Ds\Map::clear

Source: https://devdocs.io/php/ds-map.clear

(PECL ds >= 1.0.0)

Ds\Map::clear — Removes all values

### Description

```
public Ds\Map::clear(): void
```

Removes all values from the map.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Map::clear() example

```
<?php
$map = new \Ds\Map([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);
print_r($map);

$map->clear();
print_r($map);
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
Ds\Map Object
(
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.clear.php
