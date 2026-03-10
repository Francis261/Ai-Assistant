# Ds\Set::copy

Source: https://devdocs.io/php/ds-set.copy

(PECL ds >= 1.0.0)

Ds\Set::copy — Returns a shallow copy of the set

### Description

```
public Ds\Set::copy(): Ds\Set
```

Returns a shallow copy of the set.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the set.

### Examples

Example #1 Ds\Set::copy() example

```
<?php
$a = new \Ds\Set([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->add(4);

print_r($a);
print_r($b);
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
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.copy.php
