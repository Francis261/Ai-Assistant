# ReflectionParameter::getClass

Source: https://devdocs.io/php/reflectionparameter.getclass

(PHP 5, PHP 7, PHP 8)

ReflectionParameter::getClass — Get a ReflectionClass object for the parameter being reflected or null

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 public ReflectionParameter::getClass(): ?ReflectionClass
```

Gets a ReflectionClass object for the parameter being reflected or null.

As of PHP 8.0.0 this function is deprecated and not recommended. Instead, use ReflectionParameter::getType() to get the ReflectionType of the parameter, then interrogate that object to determine the parameter type.

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

A ReflectionClass object, or null if no type is declared, or the declared type is not a class or interface.

### Examples

Example #1 Using the ReflectionParameter class

```
<?php
function foo(Exception $a) { }

$functionReflection = new ReflectionFunction('foo');
$parameters = $functionReflection->getParameters();
$aParameter = $parameters[0];

echo $aParameter->getClass()->name;
?>
```

### Changelog

### See Also

- ReflectionParameter::getDeclaringClass() - Gets declaring class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.getclass.php
