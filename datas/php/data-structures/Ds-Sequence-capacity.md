# Ds\Sequence::capacity

Source: https://devdocs.io/php/ds-sequence.capacity

(PECL ds >= 1.0.0)

Ds\Sequence::capacity — Returns the current capacity

### Description

```
abstract public Ds\Sequence::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\Sequence::capacity() example

```
<?php
$sequence = new \Ds\Vector();
var_dump($sequence->capacity());

$sequence->push(...range(1, 50));
var_dump($sequence->capacity());

$sequence[] = "a";
var_dump($sequence->capacity());
?>
```

The above example will output something similar to:

```
int(10)
int(50)
int(75)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.capacity.php
