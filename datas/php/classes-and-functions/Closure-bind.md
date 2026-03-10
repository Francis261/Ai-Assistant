# Closure::bind

Source: https://devdocs.io/php/closure.bind

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

Closure::bind — Duplicates a closure with a specific bound object and class scope

### Description

```
public static Closure::bind(Closure $closure, ?object $newThis, object|string|null $newScope = "static"): ?Closure
```

This method is a static version of Closure::bindTo(). See the documentation of that method for more information.

### Parameters

The anonymous functions to bind.

The object to which the given anonymous function should be bound, or null for the closure to be unbound.

The class scope to which the closure is to be associated, or 'static' to keep the current one. If an object is given, the type of the object will be used instead. This determines the visibility of protected and private methods of the bound object. It is not allowed to pass (an object of) an internal class as this parameter.

### Return Values

Returns a new Closure object, or null on failure.

### Examples

Example #1 Closure::bind() example

```
<?php
class A {
    private static $sfoo = 1;
    private $ifoo = 2;
}
$cl1 = static function() {
    return A::$sfoo;
};
$cl2 = function() {
    return $this->ifoo;
};

$bcl1 = Closure::bind($cl1, null, 'A');
$bcl2 = Closure::bind($cl2, new A(), 'A');
echo $bcl1(), "\n";
echo $bcl2(), "\n";
?>
```

The above example will output something similar to:

```
1
2
```

### See Also

- Anonymous functions
- Closure::bindTo() - Duplicates the closure with a new bound object and class scope

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/closure.bind.php
