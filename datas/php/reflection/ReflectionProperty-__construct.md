# ReflectionProperty::__construct

Source: https://devdocs.io/php/reflectionproperty.construct

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::__construct — Construct a ReflectionProperty object

### Description

### Parameters

Either a string containing the name of the class to reflect, or an object.

The name of the property being reflected.

### Errors/Exceptions

Trying to get or set private or protected class property's values will result in an exception being thrown.

### Examples

Example #1 ReflectionProperty::__construct() example

```
<?php

class Str
{
    public $length  = 5;
}

// Create an instance of the ReflectionProperty class
$prop = new ReflectionProperty('Str', 'length');

// Print out basic information
printf(
    "===> The%s%s%s%s property '%s' (which was %s)\n" .
    "     having the modifiers %s\n",
        $prop->isPublic() ? ' public' : '',
        $prop->isPrivate() ? ' private' : '',
        $prop->isProtected() ? ' protected' : '',
        $prop->isStatic() ? ' static' : '',
        $prop->getName(),
        $prop->isDefault() ? 'declared at compile-time' : 'created at run-time',
        var_export(Reflection::getModifierNames($prop->getModifiers()), true)
);

// Create an instance of Str
$obj= new Str();

// Get current value
printf("---> Value is: ");
var_dump($prop->getValue($obj));

// Change value
$prop->setValue($obj, 10);
printf("---> Setting value to 10, new value is: ");
var_dump($prop->getValue($obj));

// Dump object
var_dump($obj);

?>
```

The above example will output something similar to:

```
===> The public property 'length' (which was declared at compile-time)
     having the modifiers array (
  0 => 'public',
)
---> Value is: int(5)
---> Setting value to 10, new value is: int(10)
object(Str)#2 (1) {
  ["length"]=>
  int(10)
}
```

Example #2 Getting value from private and protected properties using ReflectionProperty class

```
<?php

class Foo
{
    public $x = 1;
    protected $y = 2;
    private $z = 3;
}

$obj = new Foo;

$prop = new ReflectionProperty('Foo', 'y');
$prop->setAccessible(true);
var_dump($prop->getValue($obj)); // int(2)

$prop = new ReflectionProperty('Foo', 'z');
$prop->setAccessible(true);
var_dump($prop->getValue($obj)); // int(2)

?>
```

The above example will output something similar to:

```
int(2)
int(3)
```

### See Also

- ReflectionProperty::getName() - Gets property name
- Constructors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.construct.php
