# Ds\Vector::first

Source: https://devdocs.io/php/ds-vector.first

(PECL ds >= 1.0.0)

Ds\Vector::first — Returns the first value in the vector

### Description

```
public Ds\Vector::first(): mixed
```

Returns the first value in the vector.

### Parameters

This function has no parameters.

### Return Values

The first value in the vector.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Vector::first() example

```
<?php
$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector->first());
?>
```

The above example will output something similar to:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.first.php
