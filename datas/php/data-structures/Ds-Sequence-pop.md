# Ds\Sequence::pop

Source: https://devdocs.io/php/ds-sequence.pop

(PECL ds >= 1.0.0)

Ds\Sequence::pop — Removes and returns the last value

### Description

```
abstract public Ds\Sequence::pop(): mixed
```

Removes and returns the last value.

### Parameters

This function has no parameters.

### Return Values

The removed last value.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Sequence::pop() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);

var_dump($sequence->pop());
var_dump($sequence->pop());
var_dump($sequence->pop());
?>
```

The above example will output something similar to:

```
int(3)
int(2)
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.pop.php
