# Ds\Sequence::reverse

Source: https://devdocs.io/php/ds-sequence.reverse

(PECL ds >= 1.0.0)

Ds\Sequence::reverse — Reverses the sequence in-place

### Description

```
abstract public Ds\Sequence::reverse(): void
```

Reverses the sequence in-place.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Sequence::reverse() example

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);
$sequence->reverse();

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
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.reverse.php
