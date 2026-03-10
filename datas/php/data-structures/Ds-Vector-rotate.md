# Ds\Vector::rotate

Source: https://devdocs.io/php/ds-vector.rotate

(PECL ds >= 1.0.0)

Ds\Vector::rotate — Rotates the vector by a given number of rotations

### Description

```
public Ds\Vector::rotate(int $rotations): void
```

Rotates the vector by a given number of rotations, which is equivalent to successively calling $vector->push($vector->shift()) if the number of rotations is positive, or $vector->unshift($vector->pop()) if negative.

### Parameters

The number of times the vector should be rotated.

### Return Values

No value is returned.. The vector of the current instance will be rotated.

### Examples

Example #1 Ds\Vector::rotate() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c", "d"]);

$vector->rotate(1);  // "a" is shifted, then pushed.
print_r($vector);

$vector->rotate(2);  // "b" and "c" are both shifted, the pushed.
print_r($vector);
?>
```

The above example will output something similar to:

```
(
    [0] => b
    [1] => c
    [2] => d
    [3] => a
)
Ds\Vector Object
(
    [0] => d
    [1] => a
    [2] => b
    [3] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.rotate.php
