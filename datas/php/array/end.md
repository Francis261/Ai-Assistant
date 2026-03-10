# end

Source: https://devdocs.io/php/function.end

(PHP 4, PHP 5, PHP 7, PHP 8)

end — Set the internal pointer of an array to its last element

### Description

```
end(array|object &$array): mixed
```

end() advances array's internal pointer to the last element, and returns its value.

### Parameters

The array. This array is passed by reference because it is modified by the function. This means you must pass it a real variable and not a function returning an array because only actual variables may be passed by reference.

### Return Values

Returns the value of the last element or false for empty array.

### Changelog

### Examples

Example #1 end() example

```
<?php

$fruits = array('apple', 'banana', 'cranberry');
echo end($fruits); // cranberry

?>
```

### See Also

- current() - Return the current element in an array
- each() - Return the current key and value pair from an array and advance the array cursor
- prev() - Rewind the internal array pointer
- reset() - Set the internal pointer of an array to its first element
- next() - Advance the internal pointer of an array
- array_key_last() - Gets the last key of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.end.php
