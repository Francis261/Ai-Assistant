# Ds\Collection::copy

Source: https://devdocs.io/php/ds-collection.copy

(PECL ds >= 1.0.0)

Ds\Collection::copy — Returns a shallow copy of the collection

### Description

```
public Ds\Collection::copy(): Ds\Collection
```

Returns a shallow copy of the collection.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the collection.

### Examples

Example #1 Ds\Collection::copy() example

```
<?php
$a = new \Ds\Vector([1, 2, 3]);
$b = $a->copy();

$b->push(4);

print_r($a);
print_r($b);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-collection.copy.php
