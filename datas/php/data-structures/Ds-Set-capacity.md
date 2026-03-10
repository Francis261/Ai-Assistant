# Ds\Set::capacity

Source: https://devdocs.io/php/ds-set.capacity

(PECL ds >= 1.0.0)

Ds\Set::capacity — Returns the current capacity

### Description

```
public Ds\Set::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\Set::capacity() example

```
<?php
$set = new \Ds\Set();
var_dump($set->capacity());

$set->add(...range(1, 50));
var_dump($set->capacity());
?>
```

The above example will output something similar to:

```
int(16)
int(64)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.capacity.php
