# Ds\Vector::reversed

Source: https://devdocs.io/php/ds-vector.reversed

(PECL ds >= 1.0.0)

Ds\Vector::reversed — Returns a reversed copy

### Description

```
public Ds\Vector::reversed(): Ds\Vector
```

Returns a reversed copy of the vector.

### Parameters

This function has no parameters.

### Return Values

A reversed copy of the vector.

Note:

The current instance is not affected.

### Examples

Example #1 Ds\Vector::reversed() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

print_r($vector->reversed());
print_r($vector);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => c
    [1] => b
    [2] => a
)
Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.reversed.php
