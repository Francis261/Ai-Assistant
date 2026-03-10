# ArrayObject::natcasesort

Source: https://devdocs.io/php/arrayobject.natcasesort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayObject::natcasesort — Sort an array using a case insensitive "natural order" algorithm

### Description

```
public ArrayObject::natcasesort(): true
```

This method is a case insensitive version of ArrayObject::natsort.

This method implements a sort algorithm that orders alphanumeric strings in the way a human being would while maintaining key/value associations. This is described as a "natural ordering".

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 ArrayObject::natcasesort() example

```
<?php
$array = array('IMG0.png', 'img12.png', 'img10.png', 'img2.png', 'img1.png', 'IMG3.png');

$arr1 = new ArrayObject($array);
$arr2 = clone $arr1;

$arr1->asort();
echo "Standard sorting\n";
var_dump($arr1);

$arr2->natcasesort();
echo "\nNatural order sorting (case-insensitive)\n";
var_dump($arr2);
?>
```

The above example will output:

```
Standard sorting
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(6) {
    [0]=>
    string(8) "IMG0.png"
    [5]=>
    string(8) "IMG3.png"
    [4]=>
    string(8) "img1.png"
    [2]=>
    string(9) "img10.png"
    [1]=>
    string(9) "img12.png"
    [3]=>
    string(8) "img2.png"
  }
}

Natural order sorting (case-insensitive)
object(ArrayObject)#2 (1) {
  ["storage":"ArrayObject":private]=>
  array(6) {
    [0]=>
    string(8) "IMG0.png"
    [4]=>
    string(8) "img1.png"
    [3]=>
    string(8) "img2.png"
    [5]=>
    string(8) "IMG3.png"
    [2]=>
    string(9) "img10.png"
    [1]=>
    string(9) "img12.png"
  }
}
```

For more information see: Martin Pool's » Natural Order String Comparison page.

### See Also

- ArrayObject::asort() - Sort the entries by value
- ArrayObject::ksort() - Sort the entries by key
- ArrayObject::natsort() - Sort entries using a "natural order" algorithm
- ArrayObject::uasort() - Sort the entries with a user-defined comparison function and maintain key association
- ArrayObject::uksort() - Sort the entries by keys using a user-defined comparison function
- natcasesort() - Sort an array using a case insensitive "natural order" algorithm

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.natcasesort.php
