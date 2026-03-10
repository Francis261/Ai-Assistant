# ArrayObject::uasort

Source: https://devdocs.io/php/arrayobject.uasort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayObject::uasort — Sort the entries with a user-defined comparison function and maintain key association

### Description

```
public ArrayObject::uasort(callable $callback): true
```

This function sorts the entries such that keys maintain their correlation with the entry that they are associated with, using a user-defined comparison function.

This is used mainly when sorting associative arrays where the actual element order is significant.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 ArrayObject::uasort() example

```
<?php
// Comparison function
function cmp($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return ($a < $b) ? -1 : 1;
}

// Array to be sorted
$array = array('a' => 4, 'b' => 8, 'c' => -1, 'd' => -9, 'e' => 2, 'f' => 5, 'g' => 3, 'h' => -4);
$arrayObject = new ArrayObject($array);
var_dump($arrayObject);

// Sort and print the resulting array
$arrayObject->uasort('cmp');
var_dump($arrayObject);
?>
```

The above example will output:

```
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(8) {
    ["a"]=>
    int(4)
    ["b"]=>
    int(8)
    ["c"]=>
    int(-1)
    ["d"]=>
    int(-9)
    ["e"]=>
    int(2)
    ["f"]=>
    int(5)
    ["g"]=>
    int(3)
    ["h"]=>
    int(-4)
  }
}
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(8) {
    ["d"]=>
    int(-9)
    ["h"]=>
    int(-4)
    ["c"]=>
    int(-1)
    ["e"]=>
    int(2)
    ["g"]=>
    int(3)
    ["a"]=>
    int(4)
    ["f"]=>
    int(5)
    ["b"]=>
    int(8)
  }
}
```

### See Also

- ArrayObject::asort() - Sort the entries by value
- ArrayObject::ksort() - Sort the entries by key
- ArrayObject::natsort() - Sort entries using a "natural order" algorithm
- ArrayObject::natcasesort() - Sort an array using a case insensitive "natural order" algorithm
- ArrayObject::uksort() - Sort the entries by keys using a user-defined comparison function
- uasort() - Sort an array with a user-defined comparison function and maintain index association

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.uasort.php
