# Ds\Set::reverse

Source: https://devdocs.io/php/ds-set.reverse

(PECL ds >= 1.0.0)

Ds\Set::reverse — Reverses the set in-place

### Description

```
public Ds\Set::reverse(): void
```

Reverses the set in-place.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Set::reverse() example

```
<?php
$set = new \Ds\Set(["a", "b", "c"]);
$set->reverse();

print_r($set);
?>
```

The above example will output something similar to:

```
Ds\Set Object
(
    [0] => c
    [1] => b
    [2] => a
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.reverse.php
