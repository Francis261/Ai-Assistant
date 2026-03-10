# is_object

Source: https://devdocs.io/php/function.is-object

(PHP 4, PHP 5, PHP 7, PHP 8)

is_object — Finds whether a variable is an object

### Description

```
is_object(mixed $value): bool
```

Finds whether the given variable is an object.

### Parameters

The variable being evaluated.

### Return Values

Returns true if value is an object, false otherwise.

### Changelog

### Examples

Example #1 is_object() example

```
<?php
// Declare a simple function to return an 
// array from our object
function get_students($obj)
{
    if (!is_object($obj)) {
        return false;
    }

    return $obj->students;
}

// Declare a new class instance and fill up 
// some values
$obj = new stdClass();
$obj->students = array('Kalle', 'Ross', 'Felipe');

var_dump(get_students(null));
var_dump(get_students($obj));
?>
```

### See Also

- is_bool() - Finds out whether a variable is a boolean
- is_int() - Find whether the type of a variable is integer
- is_float() - Finds whether the type of a variable is float
- is_string() - Find whether the type of a variable is string
- is_array() - Finds whether a variable is an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-object.php
