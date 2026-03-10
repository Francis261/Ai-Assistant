# Ds\Vector::push

Source: https://devdocs.io/php/ds-vector.push

(PECL ds >= 1.0.0)

Ds\Vector::push — Adds values to the end of the vector

### Description

```
public Ds\Vector::push(mixed ...$values): void
```

Adds values to the end of the vector.

### Parameters

The values to add.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Vector::push() example

```
<?php
$vector = new \Ds\Vector();

$vector->push("a");
$vector->push("b");
$vector->push("c", "d");
$vector->push(...["e", "f"]);

print_r($vector);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.push.php
