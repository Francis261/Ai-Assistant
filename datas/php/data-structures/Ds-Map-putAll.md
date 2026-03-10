# Ds\Map::putAll

Source: https://devdocs.io/php/ds-map.putall

(PECL ds >= 1.0.2)

Ds\Map::putAll — Associates all key-value pairs of a traversable object or array

### Description

```
public Ds\Map::putAll(mixed $pairs): void
```

Associates all key-value pairs of a traversable object or array.

Note:

Keys of type object are supported. If an object implements Ds\Hashable, equality will be determined by the object's equals function. If an object does not implement Ds\Hashable, objects must be references to the same instance to be considered equal.

### Parameters

traversable object or array.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Map::putAll() example

```
<?php
$map = new \Ds\Map();

$map->putAll([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);

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
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.putall.php
