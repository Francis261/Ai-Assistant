# prev

Source: https://devdocs.io/php/function.prev

(PHP 4, PHP 5, PHP 7, PHP 8)

prev — Rewind the internal array pointer

### Description

```
prev(array|object &$array): mixed
```

Rewind the internal array pointer.

prev() behaves just like next(), except it rewinds the internal array pointer one place instead of advancing it.

### Parameters

The input array.

### Return Values

Returns the array value in the previous place that's pointed to by the internal array pointer, or false if there are no more elements.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

Example #1 Example use of prev() and friends

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

Note: The beginning of an array is indistinguishable from a bool false element. To make the distinction, check that the key() of the prev() element is not null.

### See Also

- current() - Return the current element in an array
- end() - Set the internal pointer of an array to its last element
- next() - Advance the internal pointer of an array
- reset() - Set the internal pointer of an array to its first element
- each() - Return the current key and value pair from an array and advance the array cursor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.prev.php
