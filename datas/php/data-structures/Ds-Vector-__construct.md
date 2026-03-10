# Ds\Vector::__construct

Source: https://devdocs.io/php/ds-vector.construct

(PECL ds >= 1.0.0)

Ds\Vector::__construct — Creates a new instance

### Description

Creates a new instance, using either a traversable object or an array for the initial values.

### Parameters

A traversable object or an array to use for the initial values.

### Examples

Example #1 Ds\Vector::__construct() example

```
<?php
$vector = new \Ds\Vector();
var_dump($vector);

$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector);
?>
```

The above example will output something similar to:

```
object(Ds\Vector)#2 (0) {
}
object(Ds\Vector)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.construct.php
