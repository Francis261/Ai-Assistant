# ReflectionMethod::getDeclaringClass

Source: https://devdocs.io/php/reflectionmethod.getdeclaringclass

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::getDeclaringClass — Gets declaring class for the reflected method

### Description

```
public ReflectionMethod::getDeclaringClass(): ReflectionClass
```

Gets the declaring class for the reflected method.

### Parameters

This function has no parameters.

### Return Values

A ReflectionClass object of the class that the reflected method is part of.

### Examples

Example #1 ReflectionMethod::getDeclaringClass() example

```
<?php
class HelloWorld {

    protected function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod(new HelloWorld(), 'sayHelloTo');
var_dump($reflectionMethod->getDeclaringClass());
?>
```

The above example will output:

```
object(ReflectionClass)#2 (1) {
  ["name"]=>
  string(10) "HelloWorld"
}
```

### See Also

- ReflectionMethod::isAbstract() - Checks if method is abstract

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.getdeclaringclass.php
