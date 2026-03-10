# ReflectionClass::getMethods

Source: https://devdocs.io/php/reflectionclass.getmethods

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getMethods — Gets an array of methods

### Description

```
public ReflectionClass::getMethods(?int $filter = null): array
```

Gets an array of methods for the class.

### Parameters

Filter the results to include only methods with certain attributes. Defaults to no filtering.

Any bitwise disjunction of ReflectionMethod::IS_STATIC, ReflectionMethod::IS_PUBLIC, ReflectionMethod::IS_PROTECTED, ReflectionMethod::IS_PRIVATE, ReflectionMethod::IS_ABSTRACT, ReflectionMethod::IS_FINAL, so that all methods with any of the given attributes will be returned.

Note: Note that other bitwise operations, for instance ~ will not work as expected. In other words, it is not possible to retrieve all non-static methods, for example.

### Return Values

An array of ReflectionMethod objects reflecting each method.

### Changelog

### Examples

Example #1 Basic usage of ReflectionClass::getMethods()

```
<?php
class Apple {
    public function firstMethod() { }
    final protected function secondMethod() { }
    private static function thirdMethod() { }
}

$class = new ReflectionClass('Apple');
$methods = $class->getMethods();
var_dump($methods);
?>
```

The above example will output:

```
array(3) {
  [0]=>
  object(ReflectionMethod)#2 (2) {
    ["name"]=>
    string(11) "firstMethod"
    ["class"]=>
    string(5) "Apple"
  }
  [1]=>
  object(ReflectionMethod)#3 (2) {
    ["name"]=>
    string(12) "secondMethod"
    ["class"]=>
    string(5) "Apple"
  }
  [2]=>
  object(ReflectionMethod)#4 (2) {
    ["name"]=>
    string(11) "thirdMethod"
    ["class"]=>
    string(5) "Apple"
  }
}
```

Example #2 Filtering results from ReflectionClass::getMethods()

```
<?php
class Apple {
    public function firstMethod() { }
    final protected function secondMethod() { }
    private static function thirdMethod() { }
}

$class = new ReflectionClass('Apple');
$methods = $class->getMethods(ReflectionMethod::IS_STATIC | ReflectionMethod::IS_FINAL);
var_dump($methods);
?>
```

The above example will output:

```
array(2) {
  [0]=>
  object(ReflectionMethod)#2 (2) {
    ["name"]=>
    string(12) "secondMethod"
    ["class"]=>
    string(5) "Apple"
  }
  [1]=>
  object(ReflectionMethod)#3 (2) {
    ["name"]=>
    string(11) "thirdMethod"
    ["class"]=>
    string(5) "Apple"
  }
}
```

### See Also

- ReflectionClass::getMethod() - Gets a ReflectionMethod for a class method
- get_class_methods() - Gets the class methods' names

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getmethods.php
