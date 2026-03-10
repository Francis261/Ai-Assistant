# Ds\Vector::reverse

Source: https://devdocs.io/php/ds-vector.reverse

(PECL ds >= 1.0.0)

Ds\Vector::reverse — Reverses the vector in-place

### Description

```
public Ds\Vector::reverse(): void
```

Reverses the vector in-place.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Vector::reverse() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c"]);
$vector->reverse();

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
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.reverse.php
