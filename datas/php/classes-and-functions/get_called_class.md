# get_called_class

Source: https://devdocs.io/php/function.get-called-class

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

get_called_class — The "Late Static Binding" class name

### Description

```
get_called_class(): string
```

Gets the name of the class the static method is called in.

### Parameters

This function has no parameters.

### Return Values

Returns the class name.

### Errors/Exceptions

If get_called_class() is called from outside a class, an Error is thrown. Prior to PHP 8.0.0, an E_WARNING level error was raised.

### Changelog

### Examples

Example #1 Using get_called_class()

```
<?php

class foo {
    static public function test() {
        var_dump(get_called_class());
    }
}

class bar extends foo {
}

foo::test();
bar::test();

?>
```

The above example will output:

```
string(3) "foo"
string(3) "bar"
```

### See Also

- get_parent_class() - Retrieves the parent class name for object or class
- get_class() - Returns the name of the class of an object
- is_subclass_of() - Checks if the object has this class as one of its parents or implements it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-called-class.php
