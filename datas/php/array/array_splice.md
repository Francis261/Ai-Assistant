# array_splice

Source: https://devdocs.io/php/function.array-splice

(PHP 4, PHP 5, PHP 7, PHP 8)

array_splice — Remove a portion of the array and replace it with something else

### Description

```
array_splice(
 array &$array,
 int $offset,
 ?int $length = null,
 mixed $replacement = []
): array
```

Removes the elements designated by offset and length from the array array, and replaces them with the elements of the replacement array, if supplied.

Note:

Numerical keys in array are not preserved.

Note: If replacement is not an array, it will be typecast to one (i.e. (array) $replacement). This may result in unexpected behavior when using an object or null replacement.

### Parameters

The input array.

If offset is positive then the start of the removed portion is at that offset from the beginning of the array array.

If offset is negative then the start of the removed portion is at that offset from the end of the array array.

If length is omitted, removes everything from offset to the end of the array.

If length is specified and is positive, then that many elements will be removed.

If length is specified and is negative, then the end of the removed portion will be that many elements from the end of the array.

If length is specified and is zero, no elements will be removed.

To remove everything from offset to the end of the array when replacement is also specified, use count($input) for length.

If replacement array is specified, then the removed elements are replaced with elements from this array.

If offset and length are such that nothing is removed, then the elements from the replacement array are inserted in the place specified by the offset.

Note:

Keys in the replacement array are not preserved.

If replacement is just one element it is not necessary to put array() or square brackets around it, unless the element is an array itself, an object or null.

### Return Values

Returns an array consisting of the extracted elements.

### Changelog

### Examples

Example #1 array_splice() examples

```
<?php
$input = array("red", "green", "blue", "yellow");
array_splice($input, 2);
var_dump($input);

$input = array("red", "green", "blue", "yellow");
array_splice($input, 1, -1);
var_dump($input);

$input = array("red", "green", "blue", "yellow");
array_splice($input, 1, count($input), "orange");
var_dump($input);

$input = array("red", "green", "blue", "yellow");
array_splice($input, -1, 1, array("black", "maroon"));
var_dump($input);
?>
```

The above example will output:

```
array(2) {
  [0]=>
  string(3) "red"
  [1]=>
  string(5) "green"
}
array(2) {
  [0]=>
  string(3) "red"
  [1]=>
  string(6) "yellow"
}
array(2) {
  [0]=>
  string(3) "red"
  [1]=>
  string(6) "orange"
}
array(5) {
  [0]=>
  string(3) "red"
  [1]=>
  string(5) "green"
  [2]=>
  string(4) "blue"
  [3]=>
  string(5) "black"
  [4]=>
  string(6) "maroon"
}
```

Example #2 Equivalent statements to various array_splice() examples

The following statements are equivalent:

```
<?php

// append two elements to $input
array_push($input, $x, $y);
array_splice($input, count($input), 0, array($x, $y));

// remove the last element of $input
array_pop($input);
array_splice($input, -1);

// remove the first element of $input
array_shift($input);
array_splice($input, 0, 1);

// insert an element at the start of $input
array_unshift($input, $x, $y);
array_splice($input, 0, 0, array($x, $y));

// replace the value in $input at index $x
$input[$x] = $y; // for arrays where key equals offset
array_splice($input, $x, 1, $y);

?>
```

### See Also

- array_merge() - Merge one or more arrays
- array_slice() - Extract a slice of the array
- unset() - unset a given variable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-splice.php
