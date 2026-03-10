# get_class_methods

Source: https://devdocs.io/php/function.get-class-methods

(PHP 4, PHP 5, PHP 7, PHP 8)

get_class_methods — Gets the class methods' names

### Description

```
get_class_methods(object|string $object_or_class): array
```

Gets the class methods names.

### Parameters

The class name or an object instance

### Return Values

Returns an array of method names defined for the class specified by object_or_class.

### Changelog

### Examples

Example #1 get_class_methods() example

```
<?php

class myclass {
    // constructor
    function __construct()
    {
        return(true);
    }

    // method 1
    function myfunc1()
    {
        return(true);
    }

    // method 2
    function myfunc2()
    {
        return(true);
    }
}

$class_methods = get_class_methods('myclass');
// or
$class_methods = get_class_methods(new myclass());

foreach ($class_methods as $method_name) {
    echo "$method_name\n";
}

?>
```

The above example will output:

```
__construct
myfunc1
myfunc2
```

### See Also

- get_class() - Returns the name of the class of an object
- get_class_vars() - Get the default properties of the class
- get_object_vars() - Gets the properties of the given object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-class-methods.php
