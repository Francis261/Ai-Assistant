# Ds\Map::hasKey

Source: https://devdocs.io/php/ds-map.haskey

(PECL ds >= 1.0.0)

Ds\Map::hasKey — Determines whether the map contains a given key

### Description

```
public Ds\Map::hasKey(mixed $key): bool
```

Determines whether the map contains a given key.

### Parameters

The key to look for.

### Return Values

Returns true if the key could found, false otherwise.

### Examples

Example #1 Ds\Map::hasKey() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->hasKey("a")); // true
var_dump($map->hasKey("e")); // false
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.haskey.php
