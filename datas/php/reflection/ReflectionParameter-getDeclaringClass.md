# ReflectionParameter::getDeclaringClass

Source: https://devdocs.io/php/reflectionparameter.getdeclaringclass

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

ReflectionParameter::getDeclaringClass — Gets declaring class

### Description

```
public ReflectionParameter::getDeclaringClass(): ?ReflectionClass
```

Gets the declaring class.

### Parameters

This function has no parameters.

### Return Values

A ReflectionClass object or null if called on function.

### Examples

Example #1 Getting the class that declared the method

```
<?php
class Foo
{
    public function bar(\DateTime $datetime)
    {
    }
}

class Baz extends Foo
{
}

$param = new \ReflectionParameter(['Baz', 'bar'], 0); 

var_dump($param->getDeclaringClass());
```

The above example will output:

```
object(ReflectionClass)#2 (1) {
  ["name"]=>
  string(3) "Foo"
}
```

### See Also

- ReflectionParameter::getClass() - Get a ReflectionClass object for the parameter being reflected or null

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.getdeclaringclass.php
