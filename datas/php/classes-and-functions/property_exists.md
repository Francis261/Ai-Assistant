# property_exists

Source: https://devdocs.io/php/function.property-exists

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

property_exists — Checks if the object or class has a property

### Description

```
property_exists(object|string $object_or_class, string $property): bool
```

This function checks if the given property exists in the specified class.

Note:

As opposed with isset(), property_exists() returns true even if the property has the value null.

### Parameters

The class name or an object of the class to test for

The name of the property

### Return Values

Returns true if the property exists, false if it doesn't exist.

### Examples

Example #1 A property_exists() example

```
<?php

class myClass {
    public $mine;
    private $xpto;
    static protected $test;

    static function test() {
        var_dump(property_exists('myClass', 'xpto')); //true
    }
}

var_dump(property_exists('myClass', 'mine'));   //true
var_dump(property_exists(new myClass, 'mine')); //true
var_dump(property_exists('myClass', 'xpto'));   //true
var_dump(property_exists('myClass', 'bar'));    //false
var_dump(property_exists('myClass', 'test'));   //true
myClass::test();

?>
```

### Notes

Note:

Using this function will use any registered autoloaders if the class is not already known.

Note:

The property_exists() function cannot detect properties that are magically accessible using the __get magic method.

### See Also

- method_exists() - Checks if the class method exists

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.property-exists.php
