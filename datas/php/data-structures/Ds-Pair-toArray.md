# Ds\Pair::toArray

Source: https://devdocs.io/php/ds-pair.toarray

(PECL ds >= 1.0.0)

Ds\Pair::toArray — Converts the pair to an array

### Description

```
public Ds\Pair::toArray(): array
```

Converts the pair to an array.

Note:

Casting to an array is not supported yet.

### Parameters

This function has no parameters.

### Return Values

An array containing all the values in the same order as the pair.

### Examples

Example #1 Ds\Pair::toArray() example

```
<?php
$pair = new \Ds\Pair("a", 1);

var_dump($pair->toArray());
?>
```

The above example will output something similar to:

```
array(2) {
  ["key"]=>
  string(1) "a"
  ["value"]=>
  int(1)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-pair.toarray.php
