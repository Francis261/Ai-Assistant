# ArrayObject::getArrayCopy

Source: https://devdocs.io/php/arrayobject.getarraycopy

(PHP 5, PHP 7, PHP 8)

ArrayObject::getArrayCopy — Creates a copy of the ArrayObject

### Description

```
public ArrayObject::getArrayCopy(): array
```

Exports the ArrayObject to an array.

### Parameters

This function has no parameters.

### Return Values

Returns a copy of the array. When the ArrayObject refers to an object, an array of the properties of that object will be returned.

### Examples

Example #1 ArrayObject::getArrayCopy() example

```
<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);
$fruitsArrayObject['pears'] = 4;

// create a copy of the array
$copy = $fruitsArrayObject->getArrayCopy();
var_dump($copy);

?>
```

The above example will output:

```
array(5) {
  ["lemons"]=>
  int(1)
  ["oranges"]=>
  int(4)
  ["bananas"]=>
  int(5)
  ["apples"]=>
  int(10)
  ["pears"]=>
  int(4)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.getarraycopy.php
