# Ds\Set::reversed

Source: https://devdocs.io/php/ds-set.reversed

(PECL ds >= 1.0.0)

Ds\Set::reversed — Returns a reversed copy

### Description

```
public Ds\Set::reversed(): Ds\Set
```

Returns a reversed copy of the set.

### Parameters

This function has no parameters.

### Return Values

A reversed copy of the set.

Note:

The current instance is not affected.

### Examples

Example #1 Ds\Set::reversed() example

```
<?php
$set = new \Ds\Set(["a", "b", "c"]);

print_r($set->reversed());
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
Ds\Set Object
(
    [0] => a
    [1] => b
    [2] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.reversed.php
