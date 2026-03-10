# Ds\Map::remove

Source: https://devdocs.io/php/ds-map.remove

(PECL ds >= 1.0.0)

Ds\Map::remove — Removes and returns a value by key

### Description

```
public Ds\Map::remove(mixed $key, mixed $default = ?): mixed
```

Removes and returns a value by key, or return an optional default value if the key could not be found.

Note:

Keys of type object are supported. If an object implements Ds\Hashable, equality will be determined by the object's equals function. If an object does not implement Ds\Hashable, objects must be references to the same instance to be considered equal.

Note:

You can also use array syntax to access values by key, eg. $map["key"].

Be careful when using array syntax. Scalar keys will be coerced to integers by the engine. For example, $map["1"] will attempt to access int(1), while $map->get("1") will correctly look up the string key.

See Arrays.

### Parameters

The key to remove.

The optional default value, returned if the key could not be found.

### Return Values

The value that was removed, or the default value if provided and the key could not be found in the map.

### Errors/Exceptions

OutOfBoundsException if the key could not be found and a default value was not provided.

### Examples

Example #1 Ds\Map::remove() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->remove("a"));      //  1
var_dump($map->remove("e", 10));  // 10 (default used)
?>
```

The above example will output something similar to:

```
int(1)
int(10)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.remove.php
