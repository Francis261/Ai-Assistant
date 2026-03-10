# SplFixedArray::getSize

Source: https://devdocs.io/php/splfixedarray.getsize

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::getSize — Gets the size of the array

### Description

```
public SplFixedArray::getSize(): int
```

Gets the size of the array.

### Parameters

This function has no parameters.

### Return Values

Returns the size of the array, as an int.

### Examples

Example #1 SplFixedArray::getSize() example

```
<?php
$array = new SplFixedArray(5);
echo $array->getSize()."\n";
$array->setSize(10);
echo $array->getSize()."\n";
?>
```

The above example will output:

```
5
10
```

### Notes

Note:

This method is functionally equivalent to SplFixedArray::count()

### See Also

- SplFixedArray::count() - Returns the size of the array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.getsize.php
