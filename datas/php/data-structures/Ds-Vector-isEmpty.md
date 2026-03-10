# Ds\Vector::isEmpty

Source: https://devdocs.io/php/ds-vector.isempty

(PECL ds >= 1.0.0)

Ds\Vector::isEmpty — Returns whether the vector is empty

### Description

```
public Ds\Vector::isEmpty(): bool
```

Returns whether the vector is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the vector is empty, false otherwise.

### Examples

Example #1 Ds\Vector::isEmpty() example

```
<?php
$a = new \Ds\Vector([1, 2, 3]);
$b = new \Ds\Vector();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.isempty.php
