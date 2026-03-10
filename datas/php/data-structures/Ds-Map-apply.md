# Ds\Map::apply

Source: https://devdocs.io/php/ds-map.apply

(PECL ds >= 1.0.0)

Ds\Map::apply — Updates all values by applying a callback function to each value

### Description

```
public Ds\Map::apply(callable $callback): void
```

Updates all values by applying a callback function to each value in the map.

### Parameters

```
callback(mixed $key, mixed $value): mixed
```

A callable to apply to each value in the map.

The callback should return what the value should be replaced by.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Map::apply() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$map->apply(function($key, $value) { return $value * 2; });

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
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.apply.php
