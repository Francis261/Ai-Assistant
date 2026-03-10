# ArrayObject::__construct

Source: https://devdocs.io/php/arrayobject.construct

(PHP 5, PHP 7, PHP 8)

ArrayObject::__construct — Construct a new array object

### Description

This constructs a new array object.

### Parameters

The array parameter accepts an array or an Object.

Flags to control the behaviour of the ArrayObject object. See ArrayObject::setFlags().

Specify the class that will be used for iteration of the ArrayObject object. The class must be a subtype of the ArrayIterator class.

### Examples

Example #1 ArrayObject::__construct() example

```
<?php

$array = [
    '1' => 'one',
    '2' => 'two',
    '3' => 'three'
];

$arrayobject = new ArrayObject($array);

var_dump($arrayobject);

?>
```

The above example will output:

```
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(3) {
    [1]=>
    string(3) "one"
    [2]=>
    string(3) "two"
    [3]=>
    string(5) "three"
  }
}
```

### See Also

- ArrayObject::setflags() - Sets the behavior flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.construct.php
