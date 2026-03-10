# is_bool

Source: https://devdocs.io/php/function.is-bool

(PHP 4, PHP 5, PHP 7, PHP 8)

is_bool — Finds out whether a variable is a boolean

### Description

```
is_bool(mixed $value): bool
```

Finds whether the given variable is a boolean.

### Parameters

The variable being evaluated.

### Return Values

Returns true if value is a bool, false otherwise.

### Examples

Example #1 is_bool() examples

```
<?php
$a = false;
$b = 0;

// Since $a is a boolean, it will return true
if (is_bool($a) === true) {
    echo "Yes, this is a boolean\n";
}

// Since $b is not a boolean, it will return false
if (is_bool($b) === false) {
    echo "No, this is not a boolean\n";
}
?>
```

### See Also

- is_float() - Finds whether the type of a variable is float
- is_int() - Find whether the type of a variable is integer
- is_string() - Find whether the type of a variable is string
- is_object() - Finds whether a variable is an object
- is_array() - Finds whether a variable is an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-bool.php
