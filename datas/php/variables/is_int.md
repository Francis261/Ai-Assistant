# is_int

Source: https://devdocs.io/php/function.is-int

(PHP 4, PHP 5, PHP 7, PHP 8)

is_int — Find whether the type of a variable is integer

### Description

```
is_int(mixed $value): bool
```

Finds whether the type of the given variable is integer.

Note:

To test if a variable is a number or a numeric string (such as form input, which is always a string), you must use is_numeric().

### Parameters

The variable being evaluated.

### Return Values

Returns true if value is an int, false otherwise.

### Examples

Example #1 is_int() example

```
<?php
$values = array(23, "23", 23.5, "23.5", null, true, false);
foreach ($values as $value) {
    echo "is_int(";
    var_export($value);
    echo ") = ";
    var_dump(is_int($value));
}
?>
```

The above example will output:

```
is_int(23) = bool(true)
is_int('23') = bool(false)
is_int(23.5) = bool(false)
is_int('23.5') = bool(false)
is_int(NULL) = bool(false)
is_int(true) = bool(false)
is_int(false) = bool(false)
```

### See Also

- is_bool() - Finds out whether a variable is a boolean
- is_float() - Finds whether the type of a variable is float
- is_numeric() - Finds whether a variable is a number or a numeric string
- is_string() - Find whether the type of a variable is string
- is_array() - Finds whether a variable is an array
- is_object() - Finds whether a variable is an object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-int.php
