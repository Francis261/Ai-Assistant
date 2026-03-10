# iterator_to_array

Source: https://devdocs.io/php/function.iterator-to-array

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

iterator_to_array — Copy the iterator into an array

### Description

```
iterator_to_array(Traversable|array $iterator, bool $preserve_keys = true): array
```

Copy the elements of an iterator into an array.

### Parameters

The iterator being copied.

Whether to use the iterator element keys as index.

If a key is an array or object, a warning will be generated. null keys will be converted to an empty string, float keys will be truncated to their int counterpart, resource keys will generate a warning and be converted to their resource ID, and bool keys will be converted to integers.

Note:

If this parameter is not set or set to true, duplicate keys will be overwritten. The last value with a given key will be in the returned array. Set this parameter to false to get all the values in any case.

### Return Values

An array containing the elements of the iterator.

### Changelog

### Examples

Example #1 iterator_to_array() example

```
<?php
$iterator = new ArrayIterator(array('recipe'=>'pancakes', 'egg', 'milk', 'flour'));
var_dump(iterator_to_array($iterator, true));
var_dump(iterator_to_array($iterator, false));
?>
```

The above example will output:

```
array(4) {
  ["recipe"]=>
  string(8) "pancakes"
  [0]=>
  string(3) "egg"
  [1]=>
  string(4) "milk"
  [2]=>
  string(5) "flour"
}
array(4) {
  [0]=>
  string(8) "pancakes"
  [1]=>
  string(3) "egg"
  [2]=>
  string(4) "milk"
  [3]=>
  string(5) "flour"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iterator-to-array.php
