# Ds\Collection::isEmpty

Source: https://devdocs.io/php/ds-collection.isempty

(PECL ds >= 1.0.0)

Ds\Collection::isEmpty — Returns whether the collection is empty

### Description

```
public Ds\Collection::isEmpty(): bool
```

Returns whether the collection is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the collection is empty, false otherwise.

### Examples

Example #1 Ds\Collection::isEmpty() example

```
<?php
$a = new \Ds\Vector([1, 2, 3]);
$b = new \Ds\Vector();

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
 https://www.php.net/manual/en/ds-collection.isempty.php
