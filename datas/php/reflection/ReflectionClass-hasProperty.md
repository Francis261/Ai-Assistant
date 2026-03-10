# ReflectionClass::hasProperty

Source: https://devdocs.io/php/reflectionclass.hasproperty

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionClass::hasProperty — Checks if property is defined

### Description

```
public ReflectionClass::hasProperty(string $name): bool
```

Checks whether the specified property is defined.

### Parameters

Name of the property being checked for.

### Return Values

true if it has the property, otherwise false

### Examples

Example #1 ReflectionClass::hasProperty() example

```
<?php
class Foo {
    public    $p1;
    protected $p2;
    private   $p3;

}

$obj = new ReflectionObject(new Foo());

var_dump($obj->hasProperty("p1"));
var_dump($obj->hasProperty("p2"));
var_dump($obj->hasProperty("p3"));
var_dump($obj->hasProperty("p4"));
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
bool(true)
bool(false)
```

### See Also

- ReflectionClass::hasConstant() - Checks if constant is defined
- ReflectionClass::hasMethod() - Checks if method is defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.hasproperty.php
