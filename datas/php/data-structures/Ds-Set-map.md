# Ds\Set::map

Source: https://devdocs.io/php/ds-set.map

(PECL ds >= 1.2.7)

Ds\Set::map — Returns the result of applying a callback to each value

### Description

```
public Ds\Set::map(callable $callback): Ds\Set
```

Returns the result of applying a callback function to each value in the set.

### Parameters

The callback to apply to each value in the set must have the following signature:

```
callback(mixed $value): mixed
```

### Return Values

Returns a new Ds\Set instance where each value is the result of applying the callback to each value of the set.

### Examples

Example #1 Ds\Set::map() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->map(function($value) { return $value * 2; }));
var_dump($set);
?>
```

The above example will output something similar to:

```
object(Ds\Set)#3 (3) {
  [0]=>
  int(2)
  [1]=>
  int(4)
  [2]=>
  int(6)
}
object(Ds\Set)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.map.php
