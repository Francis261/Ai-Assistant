# spl_object_id

Source: https://devdocs.io/php/function.spl-object-id

(PHP 7 >= 7.2.0, PHP 8)

spl_object_id — Return the integer object handle for given object

### Description

```
spl_object_id(object $object): int
```

This function returns a unique identifier for the object. The object id is unique for the lifetime of the object. Once the object is destroyed, its id may be reused for other objects. This behavior is similar to spl_object_hash().

### Parameters

Any object.

### Return Values

An integer identifier that is unique for each currently existing object and is always the same for each object.

### Examples

Example #1 A spl_object_id() example

```
<?php
$id = spl_object_id($object);
$storage[$id] = $object;
?>
```

### Notes

Note:

When an object is destroyed, its id may be reused for other objects.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.spl-object-id.php
