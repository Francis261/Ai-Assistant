# Ds\Stack::copy

Source: https://devdocs.io/php/ds-stack.copy

(PECL ds >= 1.0.0)

Ds\Stack::copy — Returns a shallow copy of the stack

### Description

```
public Ds\Stack::copy(): Ds\Stack
```

Returns a shallow copy of the stack.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the stack.

### Examples

Example #1 Ds\Stack::copy() example

```
<?php
$a = new \Ds\Stack([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->push(4);

print_r($a);
print_r($b);
?>
```

The above example will output something similar to:

```
Ds\Stack Object
(
    [0] => 3
    [1] => 2
    [2] => 1
)
Ds\Stack Object
(
    [0] => 4
    [1] => 3
    [2] => 2
    [3] => 1
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.copy.php
