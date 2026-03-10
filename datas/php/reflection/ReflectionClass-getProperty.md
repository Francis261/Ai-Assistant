# ReflectionClass::getProperty

Source: https://devdocs.io/php/reflectionclass.getproperty

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getProperty — Gets a ReflectionProperty for a class's property

### Description

```
public ReflectionClass::getProperty(string $name): ReflectionProperty
```

Gets a ReflectionProperty for a class's property.

### Parameters

The property name.

### Return Values

A ReflectionProperty.

### Examples

Example #1 Basic usage of ReflectionClass::getProperty()

```
<?php
$class = new ReflectionClass('ReflectionClass');
$property = $class->getProperty('name');
var_dump($property);
?>
```

The above example will output:

```
object(ReflectionProperty)#2 (2) {
  ["name"]=>
  string(4) "name"
  ["class"]=>
  string(15) "ReflectionClass"
}
```

### See Also

- ReflectionClass::getProperties() - Gets properties

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getproperty.php
