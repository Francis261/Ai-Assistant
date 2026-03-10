# Ds\Vector::unshift

Source: https://devdocs.io/php/ds-vector.unshift

(PECL ds >= 1.0.0)

Ds\Vector::unshift — Adds values to the front of the vector

### Description

```
public Ds\Vector::unshift(mixed $values = ?): void
```

Adds values to the front of the vector, moving all the current values forward to make room for the new values.

### Parameters

The values to add to the front of the vector.

Note:

Multiple values will be added in the same order that they are passed.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Vector::unshift() example

```
<?php
$vector = new \Ds\Vector([1, 2, 3]);

$vector->unshift("a");
$vector->unshift("b", "c");

print_r($vector);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => a
    [3] => 1
    [4] => 2
    [5] => 3
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.unshift.php
