# current

Source: https://devdocs.io/php/function.current

(PHP 4, PHP 5, PHP 7, PHP 8)

current — Return the current element in an array

### Description

```
current(array|object $array): mixed
```

Every array has an internal pointer to its "current" element, which is initialized to the first element inserted into the array.

### Parameters

The array.

### Return Values

The current() function simply returns the value of the array element that's currently being pointed to by the internal pointer. It does not move the pointer in any way. If the internal pointer points beyond the end of the elements list or the array is empty, current() returns false.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

Example #1 Example use of current() and friends

```
<?php
$transport = array('foot', 'bike', 'car', 'plane');
echo $mode = current($transport), PHP_EOL; // $mode = 'foot';
echo $mode = next($transport), PHP_EOL;    // $mode = 'bike';
echo $mode = current($transport), PHP_EOL; // $mode = 'bike';
echo $mode = prev($transport), PHP_EOL;    // $mode = 'foot';
echo $mode = end($transport), PHP_EOL;     // $mode = 'plane';
echo $mode = current($transport), PHP_EOL; // $mode = 'plane';

$arr = array();
var_dump(current($arr)); // bool(false)

$arr = array(array());
var_dump(current($arr)); // array(0) { }
?>
```

### Notes

Note: The results of calling current() on an empty array and on an array, whose internal pointer points beyond the end of the elements, are indistinguishable from a bool false element. To properly traverse an array which may contain false elements, see the foreach control structure. To still use current() and properly check if the value is really an element of the array, the key() of the current() element should be checked to be strictly different from null.

### See Also

- end() - Set the internal pointer of an array to its last element
- key() - Fetch a key from an array
- each() - Return the current key and value pair from an array and advance the array cursor
- prev() - Rewind the internal array pointer
- reset() - Set the internal pointer of an array to its first element
- next() - Advance the internal pointer of an array
- foreach

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.current.php
