# Ds\Set::contains

Source: https://devdocs.io/php/ds-set.contains

(PECL ds >= 1.0.0)

Ds\Set::contains — Determines if the set contains all values

### Description

```
public Ds\Set::contains(mixed ...$values): bool
```

Determines if the set contains all values.

Note:

Values of type object are supported. If an object implements Ds\Hashable, equality will be determined by the object's equals function. If an object does not implement Ds\Hashable, objects must be references to the same instance to be considered equal.

All comparisons are strict (type and value).

### Parameters

Values to check.

### Return Values

false if any of the provided values are not in the set, true otherwise.

### Examples

Example #1 Ds\Set::contains() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->contains(1));                // true
var_dump($set->contains(1, 2));             // true
var_dump($set->contains(...[1, 2]));        // true

var_dump($set->contains("1"));              // false
var_dump($set->contains(...[1, 2, 3, 4]));  // false

var_dump($set->contains(...[]));            // true
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
bool(true)
bool(false)
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.contains.php
