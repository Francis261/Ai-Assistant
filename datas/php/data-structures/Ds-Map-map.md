# Ds\Map::map

Source: https://devdocs.io/php/ds-map.map

(PECL ds >= 1.0.0)

Ds\Map::map — Returns the result of applying a callback to each value

### Description

```
public Ds\Map::map(callable $callback): Ds\Map
```

Returns the result of applying a callback function to each value of the map.

### Parameters

```
callback(mixed $key, mixed $value): mixed
```

A callable to apply to each value in the map.

The callable should return what the key will be mapped to in the resulting map.

### Return Values

The result of applying a callback to each value in the map.

Note:

The keys and values of the current instance won't be affected.

### Examples

Example #1 Ds\Map::map() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

print_r($map->map(function($key, $value) { return $value * 2; }));
print_r($map);
?>
```

The above example will output something similar to:

```
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 2
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 4
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 6
        )

)
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
 https://www.php.net/manual/en/ds-map.map.php
