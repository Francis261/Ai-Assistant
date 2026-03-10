# Ds\Vector::filter

Source: https://devdocs.io/php/ds-vector.filter

(PECL ds >= 1.0.0)

Ds\Vector::filter — Creates a new vector using a callable to determine which values to include

### Description

```
public Ds\Vector::filter(callable $callback = ?): Ds\Vector
```

Creates a new vector using a callable to determine which values to include.

### Parameters

```
callback(mixed $value): bool
```

Optional callable which returns true if the value should be included, false otherwise.

If a callback is not provided, only values which are true (see converting to boolean) will be included.

### Return Values

A new vector containing all the values for which either the callback returned true, or all values that convert to true if a callback was not provided.

### Examples

Example #1 Ds\Vector::filter() example using callback function

```
<?php
$vector = new \Ds\Vector([1, 2, 3, 4, 5]);

var_dump($vector->filter(function($value) {
    return $value % 2 == 0;
}));
?>
```

The above example will output something similar to:

```
object(Ds\Vector)#3 (2) {
  [0]=>
  int(2)
  [1]=>
  int(4)
}
```

Example #2 Ds\Vector::filter() example without a callback function

```
<?php
$vector = new \Ds\Vector([0, 1, 'a', true, false]);

var_dump($vector->filter());
?>
```

The above example will output something similar to:

```
object(Ds\Vector)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  string(1) "a"
  [2]=>
  bool(true)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.filter.php
