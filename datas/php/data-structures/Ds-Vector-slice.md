# Ds\Vector::slice

Source: https://devdocs.io/php/ds-vector.slice

(PECL ds >= 1.0.0)

Ds\Vector::slice — Returns a sub-vector of a given range

### Description

```
public Ds\Vector::slice(int $index, int $length = ?): Ds\Vector
```

Creates a sub-vector of a given range.

### Parameters

The index at which the sub-vector starts.

If positive, the vector will start at that index in the vector. If negative, the vector will start that far from the end.

If a length is given and is positive, the resulting vector will have up to that many values in it. If the length results in an overflow, only values up to the end of the vector will be included. If a length is given and is negative, the vector will stop that many values from the end. If a length is not provided, the resulting vector will contain all values between the index and the end of the vector.

### Return Values

A sub-vector of the given range.

### Examples

Example #1 Ds\Vector::slice() example

```
<?php
$vector = new \Ds\Vector(["a", "b", "c", "d", "e"]);

// Slice from 2 onwards
print_r($vector->slice(2));

// Slice from 1, for a length of 3
print_r($vector->slice(1, 3));

// Slice from 1 onwards
print_r($vector->slice(1));

// Slice from 2 from the end onwards
print_r($vector->slice(-2));

// Slice from 1 to 1 from the end
print_r($vector->slice(1, -1));
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => c
    [1] => d
    [2] => e
)
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => d
)
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => d
    [3] => e
)
Ds\Vector Object
(
    [0] => d
    [1] => e
)
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => d
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.slice.php
