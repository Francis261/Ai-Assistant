# array_diff

Source: https://devdocs.io/php/function.array-diff

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

array_diff — Computes the difference of arrays

### Description

```
array_diff(array $array, array ...$arrays): array
```

Compares array against one or more other arrays and returns the values in array that are not present in any of the other arrays.

### Parameters

The array to compare from

Arrays to compare against

### Return Values

Returns an array containing all the entries from array that are not present in any of the other arrays. Keys in the array array are preserved.

### Changelog

### Examples

Example #1 array_diff() example

```
<?php
$array1 = array("a" => "green", "red", "blue", "red");
$array2 = array("b" => "green", "yellow", "red");
$result = array_diff($array1, $array2);

print_r($result);
?>
```

Multiple occurrences in $array1 are all treated the same way. This will output :

```
Array
(
    [1] => blue
)
```

Two elements are considered equal if and only if (string) $elem1 === (string) $elem2. That is, when the string representation is the same.

Example #2 array_diff() example with non-matching types

```
<?php
// This will generate a Notice that an array cannot be cast to a string.
$source = [1, 2, 3, 4];
$filter = [3, 4, [5], 6];
$result = array_diff($source, $filter);

// Whereas this is fine, since the objects can cast to a string.
class S {
  private $v;

  public function __construct(string $v) {
    $this->v = $v;
  }

  public function __toString() {
    return $this->v;
  }
}

$source = [new S('a'), new S('b'), new S('c')];
$filter = [new S('b'), new S('c'), new S('d')];

$result = array_diff($source, $filter);

// $result now contains one instance of S('a');
var_dump($result);
?>
```

To use an alternate comparison function, see array_udiff().

### Notes

Note:

This function only checks one dimension of a n-dimensional array. Of course you can check deeper dimensions by using array_diff($array1[0], $array2[0]);.

### See Also

- array_diff_assoc() - Computes the difference of arrays with additional index check
- array_udiff() - Computes the difference of arrays by using a callback function for data comparison
- array_intersect() - Computes the intersection of arrays
- array_intersect_assoc() - Computes the intersection of arrays with additional index check

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-diff.php
