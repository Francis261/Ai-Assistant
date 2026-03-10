# ArrayObject::append

Source: https://devdocs.io/php/arrayobject.append

(PHP 5, PHP 7, PHP 8)

ArrayObject::append — Appends the value

### Description

```
public ArrayObject::append(mixed $value): void
```

Appends a new value as the last element.

Note:

This method cannot be called when the ArrayObject was constructed from an object. Use ArrayObject::offsetSet() instead.

### Parameters

The value being appended.

### Return Values

No value is returned.

### Examples

Example #1 ArrayObject::append() example

```
<?php
$arrayobj = new ArrayObject(array('first','second','third'));
$arrayobj->append('fourth');
$arrayobj->append(array('five', 'six'));
var_dump($arrayobj);
?>
```

The above example will output:

```
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(5) {
    [0]=>
    string(5) "first"
    [1]=>
    string(6) "second"
    [2]=>
    string(5) "third"
    [3]=>
    string(6) "fourth"
    [4]=>
    array(2) {
      [0]=>
      string(4) "five"
      [1]=>
      string(3) "six"
    }
  }
}
```

### See Also

- ArrayObject::offsetSet() - Sets the value at the specified index to newval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.append.php
