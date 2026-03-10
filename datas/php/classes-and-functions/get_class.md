# get_class

Source: https://devdocs.io/php/function.get-class

(PHP 4, PHP 5, PHP 7, PHP 8)

get_class — Returns the name of the class of an object

### Description

```
get_class(object $object = ?): string
```

Gets the name of the class of the given object.

### Parameters

The tested object.

Note: Explicitly passing null as the object is no longer allowed as of PHP 7.2.0 and emits an E_WARNING. As of PHP 8.0.0, a TypeError is emitted when null is used.

### Return Values

Returns the name of the class of which object is an instance.

If the object is an instance of a class which exists in a namespace, the qualified namespaced name of that class is returned.

### Errors/Exceptions

If get_class() is called with anything other than an object, TypeError is raised. Prior to PHP 8.0.0, an E_WARNING level error was raised.

If get_class() is called with no arguments from outside a class, an Error is thrown. Prior to PHP 8.0.0, an E_WARNING level error was raised.

### Changelog

### Examples

Example #1 Using get_class()

```
<?php

class foo {
    function name()
    {
        echo "My name is " , get_class($this) , "\n";
    }
}

// create an object
$bar = new foo();

// external call
echo "Its name is " , get_class($bar) , "\n";

// internal call
$bar->name();

?>
```

The above example will output:

```
Its name is foo
My name is foo
```

Example #2 Using get_class() in superclass

```
<?php

abstract class bar {
    public function __construct()
    {
        var_dump(get_class($this));
        var_dump(get_class());
    }
}

class foo extends bar {
}

new foo;

?>
```

The above example will output:

```
string(3) "foo"
string(3) "bar"
```

Example #3 Using get_class() with namespaced classes

```
<?php

namespace Foo\Bar;

class Baz {
    public function __construct()
    {

    }
}

$baz = new \Foo\Bar\Baz;

var_dump(get_class($baz));
?>
```

The above example will output:

```
string(11) "Foo\Bar\Baz"
```

### See Also

- get_called_class() - The "Late Static Binding" class name
- get_parent_class() - Retrieves the parent class name for object or class
- gettype() - Get the type of a variable
- get_debug_type() - Gets the type name of a variable in a way that is suitable for debugging
- is_subclass_of() - Checks if the object has this class as one of its parents or implements it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-class.php
