# Ds\Sequence::last

Source: https://devdocs.io/php/ds-sequence.last

(PECL ds >= 1.0.0)

Ds\Sequence::last — Returns the last value

### Description

```
abstract public Ds\Sequence::last(): mixed
```

Returns the last value in the sequence.

### Parameters

This function has no parameters.

### Return Values

The last value in the sequence.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Sequence::last() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);
var_dump($sequence->last());
?>
```

The above example will output something similar to:

```
int(3)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.last.php
