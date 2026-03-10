# Ds\Sequence::map

Source: https://devdocs.io/php/ds-sequence.map

(PECL ds >= 1.0.0)

Ds\Sequence::map — Returns the result of applying a callback to each value

### Description

```
abstract public Ds\Sequence::map(callable $callback): Ds\Sequence
```

Returns the result of applying a callback function to each value in the sequence.

### Parameters

```
callback(mixed $value): mixed
```

A callable to apply to each value in the sequence.

The callable should return what the new value will be in the new sequence.

### Return Values

The result of applying a callback to each value in the sequence.

Note:

The values of the current instance won't be affected.

### Examples

Example #1 Ds\Sequence::map() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);

print_r($sequence->map(function($value) { return $value * 2; }));
print_r($sequence);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.map.php
