# SplFixedArray::setSize

Source: https://devdocs.io/php/splfixedarray.setsize

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::setSize — Change the size of an array

### Description

```
public SplFixedArray::setSize(int $size): true
```

Change the size of an array to the new size of size. If size is less than the current array size, any values after the new size will be discarded. If size is greater than the current array size, the array will be padded with null values.

### Parameters

The new array size. This should be a value between 0 and PHP_INT_MAX.

### Return Values

Always returns true.

### Errors/Exceptions

Throws ValueError when size is less than zero.

### Changelog

### Examples

Example #1 SplFixedArray::setSize() example

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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.setsize.php
