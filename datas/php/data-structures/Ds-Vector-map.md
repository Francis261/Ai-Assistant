# Ds\Vector::map

Source: https://devdocs.io/php/ds-vector.map

(PECL ds >= 1.0.0)

Ds\Vector::map — Returns the result of applying a callback to each value

### Description

```
public Ds\Vector::map(callable $callback): Ds\Vector
```

Returns the result of applying a callback function to each value in the vector.

### Parameters

```
callback(mixed $value): mixed
```

A callable to apply to each value in the vector.

The callable should return what the new value will be in the new vector.

### Return Values

The result of applying a callback to each value in the vector.

Note:

The values of the current instance won't be affected.

### Examples

Example #1 Ds\Vector::map() example

```
<?php
$vector = new \Ds\Vector([1, 2, 3]);

print_r($vector->map(function($value) { return $value * 2; }));
print_r($vector);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.map.php
