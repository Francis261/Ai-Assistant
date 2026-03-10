# ArrayObject::getIteratorClass

Source: https://devdocs.io/php/arrayobject.getiteratorclass

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ArrayObject::getIteratorClass — Gets the iterator classname for the ArrayObject

### Description

```
public ArrayObject::getIteratorClass(): string
```

Gets the class name of the array iterator that is used by ArrayObject::getIterator().

### Parameters

This function has no parameters.

### Return Values

Returns the iterator class name that is used to iterate over this object.

### Examples

Example #1 ArrayObject::getIteratorClass() example

```
<?php
// Custom ArrayIterator (inherits from ArrayIterator)
class MyArrayIterator extends ArrayIterator {
    // custom implementation
}

// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Get the current class name
$className = $fruitsArrayObject->getIteratorClass();
var_dump($className);

// Set new classname
$fruitsArrayObject->setIteratorClass('MyArrayIterator');

// Get the new iterator classname
$className = $fruitsArrayObject->getIteratorClass();
var_dump($className);
?>
```

The above example will output:

```
string(13) "ArrayIterator"
string(15) "MyArrayIterator"
```

### See Also

- The ArrayObject::setIteratorClass method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.getiteratorclass.php
