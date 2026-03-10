# Ds\Sequence::push

Source: https://devdocs.io/php/ds-sequence.push

(PECL ds >= 1.0.0)

Ds\Sequence::push — Adds values to the end of the sequence

### Description

```
abstract public Ds\Sequence::push(mixed ...$values): void
```

Adds values to the end of the sequence.

### Parameters

The values to add.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Sequence::push() example

```
<?php
$sequence = new \Ds\Vector();

$sequence->push("a");
$sequence->push("b");
$sequence->push("c", "d");
$sequence->push(...["e", "f"]);

print_r($sequence);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.push.php
