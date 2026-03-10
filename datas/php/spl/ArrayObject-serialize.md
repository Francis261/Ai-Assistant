# ArrayObject::serialize

Source: https://devdocs.io/php/arrayobject.serialize

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

ArrayObject::serialize — Serialize an ArrayObject

### Description

```
public ArrayObject::serialize(): string
```

Serializes an ArrayObject.

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

The serialized representation of the ArrayObject.

### Examples

Example #1 ArrayObject::serialize() example

```
<?php
$o = new ArrayObject();

$s1 = serialize($o);
$s2 = $o->serialize();

var_dump($s1);
var_dump($s2);
?>
```

The above example will output:

```
string(45) "C:11:"ArrayObject":21:{x:i:0;a:0:{};m:a:0:{}}"
string(21) "x:i:0;a:0:{};m:a:0:{}"
```

### See Also

- ArrayObject::unserialize() - Unserialize an ArrayObject
- serialize() - Generates a storable representation of a value
- Serializing Objects

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.serialize.php
