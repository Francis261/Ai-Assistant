# ReflectionClass::getStaticPropertyValue

Source: https://devdocs.io/php/reflectionclass.getstaticpropertyvalue

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionClass::getStaticPropertyValue — Gets static property value

### Description

```
public ReflectionClass::getStaticPropertyValue(string $name, mixed &$def_value = ?): mixed
```

Gets the value of a static property on this class.

### Parameters

The name of the static property for which to return a value.

A default value to return in case the class does not declare a static property with the given name. If the property does not exist and this argument is omitted, a ReflectionException is thrown.

### Return Values

The value of the static property.

### Examples

Example #1 Basic usage of ReflectionClass::getStaticPropertyValue()

```
<?php
class Apple {
    public static $color = 'Red';
}

$class = new ReflectionClass('Apple');
var_dump($class->getStaticPropertyValue('color'));
?>
```

The above example will output:

```
string(3) "Red"
```

### See Also

- ReflectionClass::getStaticProperties() - Gets static properties
- ReflectionClass::setStaticPropertyValue() - Sets public static property value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getstaticpropertyvalue.php
