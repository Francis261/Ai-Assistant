# Ds\Map::isEmpty

Source: https://devdocs.io/php/ds-map.isempty

(PECL ds >= 1.0.0)

Ds\Map::isEmpty — Returns whether the map is empty

### Description

```
public Ds\Map::isEmpty(): bool
```

Returns whether the map is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the map is empty, false otherwise.

### Examples

Example #1 Ds\Map::isEmpty() example

```
<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map();

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
 https://www.php.net/manual/en/ds-map.isempty.php
