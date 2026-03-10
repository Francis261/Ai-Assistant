# Ds\Map::hasValue

Source: https://devdocs.io/php/ds-map.hasvalue

(PECL ds >= 1.0.0)

Ds\Map::hasValue — Determines whether the map contains a given value

### Description

```
public Ds\Map::hasValue(mixed $value): bool
```

Determines whether the map contains a given value.

### Parameters

The value to look for.

### Return Values

Returns true if the value could found, false otherwise.

### Examples

Example #1 Ds\Map::hasValue() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->hasValue(1)); // true
var_dump($map->hasValue(4)); // false
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.hasvalue.php
