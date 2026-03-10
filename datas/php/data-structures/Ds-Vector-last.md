# Ds\Vector::last

Source: https://devdocs.io/php/ds-vector.last

(PECL ds >= 1.0.0)

Ds\Vector::last — Returns the last value

### Description

```
public Ds\Vector::last(): mixed
```

Returns the last value in the vector.

### Parameters

This function has no parameters.

### Return Values

The last value in the vector.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Vector::last() example

```
<?php
$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector->last());
?>
```

The above example will output something similar to:

```
int(3)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.last.php
