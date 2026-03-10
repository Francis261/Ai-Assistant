# ReflectionClass::getDefaultProperties

Source: https://devdocs.io/php/reflectionclass.getdefaultproperties

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getDefaultProperties — Gets default properties

### Description

```
public ReflectionClass::getDefaultProperties(): array
```

Gets default properties from a class (including inherited properties).

Note:

This method only works for static properties when used on internal classes. The default value of a static class property can not be tracked when using this method on user defined classes.

### Parameters

This function has no parameters.

### Return Values

An array of default properties, with the key being the name of the property and the value being the default value of the property or null if the property doesn't have a default value. The function does not distinguish between static and non static properties and does not take visibility modifiers into account.

### Examples

Example #1 ReflectionClass::getDefaultProperties() example

```
<?php
class Bar {
    protected $inheritedProperty = 'inheritedDefault';
}

class Foo extends Bar {
    public $property = 'propertyDefault';
    private $privateProperty = 'privatePropertyDefault';
    public static $staticProperty = 'staticProperty';
    public $defaultlessProperty;
}

$reflectionClass = new ReflectionClass('Foo');
var_dump($reflectionClass->getDefaultProperties());
?>
```

The above example will output:

```
array(5) {
   ["staticProperty"]=>
   string(14) "staticProperty"
   ["property"]=>
   string(15) "propertyDefault"
   ["privateProperty"]=>
   string(22) "privatePropertyDefault"
   ["defaultlessProperty"]=>
   NULL
   ["inheritedProperty"]=>
   string(16) "inheritedDefault"
}
```

### See Also

- ReflectionClass::getProperties() - Gets properties
- ReflectionClass::getStaticProperties() - Gets static properties
- ReflectionClass::getProperty() - Gets a ReflectionProperty for a class's property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getdefaultproperties.php
