# array_replace

Source: https://devdocs.io/php/function.array-replace

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

array_replace — Replaces elements from passed arrays into the first array

### Description

```
array_replace(array $array, array ...$replacements): array
```

array_replace() creates a new array and assigns items into it for each key in each of the provided arrays. If a key appears in multiple input arrays, the value from the right-most input array will be used.

array_replace() does not process elements items recursively, it replaces the entire value for each key when it does a replacement.

### Parameters

The array in which elements are replaced.

Arrays from which elements will be extracted. Values from later arrays overwrite the previous values.

### Return Values

Returns an array.

### Examples

Example #1 array_replace() example

```
<?php
$base = array("orange", "banana", "apple", "raspberry");
$replacements = array(0 => "pineapple", 4 => "cherry");
$replacements2 = array(0 => "grape");

$basket = array_replace($base, $replacements, $replacements2);
var_dump($basket);
?>
```

The above example will output:

```
array(5) {
  [0]=>
  string(5) "grape"
  [1]=>
  string(6) "banana"
  [2]=>
  string(5) "apple"
  [3]=>
  string(9) "raspberry"
  [4]=>
  string(6) "cherry"
}
```

Example #2 Example of how nested arrays are handled

```
<?php
$base = [ 'citrus' => [ 'orange', 'lemon' ], 'pome' => [ 'apple' ] ];
$replacements = [ 'citrus' => [ 'grapefruit' ] ];
$replacements2 = [ 'citrus' => [ 'kumquat', 'citron' ], 'pome' => [ 'loquat' ] ];

$basket = array_replace($base, $replacements, $replacements2);
var_dump($basket);
?>
```

The above example will output:

```
array(2) {
  ["citrus"]=>
  array(2) {
    [0]=>
    string(7) "kumquat"
    [1]=>
    string(6) "citron"
  }
  ["pome"]=>
  array(1) {
    [0]=>
    string(6) "loquat"
  }
}
```

### See Also

- array_replace_recursive() - Replaces elements from passed arrays into the first array recursively
- array_merge() - Merge one or more arrays

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-replace.php
