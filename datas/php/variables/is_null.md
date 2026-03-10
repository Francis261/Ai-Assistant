# is_null

Source: https://devdocs.io/php/function.is-null

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

is_null — Finds whether a variable is null

### Description

```
is_null(mixed $value): bool
```

Finds whether the given variable is null.

### Parameters

The variable being evaluated.

### Return Values

Returns true if value is null, false otherwise.

### Examples

Example #1 is_null() example

```
<?php

error_reporting(E_ALL);

$foo = NULL;
var_dump(is_null($inexistent), is_null($foo));

?>
```

### See Also

- The null type
- isset() - Determine if a variable is declared and is different than null
- is_bool() - Finds out whether a variable is a boolean
- is_numeric() - Finds whether a variable is a number or a numeric string
- is_float() - Finds whether the type of a variable is float
- is_int() - Find whether the type of a variable is integer
- is_string() - Find whether the type of a variable is string
- is_object() - Finds whether a variable is an object
- is_array() - Finds whether a variable is an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-null.php
