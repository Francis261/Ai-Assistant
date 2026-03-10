# Ds\Set::diff

Source: https://devdocs.io/php/ds-set.diff

(PECL ds >= 1.0.0)

Ds\Set::diff — Creates a new set using values that aren't in another set

### Description

```
public Ds\Set::diff(Ds\Set $set): Ds\Set
```

Creates a new set using values that aren't in another set.

A \ B = {x ∈ A | x ∉ B}

### Parameters

Set containing the values to exclude.

### Return Values

A new set containing all values that were not in the other set.

### See Also

- » Complement on Wikipedia

### Examples

Example #1 Ds\Set::diff() example

```
<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->diff($b));
?>
```

The above example will output something similar to:

```
object(Ds\Set)#3 (2) {
  [0]=>
  int(1)
  [1]=>
  int(2)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.diff.php
