# reset

Source: https://devdocs.io/php/function.reset

(PHP 4, PHP 5, PHP 7, PHP 8)

reset — Set the internal pointer of an array to its first element

### Description

```
reset(array|object &$array): mixed
```

reset() rewinds array's internal pointer to the first element and returns the value of the first array element.

### Parameters

The input array.

### Return Values

Returns the value of the first array element, or false if the array is empty.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

Example #1 reset() example

```
<?php

$array = array('step one', 'step two', 'step three', 'step four');

// by default, the pointer is on the first element
echo current($array) . "<br />\n"; // "step one"

// skip two steps
next($array);
next($array);
echo current($array) . "<br />\n"; // "step three"

// reset pointer, start again on step one
reset($array);
echo current($array) . "<br />\n"; // "step one"

?>
```

### Notes

Note: The return value for an empty array is indistinguishable from the return value in case of an array which has a bool false first element. To properly check the value of the first element of an array which may contain false elements, first check the count() of the array, or check that key() is not null, after calling reset().

### See Also

- current() - Return the current element in an array
- each() - Return the current key and value pair from an array and advance the array cursor
- end() - Set the internal pointer of an array to its last element
- next() - Advance the internal pointer of an array
- prev() - Rewind the internal array pointer
- array_key_first() - Gets the first key of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.reset.php
