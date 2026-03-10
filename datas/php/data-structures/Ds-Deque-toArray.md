# Ds\Deque::toArray

Source: https://devdocs.io/php/ds-deque.toarray

(PECL ds >= 1.0.0)

Ds\Deque::toArray — Converts the deque to an array

### Description

```
public Ds\Deque::toArray(): array
```

Converts the deque to an array.

Note:

Casting to an array is not supported yet.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the deque.

### Examples

Example #1 Ds\Deque::toArray() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);

var_dump($deque->toArray());
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.toarray.php
