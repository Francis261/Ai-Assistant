# Ds\Vector::contains

Source: https://devdocs.io/php/ds-vector.contains

(PECL ds >= 1.0.0)

Ds\Vector::contains — Determines if the vector contains given values

### Description

```
public Ds\Vector::contains(mixed ...$values): bool
```

Determines if the vector contains all values.

### Parameters

Values to check.

### Return Values

false if any of the provided values are not in the vector, true otherwise.

### Examples

Example #1 Ds\Vector::contains() example

```
<?php
$vector = new \Ds\Vector(['a', 'b', 'c', 1, 2, 3]);

var_dump($vector->contains('a'));                // true
var_dump($vector->contains('a', 'b'));           // true
var_dump($vector->contains('c', 'd'));           // false

var_dump($vector->contains(...['c', 'b', 'a'])); // true

// Always strict
var_dump($vector->contains(1));                  // true
var_dump($vector->contains('1'));                // false

var_dump($sequece->contains(...[]));               // true
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.contains.php
