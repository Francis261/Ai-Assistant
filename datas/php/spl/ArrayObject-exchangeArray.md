# ArrayObject::exchangeArray

Source: https://devdocs.io/php/arrayobject.exchangearray

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ArrayObject::exchangeArray — Exchange the array for another one

### Description

```
public ArrayObject::exchangeArray(array|object $array): array
```

Exchange the current array with another array or object.

### Parameters

The new array or object to exchange with the current array.

### Return Values

Returns the old array.

### Examples

Example #1 ArrayObject::exchangeArray() example

```
<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);
// Array of locations in Europe
$locations = array('Amsterdam', 'Paris', 'London');

$fruitsArrayObject = new ArrayObject($fruits);

// Now exchange fruits for locations
$old = $fruitsArrayObject->exchangeArray($locations);
var_dump($old);
var_dump($fruitsArrayObject);

?>
```

The above example will output:

```
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
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(3) {
    [0]=>
    string(9) "Amsterdam"
    [1]=>
    string(5) "Paris"
    [2]=>
    string(6) "London"
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.exchangearray.php
