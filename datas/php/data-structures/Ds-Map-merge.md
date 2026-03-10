# Ds\Map::merge

Source: https://devdocs.io/php/ds-map.merge

(PECL ds >= 1.0.0)

Ds\Map::merge — Returns the result of adding all given associations

### Description

```
public Ds\Map::merge(mixed $values): Ds\Map
```

Returns the result of associating all keys of a given traversable object or array with their corresponding values, combined with the current instance.

Note:

Values of the current instance will be overwritten by those provided where keys are equal.

### Parameters

A traversable object or an array.

### Return Values

The result of associating all keys of a given traversable object or array with their corresponding values, combined with the current instance.

Note:

The current instance won't be affected.

### Examples

Example #1 Ds\Map::merge() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

print_r($map->merge(["a" => 10, "e" => 50]));
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 10
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

    [3] => Ds\Pair Object
        (
            [key] => e
            [value] => 50
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.merge.php
