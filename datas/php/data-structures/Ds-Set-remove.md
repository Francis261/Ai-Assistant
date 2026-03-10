# Ds\Set::remove

Source: https://devdocs.io/php/ds-set.remove

(PECL ds >= 1.0.0)

Ds\Set::remove — Removes all given values from the set

### Description

```
public Ds\Set::remove(mixed ...$values): void
```

Removes all given values from the set, ignoring any that are not in the set.

### Parameters

The values to remove.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Set::remove() example

```
<?php
$set = new \Ds\Set([1, 2, 3, 4, 5]);

$set->remove(1);            // Remove 1
$set->remove(1, 2);         // Can't find 1, but remove 2
$set->remove(...[3, 4]);    // Remove 3 and 4

var_dump($set);
?>
```

The above example will output something similar to:

```
object(Ds\Set)#1 (1) {
  [0]=>
  int(5)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.remove.php
