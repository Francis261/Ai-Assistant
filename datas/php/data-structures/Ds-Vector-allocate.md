# Ds\Vector::allocate

Source: https://devdocs.io/php/ds-vector.allocate

(PECL ds >= 1.0.0)

Ds\Vector::allocate — Allocates enough memory for a required capacity

### Description

```
public Ds\Vector::allocate(int $capacity): void
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal as values are added.

### Parameters

The number of values for which capacity should be allocated.

Note:

Capacity will stay the same if this value is less than or equal to the current capacity.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Vector::allocate() example

```
<?php
$vector = new \Ds\Vector();
var_dump($vector->capacity());

$vector->allocate(100);
var_dump($vector->capacity());
?>
```

The above example will output something similar to:

```
int(10)
int(100)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.allocate.php
