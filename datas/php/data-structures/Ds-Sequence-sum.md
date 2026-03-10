# Ds\Sequence::sum

Source: https://devdocs.io/php/ds-sequence.sum

(PECL ds >= 1.0.0)

Ds\Sequence::sum — Returns the sum of all values in the sequence

### Description

```
abstract public Ds\Sequence::sum(): int|float
```

Returns the sum of all values in the sequence.

Note:

Arrays and objects are considered equal to zero when calculating the sum.

### Parameters

This function has no parameters.

### Return Values

The sum of all the values in the sequence as either a float or int depending on the values in the sequence.

### Examples

Example #1 Ds\Sequence::sum() integer example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);
var_dump($sequence->sum());
?>
```

The above example will output something similar to:

```
int(6)
```

Example #2 Ds\Sequence::sum() float example

```
<?php
$sequence = new \Ds\Vector([1, 2.5, 3]);
var_dump($sequence->sum());
?>
```

The above example will output something similar to:

```
float(6.5)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.sum.php
