# Ds\Sequence::merge

Source: https://devdocs.io/php/ds-sequence.merge

(PECL ds >= 1.0.0)

Ds\Sequence::merge — Returns the result of adding all given values to the sequence

### Description

```
abstract public Ds\Sequence::merge(mixed $values): Ds\Sequence
```

Returns the result of adding all given values to the sequence.

### Parameters

A traversable object or an array.

### Return Values

The result of adding all given values to the sequence, effectively the same as adding the values to a copy, then returning that copy.

Note:

The current instance won't be affected.

### Examples

Example #1 Ds\Sequence::merge() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);

var_dump($sequence->merge([4, 5, 6]));
var_dump($sequence);
?>
```

The above example will output something similar to:

```
object(Ds\Vector)#2 (6) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  int(4)
  [4]=>
  int(5)
  [5]=>
  int(6)
}
object(Ds\Vector)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.merge.php
