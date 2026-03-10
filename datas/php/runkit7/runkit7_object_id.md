# runkit7_object_id

Source: https://devdocs.io/php/function.runkit7-object-id

(PECL runkit7 >= Unknown)

runkit7_object_id — Return the integer object handle for given object

### Description

```
runkit7_object_id(object $obj): int
```

This function is equivalent to spl_object_id().

This function returns a unique identifier for the object. The object id is unique for the lifetime of the object. Once the object is destroyed, its id may be reused for other objects. This behavior is similar to spl_object_hash().

### Parameters

Any object.

### Return Values

An integer identifier that is unique for each currently existing object and is always the same for each object.

### Notes

Note:

When an object is destroyed, its id may be reused for other objects.

### See Also

- spl_object_id() - Return the integer object handle for given object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-object-id.php
