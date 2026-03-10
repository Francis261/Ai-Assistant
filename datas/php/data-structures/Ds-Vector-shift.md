# Ds\Vector::shift

Source: https://devdocs.io/php/ds-vector.shift

(PECL ds >= 1.0.0)

Ds\Vector::shift — Removes and returns the first value

### Description

```
public Ds\Vector::shift(): mixed
```

Removes and returns the first value.

### Parameters

This function has no parameters.

### Return Values

The first value, which was removed.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Vector::shift() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

var_dump($vector->shift());
var_dump($vector->shift());
var_dump($vector->shift());
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.shift.php
