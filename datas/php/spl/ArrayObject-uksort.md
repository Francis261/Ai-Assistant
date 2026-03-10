# ArrayObject::uksort

Source: https://devdocs.io/php/arrayobject.uksort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayObject::uksort — Sort the entries by keys using a user-defined comparison function

### Description

```
public ArrayObject::uksort(callable $callback): true
```

This function sorts the keys of the entries using a user-supplied comparison function. The key to entry correlations will be maintained.

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

Example #1 ArrayObject::uksort() example

```
<?php
function cmp($a, $b) {
    $a = preg_replace('@^(a|an|the) @', '', $a);
    $b = preg_replace('@^(a|an|the) @', '', $b);
    return strcasecmp($a, $b);
}

$array = array("John" => 1, "the Earth" => 2, "an apple" => 3, "a banana" => 4);
$arrayObject = new ArrayObject($array);
$arrayObject->uksort('cmp');

foreach ($arrayObject as $key => $value) {
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

- ArrayObject::asort() - Sort the entries by value
- ArrayObject::ksort() - Sort the entries by key
- ArrayObject::natsort() - Sort entries using a "natural order" algorithm
- ArrayObject::natcasesort() - Sort an array using a case insensitive "natural order" algorithm
- ArrayObject::uasort() - Sort the entries with a user-defined comparison function and maintain key association
- uksort() - Sort an array by keys using a user-defined comparison function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.uksort.php
