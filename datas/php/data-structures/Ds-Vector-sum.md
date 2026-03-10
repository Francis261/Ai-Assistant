# Ds\Vector::sum

Source: https://devdocs.io/php/ds-vector.sum

(PECL ds >= 1.0.0)

Ds\Vector::sum — Returns the sum of all values in the vector

### Description

```
public Ds\Vector::sum(): int|float
```

Returns the sum of all values in the vector.

Note:

Arrays and objects are considered equal to zero when calculating the sum.

### Parameters

This function has no parameters.

### Return Values

The sum of all the values in the vector as either a float or int depending on the values in the vector.

### Examples

Example #1 Ds\Vector::sum() integer example

```
<?php
$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector->sum());
?>
```

The above example will output something similar to:

```
int(6)
```

Example #2 Ds\Vector::sum() float example

```
<?php
$vector = new \Ds\Vector([1, 2.5, 3]);
var_dump($vector->sum());
?>
```

The above example will output something similar to:

```
float(6.5)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.sum.php
