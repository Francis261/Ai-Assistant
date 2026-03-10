# ArrayAccess::offsetGet

Source: https://devdocs.io/php/arrayaccess.offsetget

(PHP 5, PHP 7, PHP 8)

ArrayAccess::offsetGet — Offset to retrieve

### Description

```
public ArrayAccess::offsetGet(mixed $offset): mixed
```

Returns the value at specified offset.

This method is executed when checking if offset is empty().

### Parameters

The offset to retrieve.

### Return Values

Can return all value types.

### Notes

Note:

It's possible for implementations of this method to return by reference. This makes indirect modifications to the overloaded array dimensions of ArrayAccess objects possible.

A direct modification is one that replaces completely the value of the array dimension, as in $obj[6] = 7. An indirect modification, on the other hand, only changes part of the dimension, or attempts to assign the dimension by reference to another variable, as in $obj[6][7] = 7 or $var =& $obj[6]. Increments with ++ and decrements with -- are also implemented in a way that requires indirect modification.

While direct modification triggers a call to ArrayAccess::offsetSet(), indirect modification triggers a call to ArrayAccess::offsetGet(). In that case, the implementation of ArrayAccess::offsetGet() must be able to return by reference, otherwise an E_NOTICE message is raised.

### See Also

- ArrayAccess::offsetExists() - Whether an offset exists

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayaccess.offsetget.php
