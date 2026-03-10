# Ds\Sequence::first

Source: https://devdocs.io/php/ds-sequence.first

(PECL ds >= 1.0.0)

Ds\Sequence::first — Returns the first value in the sequence

### Description

```
abstract public Ds\Sequence::first(): mixed
```

Returns the first value in the sequence.

### Parameters

This function has no parameters.

### Return Values

The first value in the sequence.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Sequence::first() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);
var_dump($sequence->first());
?>
```

The above example will output something similar to:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.first.php
