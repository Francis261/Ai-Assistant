# ReflectionMethod::getPrototype

Source: https://devdocs.io/php/reflectionmethod.getprototype

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionMethod::getPrototype — Gets the method prototype (if there is one)

### Description

```
public ReflectionMethod::getPrototype(): ReflectionMethod
```

Returns the methods prototype.

### Parameters

This function has no parameters.

### Return Values

A ReflectionMethod instance of the method prototype.

### Errors/Exceptions

A ReflectionException exception is thrown if the method does not have a prototype.

### Examples

Example #1 ReflectionMethod::getPrototype() example

```
<?php
class Hello {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}
class HelloWorld extends Hello {

    public function sayHelloTo($name) {
        return 'Hello world: ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
var_dump($reflectionMethod->getPrototype());
?>
```

The above example will output:

```
object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(10) "sayHelloTo"
  ["class"]=>
  string(5) "Hello"
}
```

### See Also

- ReflectionMethod::getModifiers() - Gets the method modifiers
- ReflectionMethod::hasPrototype() - Returns whether a method has a prototype

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.getprototype.php
