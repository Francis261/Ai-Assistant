# Ds\Set::union

Source: https://devdocs.io/php/ds-set.union

(PECL ds >= 1.0.0)

Ds\Set::union — Creates a new set using values from the current instance and another set

### Description

```
public Ds\Set::union(Ds\Set $set): Ds\Set
```

Creates a new set that contains the values of the current instance as well as the values of another set.

A ∪ B = {x: x ∈ A ∨ x ∈ B}

### Parameters

The other set, to combine with the current instance.

### Return Values

A new set containing all the values of the current instance as well as another set.

### See Also

- » Union on Wikipedia

### Examples

Example #1 Ds\Set::union() example

```
<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->union($b));
?>
```

The above example will output something similar to:

```
object(Ds\Set)#3 (5) {
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
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.union.php
