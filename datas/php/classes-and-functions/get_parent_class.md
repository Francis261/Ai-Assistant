# get_parent_class

Source: https://devdocs.io/php/function.get-parent-class

(PHP 4, PHP 5, PHP 7, PHP 8)

get_parent_class — Retrieves the parent class name for object or class

### Description

```
get_parent_class(object|string $object_or_class = ?): string|false
```

Retrieves the parent class name for object or class.

### Parameters

The tested object or class name.

### Return Values

Returns the name of the parent class of the class of which object_or_class is an instance or the name.

If the object does not have a parent or the given class does not exist, false will be returned.

### Changelog

### Examples

Example #1 Using get_parent_class()

```
<?php

class Dad {
    function __construct()
    {
    // implements some logic
    }
}

class Child extends Dad {
    function __construct()
    {
        echo "I'm " , get_parent_class($this) , "'s son\n";
    }
}

class Child2 extends Dad {
    function __construct()
    {
        echo "I'm " , get_parent_class('child2') , "'s son too\n";
    }
}

$foo = new child();
$bar = new child2();

?>
```

The above example will output:

```
I'm Dad's son
I'm Dad's son too
```

### See Also

- get_class() - Returns the name of the class of an object
- is_subclass_of() - Checks if the object has this class as one of its parents or implements it
- class_parents() - Return the parent classes of the given class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-parent-class.php
