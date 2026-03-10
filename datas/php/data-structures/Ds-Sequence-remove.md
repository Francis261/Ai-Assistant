# Ds\Sequence::remove

Source: https://devdocs.io/php/ds-sequence.remove

(PECL ds >= 1.0.0)

Ds\Sequence::remove — Removes and returns a value by index

### Description

```
abstract public Ds\Sequence::remove(int $index): mixed
```

Removes and returns a value by index.

### Parameters

The index of the value to remove.

### Return Values

The value that was removed.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Sequence::remove() example

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence->remove(1));
var_dump($sequence->remove(0));
var_dump($sequence->remove(0));
?>
```

The above example will output something similar to:

```
string(1) "b"
string(1) "a"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.remove.php
