# Ds\Set::toArray

Source: https://devdocs.io/php/ds-set.toarray

(PECL ds >= 1.0.0)

Ds\Set::toArray — Converts the set to an array

### Description

```
public Ds\Set::toArray(): array
```

Converts the set to an array.

Note:

Casting to an array is not supported yet.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the set.

### Examples

Example #1 Ds\Set::toArray() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->toArray());
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.toarray.php
