# Ds\Sequence::unshift

Source: https://devdocs.io/php/ds-sequence.unshift

(PECL ds >= 1.0.0)

Ds\Sequence::unshift — Adds values to the front of the sequence

### Description

```
abstract public Ds\Sequence::unshift(mixed $values = ?): void
```

Adds values to the front of the sequence, moving all the current values forward to make room for the new values.

### Parameters

The values to add to the front of the sequence.

Note:

Multiple values will be added in the same order that they are passed.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Sequence::unshift() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);

$sequence->unshift("a");
$sequence->unshift("b", "c");

print_r($sequence);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => a
    [3] => 1
    [4] => 2
    [5] => 3
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.unshift.php
