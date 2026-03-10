# ReflectionClass::isInstantiable

Source: https://devdocs.io/php/reflectionclass.isinstantiable

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInstantiable — Checks if the class is instantiable

### Description

```
public ReflectionClass::isInstantiable(): bool
```

Checks if the class is instantiable.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is instantiable or false otherwise.

### Examples

Example #1 ReflectionClass::isInstantiable() example

```
<?php
class C { }

interface iface {
    function f1();
}

class ifaceImpl implements iface {
    function f1() {}
}

abstract class abstractClass {
    function f1() { }
    abstract function f2();
}

class D extends abstractClass {
    function f2() { }
}

trait T {
    function f1() {}
}

class privateConstructor {
    private function __construct() { }
}

$classes = array(
    "C",
    "iface",
    "ifaceImpl",
    "abstractClass",
    "D",
    "T",
    "privateConstructor",
);

foreach($classes  as $class ) {
    $reflectionClass = new ReflectionClass($class);
    echo "Is $class instantiable?  ";
    var_dump($reflectionClass->isInstantiable()); 
}

?>
```

The above example will output:

```
Is C instantiable?  bool(true)
Is iface instantiable?  bool(false)
Is ifaceImpl instantiable?  bool(true)
Is abstractClass instantiable?  bool(false)
Is D instantiable?  bool(true)
Is T instantiable?  bool(false)
Is privateConstructor instantiable?  bool(false)
```

### See Also

- ReflectionClass::isInstance() - Checks class for instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isinstantiable.php
