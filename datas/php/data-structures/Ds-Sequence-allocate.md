# Ds\Sequence::allocate

Source: https://devdocs.io/php/ds-sequence.allocate

(PECL ds >= 1.0.0)

Ds\Sequence::allocate — Allocates enough memory for a required capacity

### Description

```
abstract public Ds\Sequence::allocate(int $capacity): void
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal as values are added.

### Parameters

The number of values for which capacity should be allocated.

Note:

Capacity will stay the same if this value is less than or equal to the current capacity.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Sequence::allocate() example

```
<?php
$sequence = new \Ds\Vector();
var_dump($sequence->capacity());

$vector->allocate(100);
var_dump($sequence->capacity());
?>
```

The above example will output something similar to:

```
int(10)
int(100)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.allocate.php
