# runkit7_function_add

Source: https://devdocs.io/php/function.runkit7-function-add

(PECL runkit7 >= Unknown)

runkit7_function_add — Add a new function, similar to create_function()

### Description

```
runkit7_function_add(
 string $function_name,
 string $argument_list,
 string $code,
 bool $return_by_reference = null,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

```
runkit7_function_add(
 string $function_name,
 Closure $closure,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

### Parameters

Name of the function to be created

Comma separated argument list

Code making up the function

A closure that defines the function.

Whether the function should return by reference.

The doc comment of the function.

The return type of the function.

Whether the function should behave as if it were declared in a file with strict_types=1

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 A runkit7_function_add() example

```
<?php
runkit7_function_add('testme','$a,$b','echo "The value of a is $a\n"; echo "The value of b is $b\n";');
testme(1,2);
?>
```

The above example will output:

```
The value of a is 1
The value of b is 2
```

### See Also

- create_function() - Create a function dynamically by evaluating a string of code
- runkit7_function_redefine() - Replace a function definition with a new implementation
- runkit7_function_copy() - Copy a function to a new function name
- runkit7_function_rename() - Change a function's name
- runkit7_function_remove() - Remove a function definition
- runkit7_method_add() - Dynamically adds a new method to a given class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-function-add.php
