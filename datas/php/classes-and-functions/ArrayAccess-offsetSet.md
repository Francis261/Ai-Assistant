# ArrayAccess::offsetSet

Source: https://devdocs.io/php/arrayaccess.offsetset

(PHP 5, PHP 7, PHP 8)

ArrayAccess::offsetSet — Assign a value to the specified offset

### Description

```
public ArrayAccess::offsetSet(mixed $offset, mixed $value): void
```

Assigns a value to the specified offset.

### Parameters

The offset to assign the value to.

The value to set.

### Return Values

No value is returned.

### Notes

Note:

The offset parameter will be set to null if another value is not available, like in the following example.

```
<?php
$arrayaccess[] = "first value";
$arrayaccess[] = "second value";
print_r($arrayaccess);
?>
```

The above example will output:

```
Array
(
    [0] => first value
    [1] => second value
)
```

Note:

This function is not called in assignments by reference and otherwise indirect changes to array dimensions overloaded with ArrayAccess (indirect in the sense they are made not by changing the dimension directly, but by changing a sub-dimension or sub-property or assigning the array dimension by reference to another variable). Instead, ArrayAccess::offsetGet() is called. The operation will only be successful if that method returns by reference.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayaccess.offsetset.php
