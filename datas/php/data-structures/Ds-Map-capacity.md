# Ds\Map::capacity

Source: https://devdocs.io/php/ds-map.capacity

(PECL ds >= 1.0.0)

Ds\Map::capacity — Returns the current capacity

### Description

```
public Ds\Map::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\Map::capacity() example

```
<?php
$map = new \Ds\Map();
var_dump($map->capacity());
?>
```

The above example will output something similar to:

```
int(16)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.capacity.php
