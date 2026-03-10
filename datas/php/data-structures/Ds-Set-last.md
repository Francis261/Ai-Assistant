# Ds\Set::last

Source: https://devdocs.io/php/ds-set.last

(PECL ds >= 1.0.0)

Ds\Set::last — Returns the last value in the set

### Description

```
public Ds\Set::last(): mixed
```

Returns the last value in the set.

### Parameters

This function has no parameters.

### Return Values

The last value in the set.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Set::last() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);
var_dump($set->last());
?>
```

The above example will output something similar to:

```
int(3)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.last.php
