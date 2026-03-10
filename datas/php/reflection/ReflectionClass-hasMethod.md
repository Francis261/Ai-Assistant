# ReflectionClass::hasMethod

Source: https://devdocs.io/php/reflectionclass.hasmethod

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionClass::hasMethod — Checks if method is defined

### Description

```
public ReflectionClass::hasMethod(string $name): bool
```

Checks whether a specific method is defined in a class.

### Parameters

Name of the method being checked for.

### Return Values

true if it has the method, otherwise false

### Examples

Example #1 ReflectionClass::hasMethod() example

```
<?php
Class C {
    public function publicFoo() {
        return true;
    }

    protected function protectedFoo() {
        return true;
    }

    private function privateFoo() {
        return true;
    }

    static function staticFoo() {
        return true;
    }
}

$rc = new ReflectionClass("C");

var_dump($rc->hasMethod('publicFoo'));

var_dump($rc->hasMethod('protectedFoo'));

var_dump($rc->hasMethod('privateFoo'));

var_dump($rc->hasMethod('staticFoo'));

// C should not have method bar
var_dump($rc->hasMethod('bar'));

// Method names are case insensitive
var_dump($rc->hasMethod('PUBLICfOO'));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
bool(true)
bool(false)
bool(true)
```

### See Also

- ReflectionClass::hasConstant() - Checks if constant is defined
- ReflectionClass::hasProperty() - Checks if property is defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.hasmethod.php
