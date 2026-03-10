# Ds\Vector::remove

Source: https://devdocs.io/php/ds-vector.remove

(PECL ds >= 1.0.0)

Ds\Vector::remove — Removes and returns a value by index

### Description

```
public Ds\Vector::remove(int $index): mixed
```

Removes and returns a value by index.

### Parameters

The index of the value to remove.

### Return Values

The value that was removed.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Vector::remove() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

var_dump($vector->remove(1));
var_dump($vector->remove(0));
var_dump($vector->remove(0));
?>
```

The above example will output something similar to:

```
string(1) "b"
string(1) "a"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.remove.php
