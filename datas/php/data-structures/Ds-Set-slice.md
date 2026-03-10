# Ds\Set::slice

Source: https://devdocs.io/php/ds-set.slice

(PECL ds >= 1.0.0)

Ds\Set::slice — Returns a sub-set of a given range

### Description

```
public Ds\Set::slice(int $index, int $length = ?): Ds\Set
```

Creates a sub-set of a given range.

### Parameters

The index at which the sub-set starts.

If positive, the set will start at that index in the set. If negative, the set will start that far from the end.

If a length is given and is positive, the resulting set will have up to that many values in it. If the length results in an overflow, only values up to the end of the set will be included. If a length is given and is negative, the set will stop that many values from the end. If a length is not provided, the resulting set will contain all values between the index and the end of the set.

### Return Values

A sub-set of the given range.

### Examples

Example #1 Ds\Set::slice() example

```
<?php
$set = new \Ds\Set(["a", "b", "c", "d", "e"]);

// Slice from 2 onwards
print_r($set->slice(2));

// Slice from 1, for a length of 3
print_r($set->slice(1, 3));

// Slice from 1 onwards
print_r($set->slice(1));

// Slice from 2 from the end onwards
print_r($set->slice(-2));

// Slice from 1 to 1 from the end
print_r($set->slice(1, -1));
?>
```

The above example will output something similar to:

```
Ds\Set Object
(
    [0] => c
    [1] => d
    [2] => e
)
Ds\Set Object
(
    [0] => b
    [1] => c
    [2] => d
)
Ds\Set Object
(
    [0] => b
    [1] => c
    [2] => d
    [3] => e
)
Ds\Set Object
(
    [0] => d
    [1] => e
)
Ds\Set Object
(
    [0] => b
    [1] => c
    [2] => d
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.slice.php
