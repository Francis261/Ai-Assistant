# Ds\Sequence::filter

Source: https://devdocs.io/php/ds-sequence.filter

(PECL ds >= 1.0.0)

Ds\Sequence::filter — Creates a new sequence using a callable to determine which values to include

### Description

```
abstract public Ds\Sequence::filter(callable $callback = ?): Ds\Sequence
```

Creates a new sequence using a callable to determine which values to include.

### Parameters

```
callback(mixed $value): bool
```

Optional callable which returns true if the value should be included, false otherwise.

If a callback is not provided, only values which are true (see converting to boolean) will be included.

### Return Values

A new sequence containing all the values for which either the callback returned true, or all values that convert to true if a callback was not provided.

### Examples

Example #1 Ds\Sequence::filter() example using callback function

```
<?php
$sequence = new \Ds\Vector([1, 2, 3, 4, 5]);

var_dump($sequence->filter(function($value) {
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

Example #2 Ds\Sequence::filter() example without a callback function

```
<?php
$sequence = new \Ds\Vector([0, 1, 'a', true, false]);

var_dump($sequence->filter());
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
 https://www.php.net/manual/en/ds-sequence.filter.php
