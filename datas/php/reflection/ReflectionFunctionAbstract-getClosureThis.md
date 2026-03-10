# ReflectionFunctionAbstract::getClosureThis

Source: https://devdocs.io/php/reflectionfunctionabstract.getclosurethis

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionFunctionAbstract::getClosureThis — Returns the object which corresponds to $this inside a closure

### Description

```
public ReflectionFunctionAbstract::getClosureThis(): ?object
```

If the function is a non-static closure, get the object bound to $this inside the closure.

### Parameters

This function has no parameters.

### Return Values

Return the object instance represented by $this inside the Closure. If the function is not a closure or if it has no $this null is returned instead.

### Examples

Example #1 Example showcasing difference between ReflectionFunctionAbstract::getClosureCalledClass(), ReflectionFunctionAbstract::getClosureScopeClass(), and ReflectionFunctionAbstract::getClosureThis() with a closure in the object context

```
<?php

class A
{
    public function getClosure()
    {
        var_dump(self::class, static::class);

        return function() {};
    }
}

class B extends A {}

$b = new B();
$c = $b->getClosure();
$r = new ReflectionFunction($c);

var_dump($r->getClosureThis()); // $this === $b, since a non-static closure take the object context
var_dump($r->getClosureScopeClass()); // Corresponds to the self::class resolution inside a closure
var_dump($r->getClosureCalledClass()); // Corresponds to the static::class resolution inside a closure

?>
```

The above example will output:

```
string(1) "A"
string(1) "B"
object(B)#1 (0) {
}
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "A"
}
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "B"
}
```

Example #2 Example showcasing difference between ReflectionFunctionAbstract::getClosureCalledClass(), ReflectionFunctionAbstract::getClosureScopeClass(), and ReflectionFunctionAbstract::getClosureThis() with a static closure without an object context

```
<?php

class A
{
    public function getClosure()
    {
        var_dump(self::class, static::class);

        return static function() {};
    }
}

class B extends A {}

$b = new B();
$c = $b->getClosure();
$r = new ReflectionFunction($c);

var_dump($r->getClosureThis()); // NULL, since the pseudo-variable $this is not available in a static context
var_dump($r->getClosureScopeClass()); // Corresponds to the self::class resolution inside a closure
var_dump($r->getClosureCalledClass()); // Corresponds to the static::class resolution inside a closure

?>
```

The above example will output:

```
string(1) "A"
string(1) "B"
NULL
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "A"
}
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "B"
}
```

### See Also

- ReflectionFunctionAbstract::getClosureCalledClass() - Returns the class corresponding to static:: inside a closure
- ReflectionFunctionAbstract::getClosureScopeClass() - Returns the class corresponding to the scope inside a closure
- Late Static Bindings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.getclosurethis.php
