# ReflectionClass::getConstructor

Source: https://devdocs.io/php/reflectionclass.getconstructor

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getConstructor — Gets the constructor of the class

### Description

```
public ReflectionClass::getConstructor(): ?ReflectionMethod
```

Gets the constructor of the reflected class.

### Parameters

This function has no parameters.

### Return Values

A ReflectionMethod object reflecting the class' constructor, or null if the class has no constructor.

### Examples

Example #1 Basic usage of ReflectionClass::getConstructor()

```
<?php
$class = new ReflectionClass('ReflectionClass');
$constructor = $class->getConstructor();
var_dump($constructor);
?>
```

The above example will output:

```
object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(11) "__construct"
  ["class"]=>
  string(15) "ReflectionClass"
}
```

### See Also

- ReflectionClass::getName() - Gets class name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getconstructor.php
