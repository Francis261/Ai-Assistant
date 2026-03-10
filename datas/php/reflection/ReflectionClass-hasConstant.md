# ReflectionClass::hasConstant

Source: https://devdocs.io/php/reflectionclass.hasconstant

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionClass::hasConstant — Checks if constant is defined

### Description

```
public ReflectionClass::hasConstant(string $name): bool
```

Checks whether the class has a specific constant defined or not.

### Parameters

The name of the constant being checked for.

### Return Values

true if the constant is defined, otherwise false.

### Examples

Example #1 ReflectionClass::hasConstant() example

```
<?php
class Foo {
    const c1 = 1;
}

$class = new ReflectionClass("Foo");

var_dump($class->hasConstant("c1"));
var_dump($class->hasConstant("c2"));
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

### See Also

- ReflectionClass::hasMethod() - Checks if method is defined
- ReflectionClass::hasProperty() - Checks if property is defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.hasconstant.php
