# Ds\Sequence::reversed

Source: https://devdocs.io/php/ds-sequence.reversed

(PECL ds >= 1.0.0)

Ds\Sequence::reversed — Returns a reversed copy

### Description

```
abstract public Ds\Sequence::reversed(): Ds\Sequence
```

Returns a reversed copy of the sequence.

### Parameters

This function has no parameters.

### Return Values

A reversed copy of the sequence.

Note:

The current instance is not affected.

### Examples

Example #1 Ds\Sequence::reversed() example

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

print_r($sequence->reversed());
print_r($sequence);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => c
    [1] => b
    [2] => a
)
Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.reversed.php
