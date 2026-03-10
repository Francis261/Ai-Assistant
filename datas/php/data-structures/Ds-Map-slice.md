# Ds\Map::slice

Source: https://devdocs.io/php/ds-map.slice

(PECL ds >= 1.0.0)

Ds\Map::slice — Returns a subset of the map defined by a starting index and length

### Description

```
public Ds\Map::slice(int $index, int $length = ?): Ds\Map
```

Returns a subset of the map defined by a starting index and length.

### Parameters

The index at which the range starts.

If positive, the range will start at that index in the map. If negative, the range will start that far from the end.

If a length is given and is positive, the resulting map will have up to that many pairs in it. If a length is given and is negative, the range will stop that many pairs from the end. If the length results in an overflow, only pairs up to the end of the map will be included. If a length is not provided, the resulting map will contain all pairs between the index and the end of the map.

### Return Values

A subset of the map defined by a starting index and length.

### Examples

Example #1 Ds\Map::slice() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5]);

// Slice from 2 onwards
print_r($map->slice(2)->toArray());

// Slice from 1, for a length of 3
print_r($map->slice(1, 3)->toArray());

// Slice from 1 onwards
print_r($map->slice(1)->toArray());

// Slice from 2 from the end onwards
print_r($map->slice(-2)->toArray());

// Slice from 1 to 1 from the end
print_r($map->slice(1, -1)->toArray());
?>
```

The above example will output something similar to:

```
Array
(
    [c] => 3
    [d] => 4
    [e] => 5
)
Array
(
    [b] => 2
    [c] => 3
    [d] => 4
)
Array
(
    [b] => 2
    [c] => 3
    [d] => 4
    [e] => 5
)
Array
(
    [d] => 4
    [e] => 5
)
Array
(
    [b] => 2
    [c] => 3
    [d] => 4
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.slice.php
