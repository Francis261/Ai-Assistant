# ArrayObject::setIteratorClass

Source: https://devdocs.io/php/arrayobject.setiteratorclass

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ArrayObject::setIteratorClass — Sets the iterator classname for the ArrayObject

### Description

```
public ArrayObject::setIteratorClass(string $iteratorClass): void
```

Sets the classname of the array iterator that is used by ArrayObject::getIterator().

### Parameters

The classname of the array iterator to use when iterating over this object.

### Return Values

No value is returned.

### Examples

Example #1 ArrayObject::setIteratorClass() example

```
<?php
// Custom ArrayIterator (inherits from ArrayIterator)
class MyArrayIterator extends ArrayIterator {
    // custom implementation
}

// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Set the iterator classname to the newly
$fruitsArrayObject->setIteratorClass('MyArrayIterator');
var_dump($fruitsArrayObject->getIterator());

?>
```

The above example will output:

```
object(MyArrayIterator)#2 (1) {
  ["storage":"ArrayIterator":private]=>
  object(ArrayObject)#1 (1) {
    ["storage":"ArrayObject":private]=>
    array(4) {
      ["lemons"]=>
      int(1)
      ["oranges"]=>
      int(4)
      ["bananas"]=>
      int(5)
      ["apples"]=>
      int(10)
    }
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.setiteratorclass.php
