# Ds\Sequence::find

Source: https://devdocs.io/php/ds-sequence.find

(PECL ds >= 1.0.0)

Ds\Sequence::find — Attempts to find a value's index

### Description

```
abstract public Ds\Sequence::find(mixed $value): mixed
```

Returns the index of the value, or false if not found.

### Parameters

The value to find.

### Return Values

The index of the value, or false if not found.

Note:

Values will be compared by value and by type.

### Examples

Example #1 Ds\Sequence::find() example

```
<?php
$sequence = new \Ds\Vector(["a", 1, true]);

var_dump($sequence->find("a")); // 0
var_dump($sequence->find("b")); // false
var_dump($sequence->find("1")); // false
var_dump($sequence->find(1));   // 1
?>
```

The above example will output something similar to:

```
int(0)
bool(false)
bool(false)
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.find.php
