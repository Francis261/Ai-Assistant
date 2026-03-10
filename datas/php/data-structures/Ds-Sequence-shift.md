# Ds\Sequence::shift

Source: https://devdocs.io/php/ds-sequence.shift

(PECL ds >= 1.0.0)

Ds\Sequence::shift — Removes and returns the first value

### Description

```
abstract public Ds\Sequence::shift(): mixed
```

Removes and returns the first value.

### Parameters

This function has no parameters.

### Return Values

The first value, which was removed.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Sequence::shift() example

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence->shift());
var_dump($sequence->shift());
var_dump($sequence->shift());
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.shift.php
