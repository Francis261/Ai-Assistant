# Ds\Set::intersect

Source: https://devdocs.io/php/ds-set.intersect

(PECL ds >= 1.0.0)

Ds\Set::intersect — Creates a new set by intersecting values with another set

### Description

```
public Ds\Set::intersect(Ds\Set $set): Ds\Set
```

Creates a new set using values common to both the current instance and another set. In other words, returns a copy of the current instance with all values removed that are not in the other set.

A ∩ B = {x : x ∈ A ∧ x ∈ B}

### Parameters

The other set.

### Return Values

The intersection of the current instance and another set.

### See Also

- » Intersection on Wikipedia

### Examples

Example #1 Ds\Set::intersect() example

```
<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->intersect($b));
?>
```

The above example will output something similar to:

```
object(Ds\Set)#3 (1) {
  [0]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.intersect.php
