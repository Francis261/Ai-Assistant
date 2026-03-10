# ArrayObject::natsort

Source: https://devdocs.io/php/arrayobject.natsort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayObject::natsort — Sort entries using a "natural order" algorithm

### Description

```
public ArrayObject::natsort(): true
```

This method implements a sort algorithm that orders alphanumeric strings in the way a human being would while maintaining key/value associations. This is described as a "natural ordering". An example of the difference between this algorithm and the regular computer string sorting algorithms (used in ArrayObject::asort) method can be seen in the example below.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 ArrayObject::natsort() example

```
<?php
$array = array("img12.png", "img10.png", "img2.png", "img1.png");

$arr1 = new ArrayObject($array);
$arr2 = clone $arr1;

$arr1->asort();
echo "Standard sorting\n";
var_dump($arr1);

$arr2->natsort();
echo "\nNatural order sorting\n";
var_dump($arr2);
?>
```

The above example will output:

```
Standard sorting
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(4) {
    [3]=>
    string(8) "img1.png"
    [1]=>
    string(9) "img10.png"
    [0]=>
    string(9) "img12.png"
    [2]=>
    string(8) "img2.png"
  }
}

Natural order sorting
object(ArrayObject)#2 (1) {
  ["storage":"ArrayObject":private]=>
  array(4) {
    [3]=>
    string(8) "img1.png"
    [2]=>
    string(8) "img2.png"
    [1]=>
    string(9) "img10.png"
    [0]=>
    string(9) "img12.png"
  }
}
```

For more information see: Martin Pool's » Natural Order String Comparison page.

### See Also

- ArrayObject::asort() - Sort the entries by value
- ArrayObject::ksort() - Sort the entries by key
- ArrayObject::natcasesort() - Sort an array using a case insensitive "natural order" algorithm
- ArrayObject::uasort() - Sort the entries with a user-defined comparison function and maintain key association
- ArrayObject::uksort() - Sort the entries by keys using a user-defined comparison function
- natsort() - Sort an array using a "natural order" algorithm

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.natsort.php
