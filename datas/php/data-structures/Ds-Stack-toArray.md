# Ds\Stack::toArray

Source: https://devdocs.io/php/ds-stack.toarray

(PECL ds >= 1.0.0)

Ds\Stack::toArray — Converts the stack to an array

### Description

```
public Ds\Stack::toArray(): array
```

Converts the stack to an array.

Note:

Casting to an array is not supported yet.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the stack.

### Examples

Example #1 Ds\Stack::toArray() example

```
<?php
$stack = new \Ds\Stack([1, 2, 3]);

var_dump($stack->toArray());
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  int(3)
  [1]=>
  int(2)
  [2]=>
  int(1)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.toarray.php
