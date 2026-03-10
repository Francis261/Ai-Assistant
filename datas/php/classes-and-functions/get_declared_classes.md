# get_declared_classes

Source: https://devdocs.io/php/function.get-declared-classes

(PHP 4, PHP 5, PHP 7, PHP 8)

get_declared_classes — Returns an array with the name of the defined classes

### Description

```
get_declared_classes(): array
```

Gets the declared classes.

### Parameters

This function has no parameters.

### Return Values

Returns an array of the names of the declared classes in the current script.

Note:

Note that depending on what extensions you have compiled or loaded into PHP, additional classes could be present. This means that you will not be able to define your own classes using these names. There is a list of predefined classes in the Predefined Classes section of the appendices.

### Changelog

### Examples

Example #1 get_declared_classes() example

```
<?php
print_r(get_declared_classes());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => stdClass
    [1] => __PHP_Incomplete_Class
    [2] => Directory
)
```

### See Also

- class_exists() - Checks if the class has been defined
- get_declared_interfaces() - Returns an array of all declared interfaces
- get_defined_functions() - Returns an array of all defined functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-declared-classes.php
