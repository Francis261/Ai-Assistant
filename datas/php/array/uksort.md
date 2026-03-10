# uksort

Source: https://devdocs.io/php/function.uksort

(PHP 4, PHP 5, PHP 7, PHP 8)

uksort — Sort an array by keys using a user-defined comparison function

### Description

```
uksort(array &$array, callable $callback): true
```

Sorts array in place by keys using a user-supplied comparison function to determine the order.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

Note:

Resets array's internal pointer to the first element.

### Parameters

The input array.

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 uksort() example

```
<?php
function cmp($a, $b)
{
    $a = preg_replace('@^(a|an|the) @', '', $a);
    $b = preg_replace('@^(a|an|the) @', '', $b);
    return strcasecmp($a, $b);
}

$a = array("John" => 1, "the Earth" => 2, "an apple" => 3, "a banana" => 4);

uksort($a, "cmp");

foreach ($a as $key => $value) {
    echo "$key: $value\n";
}
?>
```

The above example will output:

```
an apple: 3
a banana: 4
the Earth: 2
John: 1
```

### See Also

- usort() - Sort an array by values using a user-defined comparison function
- uasort() - Sort an array with a user-defined comparison function and maintain index association
- The comparison of array sorting functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uksort.php
