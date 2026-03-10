# is_float

Source: https://devdocs.io/php/function.is-float

(PHP 4, PHP 5, PHP 7, PHP 8)

is_float — Finds whether the type of a variable is float

### Description

```
is_float(mixed $value): bool
```

Finds whether the type of the given variable is float.

Note:

To test if a variable is a number or a numeric string (such as form input, which is always a string), you must use is_numeric().

### Parameters

The variable being evaluated.

### Return Values

Returns true if value is a float, false otherwise.

### Examples

Example #1 is_float() example

```
<?php

var_dump(is_float(27.25));
var_dump(is_float('abc'));
var_dump(is_float(23));
var_dump(is_float(23.5));
var_dump(is_float(1e7));  //Scientific Notation
var_dump(is_float(true));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
bool(true)
bool(true)
bool(false)
```

### See Also

- is_bool() - Finds out whether a variable is a boolean
- is_int() - Find whether the type of a variable is integer
- is_numeric() - Finds whether a variable is a number or a numeric string
- is_string() - Find whether the type of a variable is string
- is_array() - Finds whether a variable is an array
- is_object() - Finds whether a variable is an object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-float.php
