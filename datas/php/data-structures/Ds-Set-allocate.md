# Ds\Set::allocate

Source: https://devdocs.io/php/ds-set.allocate

(PECL ds >= 1.0.0)

Ds\Set::allocate — Allocates enough memory for a required capacity

### Description

```
public Ds\Set::allocate(int $capacity): void
```

Allocates enough memory for a required capacity.

### Parameters

The number of values for which capacity should be allocated.

Note:

Capacity will stay the same if this value is less than or equal to the current capacity.

Note:

Capacity will always be rounded up to the nearest power of 2.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Set::allocate() example

```
<?php
$set = new \Ds\Set();
var_dump($set->capacity());

$set->allocate(100);
var_dump($set->capacity());
?>
```

The above example will output something similar to:

```
int(16)
int(128)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.allocate.php
