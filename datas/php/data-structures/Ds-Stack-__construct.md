# Ds\Stack::__construct

Source: https://devdocs.io/php/ds-stack.construct

(PECL ds >= 1.0.0)

Ds\Stack::__construct — Creates a new instance

### Description

Creates a new instance, using either a traversable object or an array for the initial values.

### Parameters

A traversable object or an array to use for the initial values.

### Examples

Example #1 Ds\Stack::__construct() example

```
<?php
$stack = new \Ds\Stack();
print_r($stack);

$stack = new \Ds\Stack([1, 2, 3]);
print_r($stack);
?>
```

The above example will output something similar to:

```
Ds\Stack Object
(
)
Ds\Stack Object
(
    [0] => 3
    [1] => 2
    [2] => 1
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.construct.php
