# Ds\Stack::clear

Source: https://devdocs.io/php/ds-stack.clear

(PECL ds >= 1.0.0)

Ds\Stack::clear — Removes all values

### Description

```
public Ds\Stack::clear(): void
```

Removes all values from the stack.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Stack::clear() example

```
<?php
$stack = new \Ds\Stack([1, 2, 3]);
print_r($stack);

$stack->clear();
print_r($stack);
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
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.clear.php
