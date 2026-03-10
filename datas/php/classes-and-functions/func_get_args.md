# func_get_args

Source: https://devdocs.io/php/function.func-get-args

(PHP 4, PHP 5, PHP 7, PHP 8)

func_get_args — Returns an array comprising a function's argument list

### Description

```
func_get_args(): array
```

Gets an array of the function's argument list.

This function may be used in conjunction with func_get_arg() and func_num_args() to allow user-defined functions to accept variable-length argument lists.

### Parameters

This function has no parameters.

### Return Values

Returns an array in which each element is a copy of the corresponding member of the current user-defined function's argument list.

### Errors/Exceptions

Generates a warning if called from outside of a user-defined function.

### Examples

Example #1 func_get_args() example

```
<?php
function foo()
{
    $numargs = func_num_args();
    echo "Number of arguments: $numargs \n";
    if ($numargs >= 2) {
        echo "Second argument is: " . func_get_arg(1) . "\n";
    }
    $arg_list = func_get_args();
    for ($i = 0; $i < $numargs; $i++) {
        echo "Argument $i is: " . $arg_list[$i] . "\n";
    }
}

foo(1, 2, 3);
?>
```

The above example will output:

```
Number of arguments: 3 
Second argument is: 2
Argument 0 is: 1
Argument 1 is: 2
Argument 2 is: 3
```

Example #2 func_get_args() example of byref and byval arguments

```
<?php
function byVal($arg) {
    echo 'As passed     : ', var_export(func_get_args()), PHP_EOL;
    $arg = 'baz';
    echo 'After change  : ', var_export(func_get_args()), PHP_EOL;
}

function byRef(&$arg) {
    echo 'As passed     : ', var_export(func_get_args()), PHP_EOL;
    $arg = 'baz';
    echo 'After change  : ', var_export(func_get_args()), PHP_EOL;
}

$arg = 'bar';
byVal($arg);
byRef($arg);
?>
```

The above example will output:

### Notes

Note:

As of PHP 8.0.0, the func_*() family of functions is intended to be mostly transparent with regard to named arguments, by treating the arguments as if they were all passed positionally, and missing arguments are replaced with their defaults. This function ignores the collection of unknown named variadic arguments. Unknown named arguments which are collected can only be accessed through the variadic parameter.

Note:

If the arguments are passed by reference, any changes to the arguments will be reflected in the values returned by this function. As of PHP 7 the current values will also be returned if the arguments are passed by value.

Note: This function returns a copy of the passed arguments only, and does not account for default (non-passed) arguments.

### See Also

- ... syntax
- func_get_arg() - Return an item from the argument list
- func_num_args() - Returns the number of arguments passed to the function
- ReflectionFunctionAbstract::getParameters() - Gets parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.func-get-args.php
