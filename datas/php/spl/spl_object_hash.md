# spl_object_hash

Source: https://devdocs.io/php/function.spl-object-hash

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

spl_object_hash — Return hash id for given object

### Description

```
spl_object_hash(object $object): string
```

This function returns a unique identifier for the object. This id can be used as a hash key for storing objects, or for identifying an object, as long as the object is not destroyed. Once the object is destroyed, its hash may be reused for other objects. This behavior is similar to spl_object_id().

### Parameters

Any object.

### Return Values

A string that is unique for each currently existing object and is always the same for each object.

### Examples

Example #1 A spl_object_hash() example

```
<?php
$id = spl_object_hash($object);
$storage[$id] = $object;
?>
```

### Notes

Note:

When an object is destroyed, its hash may be reused for other objects.

Note:

Object hashes should be compared for identity with === and !==, because the returned hash could be a numeric string. For example: 0000000000000e600000000000000000.

### See Also

- spl_object_id() - Return the integer object handle for given object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.spl-object-hash.php
