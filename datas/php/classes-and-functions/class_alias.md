# class_alias

Source: https://devdocs.io/php/function.class-alias

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

class_alias — Creates an alias for a class

### Description

```
class_alias(string $class, string $alias, bool $autoload = true): bool
```

Creates an alias named alias based on the user defined class class. The aliased class is exactly the same as the original class.

Note: As of PHP 8.3.0, class_alias() also supports creating an alias of a PHP internal class.

### Parameters

The original class.

The alias name for the class.

Whether to autoload if the original class is not found.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 class_alias() example

```
<?php

class Foo { }

class_alias('Foo', 'Bar');

$a = new Foo;
$b = new Bar;

// the objects are the same
var_dump($a == $b, $a === $b);
var_dump($a instanceof $b);

// the classes are the same
var_dump($a instanceof Foo);
var_dump($a instanceof Bar);

var_dump($b instanceof Foo);
var_dump($b instanceof Bar);

?>
```

The above example will output:

```
bool(true)
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)
bool(true)
```

### Notes

Note:

Class names are case-insensitive in PHP, and this is reflected in this function. Aliases created by class_alias() are declared in lowercase. This means that for a class MyClass, the class_alias('MyClass', 'MyClassAlias') call will declare a new class alias named myclassalias.

### See Also

- get_parent_class() - Retrieves the parent class name for object or class
- is_subclass_of() - Checks if the object has this class as one of its parents or implements it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.class-alias.php
