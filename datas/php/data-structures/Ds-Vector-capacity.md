# Ds\Vector::capacity

Source: https://devdocs.io/php/ds-vector.capacity

(PECL ds >= 1.0.0)

Ds\Vector::capacity — Returns the current capacity

### Description

```
public Ds\Vector::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\Vector::capacity() example

```
<?php
$vector = new \Ds\Vector();
var_dump($vector->capacity());

$vector->push(...range(1, 50));
var_dump($vector->capacity());

$vector[] = "a";
var_dump($vector->capacity());
?>
```

The above example will output something similar to:

```
int(10)
int(50)
int(75)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-vector.capacity.php
