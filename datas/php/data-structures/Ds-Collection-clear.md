# Ds\Collection::clear

Source: https://devdocs.io/php/ds-collection.clear

(PECL ds >= 1.0.0)

Ds\Collection::clear — Removes all values

### Description

```
public Ds\Collection::clear(): void
```

Removes all values from the collection.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Collection::clear() example

```
<?php
$collection = new \Ds\Vector([1, 2, 3]);
print_r($collection);

$collection->clear();
print_r($collection);
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
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-collection.clear.php
