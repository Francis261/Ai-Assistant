# ReflectionMethod::hasPrototype

Source: https://devdocs.io/php/reflectionmethod.hasprototype

(PHP 8 >= 8.2.0)

ReflectionMethod::hasPrototype — Returns whether a method has a prototype

### Description

```
public ReflectionMethod::hasPrototype(): bool
```

Returns whether a method has a prototype.

### Parameters

This function has no parameters.

### Return Values

Returns true if the method has a prototype, otherwise false.

### Examples

Example #1 ReflectionMethod::hasPrototype() example

```
<?php

class Hello
{
    public function sayHelloTo($name)
    {
        return 'Hello '.$name;
    }
}

class HelloWorld extends Hello
{
    public function sayHelloTo($name)
    {
        return 'Hello world: '.$name;
    }
}
$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
var_dump($reflectionMethod->hasPrototype());
?>
```

The above example will output:

```
bool(true)
```

### See Also

- ReflectionMethod::getPrototype() - Gets the method prototype (if there is one)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.hasprototype.php
