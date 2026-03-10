# get_defined_functions

Source: https://devdocs.io/php/function.get-defined-functions

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

get_defined_functions — Returns an array of all defined functions

### Description

```
get_defined_functions(bool $exclude_disabled = true): array
```

Gets an array of all defined functions.

### Parameters

Whether disabled functions should be excluded from the return value. This parameter has no effect since PHP 8.0.0.

This feature has been DEPRECATED as of PHP 8.5.0. Relying on this feature is highly discouraged.

### Return Values

Returns a multidimensional array containing a list of all defined functions, both built-in (internal) and user-defined. The internal functions will be accessible via $arr["internal"], and the user defined ones using $arr["user"] (see example below).

### Changelog

### Examples

Example #1 get_defined_functions() example

```
<?php
function myrow($id, $data)
{
    return "<tr><th>$id</th><td>$data</td></tr>\n";
}

$arr = get_defined_functions();

print_r($arr);
?>
```

The above example will output something similar to:

```
Array
(
    [internal] => Array
        (
            [0] => zend_version
            [1] => func_num_args
            [2] => func_get_arg
            [3] => func_get_args
            [4] => strlen
            [5] => strcmp
            [6] => strncmp
            ...
            [750] => bcscale
            [751] => bccomp
        )

    [user] => Array
        (
            [0] => myrow
        )

)
```

### See Also

- function_exists() - Return true if the given function has been defined
- get_defined_vars() - Returns an array of all defined variables
- get_defined_constants() - Returns an associative array with the names of all the constants and their values
- get_declared_classes() - Returns an array with the name of the defined classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-defined-functions.php
