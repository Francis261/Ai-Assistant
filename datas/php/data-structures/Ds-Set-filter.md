# Ds\Set::filter

Source: https://devdocs.io/php/ds-set.filter

(PECL ds >= 1.0.0)

Ds\Set::filter — Creates a new set using a callable to determine which values to include

### Description

```
public Ds\Set::filter(callable $callback = ?): Ds\Set
```

Creates a new set using a callable to determine which values to include.

### Parameters

```
callback(mixed $value): bool
```

Optional callable which returns true if the value should be included, false otherwise.

If a callback is not provided, only values which are true (see converting to boolean) will be included.

### Return Values

A new set containing all the values for which either the callback returned true, or all values that convert to true if a callback was not provided.

### Examples

Example #1 Ds\Set::filter() example using callback function

```
<?php
$set = new \Ds\Set([1, 2, 3, 4, 5]);

var_dump($set->filter(function($value) {
    return $value % 2 == 0;
}));
?>
```

The above example will output something similar to:

```
object(Ds\Set)#3 (2) {
  [0]=>
  int(2)
  [1]=>
  int(4)
}
```

Example #2 Ds\Set::filter() example without a callback function

```
<?php
$set = new \Ds\Set([0, 1, 'a', true, false]);

var_dump($set->filter());
?>
```

The above example will output something similar to:

```
object(Ds\Set)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  string(1) "a"
  [2]=>
  bool(true)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.filter.php
