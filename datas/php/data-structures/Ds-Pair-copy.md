# Ds\Pair::copy

Source: https://devdocs.io/php/ds-pair.copy

(No version information available, might only be in Git)

Ds\Pair::copy — Returns a shallow copy of the pair

### Description

```
public Ds\Pair::copy(): Ds\Pair
```

Returns a shallow copy of the pair.

### Parameters

This function has no parameters.

### Return Values

Returns a shallow copy of the pair.

### Examples

Example #1 Ds\Pair::copy() example

```
<?php
$a = new \Ds\Pair("a", 1);
$b = $a->copy();

$a->key = "x";

print_r($a);
print_r($b);
?>
```

The above example will output something similar to:

```
Ds\Pair Object
(
    [key] => x
    [value] => 1
)
Ds\Pair Object
(
    [key] => a
    [value] => 1
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-pair.copy.php
