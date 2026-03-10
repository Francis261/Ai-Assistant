# Ds\Sequence::rotate

Source: https://devdocs.io/php/ds-sequence.rotate

(PECL ds >= 1.0.0)

Ds\Sequence::rotate — Rotates the sequence by a given number of rotations

### Description

```
abstract public Ds\Sequence::rotate(int $rotations): void
```

Rotates the sequence by a given number of rotations, which is equivalent to successively calling $sequence->push($sequence->shift()) if the number of rotations is positive, or $sequence->unshift($sequence->pop()) if negative.

### Parameters

The number of times the sequence should be rotated.

### Return Values

No value is returned.. The sequence of the current instance will be rotated.

### Examples

Example #1 Ds\Sequence::rotate() example

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c", "d"]);

$sequence->rotate(1);  // "a" is shifted, then pushed.
print_r($sequence);

$sequence->rotate(2);  // "b" and "c" are both shifted, the pushed.
print_r($sequence);
?>
```

The above example will output something similar to:

```
(
    [0] => b
    [1] => c
    [2] => d
    [3] => a
)
Ds\Vector Object
(
    [0] => d
    [1] => a
    [2] => b
    [3] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.rotate.php
