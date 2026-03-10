# Ds\Map::get

Source: https://devdocs.io/php/ds-map.get

(PECL ds >= 1.0.0)

Ds\Map::get — Returns the value for a given key

### Description

```
public Ds\Map::get(mixed $key, mixed $default = ?): mixed
```

Returns the value for a given key, or an optional default value if the key could not be found.

Note:

Keys of type object are supported. If an object implements Ds\Hashable, equality will be determined by the object's equals function. If an object does not implement Ds\Hashable, objects must be references to the same instance to be considered equal.

Note:

You can also use array syntax to access values by key, eg. $map["key"].

Be careful when using array syntax. Scalar keys will be coerced to integers by the engine. For example, $map["1"] will attempt to access int(1), while $map->get("1") will correctly look up the string key.

See Arrays.

### Parameters

The key to look up.

The optional default value, returned if the key could not be found.

### Return Values

The value mapped to the given key, or the default value if provided and the key could not be found in the map.

### Errors/Exceptions

OutOfBoundsException if the key could not be found and a default value was not provided.

### Examples

Example #1 Ds\Map::get() example

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->get("a"));       // 1
var_dump($map->get("d", 10));   // 10 (default used)
?>
```

The above example will output something similar to:

```
int(1)
int(10)
```

Example #2 Ds\Map::get() example using array syntax

```
<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map["a"]); // 1
?>
```

The above example will output something similar to:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.get.php
