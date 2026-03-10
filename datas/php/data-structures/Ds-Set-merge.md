# Ds\Set::merge

Source: https://devdocs.io/php/ds-set.merge

(PECL ds >= 1.0.3)

Ds\Set::merge — Returns the result of adding all given values to the set

### Description

```
public Ds\Set::merge(mixed $values): Ds\Set
```

Returns the result of adding all given values to the set.

### Parameters

A traversable object or an array.

### Return Values

The result of adding all given values to the set, effectively the same as adding the values to a copy, then returning that copy.

Note:

The current instance won't be affected.

### Examples

Example #1 Ds\Set::merge() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->merge([3, 4, 5]));
var_dump($set);
?>
```

The above example will output something similar to:

```
object(Ds\Set)#2 (6) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  int(4)
  [4]=>
  int(5)
}
object(Ds\Set)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.merge.php
