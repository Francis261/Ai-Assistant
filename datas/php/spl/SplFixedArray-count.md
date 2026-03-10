# SplFixedArray::count

Source: https://devdocs.io/php/splfixedarray.count

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::count — Returns the size of the array

### Description

```
public SplFixedArray::count(): int
```

Returns the size of the array.

### Parameters

This function has no parameters.

### Return Values

Returns the size of the array.

### Examples

Example #1 SplFixedArray::count() example

```
<?php
$array = new SplFixedArray(5);
echo $array->count() . "\n";
echo count($array) . "\n";
?>
```

The above example will output:

```
5
5
```

### Notes

Note:

This method is functionally equivalent to SplFixedArray::getSize().

Note:

The count of elements is always equal to the set size because all values are initially initialized with null.

### See Also

- SplFixedArray::getSize() - Gets the size of the array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.count.php
