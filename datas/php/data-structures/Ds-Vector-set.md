# Ds\Vector::set

Source: https://devdocs.io/php/ds-vector.set

(PECL ds >= 1.0.0)

Ds\Vector::set — Updates a value at a given index

### Description

```
public Ds\Vector::set(int $index, mixed $value): void
```

Updates a value at a given index.

### Parameters

The index of the value to update.

The new value.

### Return Values

No value is returned.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Vector::set() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

$vector->set(1, "_");
print_r($vector);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => a
    [1] => _
    [2] => c
)
```

Example #2 Ds\Vector::set() example using array syntax

```
<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

$vector[1] = "_";
print_r($vector);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => a
    [1] => _
    [2] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.set.php
