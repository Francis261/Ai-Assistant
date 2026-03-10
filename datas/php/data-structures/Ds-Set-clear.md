# Ds\Set::clear

Source: https://devdocs.io/php/ds-set.clear

(PECL ds >= 1.0.0)

Ds\Set::clear — Removes all values

### Description

```
public Ds\Set::clear(): void
```

Removes all values from the set.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Set::clear() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);
print_r($set);

$set->clear();
print_r($set);
?>
```

The above example will output something similar to:

```
Ds\Set Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Set Object
(
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.clear.php
