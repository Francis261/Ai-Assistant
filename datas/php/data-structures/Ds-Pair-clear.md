# Ds\Pair::clear

Source: https://devdocs.io/php/ds-pair.clear

(No version information available, might only be in Git)

Ds\Pair::clear — Removes all values

### Description

```
public Ds\Pair::clear(): void
```

Removes all values from the pair.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Pair::clear() example

```
<?php
$pair = new \Ds\Pair("a", 1);
print_r($pair);

$pair->clear();
print_r($pair);
?>
```

The above example will output something similar to:

```
Ds\Pair Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Pair Object
(
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-pair.clear.php
