# Ds\Set::xor

Source: https://devdocs.io/php/ds-set.xor

(PECL ds >= 1.0.0)

Ds\Set::xor — Creates a new set using values in either the current instance or in another set, but not in both

### Description

```
public Ds\Set::xor(Ds\Set $set): Ds\Set
```

Creates a new set containing values in the current instance as well as another set, but not in both.

A ⊖ B = {x : x ∈ (A \ B) ∪ (B \ A)}

### Parameters

The other set.

### Return Values

A new set containing values in the current instance as well as another set, but not in both.

### See Also

- » Symmetric Difference on Wikipedia

### Examples

Example #1 Ds\Set::xor() example

```
<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->xor($b));
?>
```

The above example will output something similar to:

```
object(Ds\Set)#3 (4) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(4)
  [3]=>
  int(5)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.xor.php
