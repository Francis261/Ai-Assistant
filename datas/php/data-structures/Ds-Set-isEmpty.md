# Ds\Set::isEmpty

Source: https://devdocs.io/php/ds-set.isempty

(PECL ds >= 1.0.0)

Ds\Set::isEmpty — Returns whether the set is empty

### Description

```
public Ds\Set::isEmpty(): bool
```

Returns whether the set is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the set is empty, false otherwise.

### Examples

Example #1 Ds\Set::isEmpty() example

```
<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.isempty.php
