# next

Source: https://devdocs.io/php/function.next

(PHP 4, PHP 5, PHP 7, PHP 8)

next — Advance the internal pointer of an array

### Description

```
next(array|object &$array): mixed
```

next() behaves like current(), with one difference. It advances the internal array pointer one place forward before returning the element value. That means it returns the next array value and advances the internal array pointer by one.

### Parameters

The array being affected.

### Return Values

Returns the array value in the next place that's pointed to by the internal array pointer, or false if there are no more elements.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

Example #1 Example use of next() and friends

```
<?php
$transport = array('foot', 'bike', 'car', 'plane');
echo $mode = current($transport), PHP_EOL; // $mode = 'foot';
echo $mode = next($transport), PHP_EOL;    // $mode = 'bike';
echo $mode = next($transport), PHP_EOL;    // $mode = 'car';
echo $mode = prev($transport), PHP_EOL;    // $mode = 'bike';
echo $mode = end($transport), PHP_EOL;     // $mode = 'plane';
?>
```

### Notes

Note: The end of an array is indistinguishable from a bool false element. To properly traverse an array which may contain false elements, see the foreach function. To still use next() and properly check if the end of the array has been reached, verify that the key() is null.

### See Also

- current() - Return the current element in an array
- end() - Set the internal pointer of an array to its last element
- prev() - Rewind the internal array pointer
- reset() - Set the internal pointer of an array to its first element
- each() - Return the current key and value pair from an array and advance the array cursor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.next.php
