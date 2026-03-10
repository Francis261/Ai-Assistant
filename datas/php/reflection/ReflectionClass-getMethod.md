# ReflectionClass::getMethod

Source: https://devdocs.io/php/reflectionclass.getmethod

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getMethod — Gets a ReflectionMethod for a class method

### Description

```
public ReflectionClass::getMethod(string $name): ReflectionMethod
```

Gets a ReflectionMethod for a class method.

### Parameters

The method name to reflect.

### Return Values

A ReflectionMethod.

### Errors/Exceptions

A ReflectionException if the method does not exist.

### Examples

Example #1 Basic usage of ReflectionClass::getMethod()

```
<?php
$class = new ReflectionClass('ReflectionClass');
$method = $class->getMethod('getMethod');
var_dump($method);
?>
```

The above example will output:

```
object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(9) "getMethod"
  ["class"]=>
  string(15) "ReflectionClass"
}
```

### See Also

- ReflectionClass::getMethods() - Gets an array of methods

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getmethod.php
