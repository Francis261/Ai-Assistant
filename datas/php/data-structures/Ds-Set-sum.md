# Ds\Set::sum

Source: https://devdocs.io/php/ds-set.sum

(PECL ds >= 1.0.0)

Ds\Set::sum — Returns the sum of all values in the set

### Description

```
public Ds\Set::sum(): int|float
```

Returns the sum of all values in the set.

Note:

Arrays and objects are considered equal to zero when calculating the sum.

### Parameters

This function has no parameters.

### Return Values

The sum of all the values in the set as either a float or int depending on the values in the set.

### Examples

Example #1 Ds\Set::sum() integer example

```
<?php
$set = new \Ds\Set([1, 2, 3]);
var_dump($set->sum());
?>
```

The above example will output something similar to:

```
int(6)
```

Example #2 Ds\Set::sum() float example

```
<?php
$set = new \Ds\Set([1, 2.5, 3]);
var_dump($set->sum());
?>
```

The above example will output something similar to:

```
float(6.5)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.sum.php
