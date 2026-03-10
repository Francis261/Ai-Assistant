# Ds\Set::first

Source: https://devdocs.io/php/ds-set.first

(PECL ds >= 1.0.0)

Ds\Set::first — Returns the first value in the set

### Description

```
public Ds\Set::first(): mixed
```

Returns the first value in the set.

### Parameters

This function has no parameters.

### Return Values

The first value in the set.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Set::first() example

```
<?php
$set = new \Ds\Set([1, 2, 3]);
var_dump($set->first());
?>
```

The above example will output something similar to:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.first.php
