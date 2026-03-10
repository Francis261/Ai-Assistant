# runkit7_function_redefine

Source: https://devdocs.io/php/function.runkit7-function-redefine

(PECL runkit7 >= Unknown)

runkit7_function_redefine — Replace a function definition with a new implementation

### Description

```
runkit7_function_redefine(
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
runkit7_function_redefine(
 string $function_name,
 Closure $closure,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

Note: By default, only userspace functions may be removed, renamed, or modified. In order to override internal functions, you must enable the runkit.internal_override setting in php.ini.

### Parameters

Name of function to redefine

New list of arguments to be accepted by function

New code implementation

A closure that defines the function.

Whether the function should return by reference.

The doc comment of the function.

The return type of the function.

Whether the function behaves as if it was declared in a file with strict_types=1

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 A runkit7_function_redefine() example

```
<?php
function testme() {
  echo "Original Testme Implementation\n";
}
testme();
runkit7_function_redefine('testme','','echo "New Testme Implementation\n";');
testme();
?>
```

The above example will output:

```
Original Testme Implementation
New Testme Implementation
```

### See Also

- runkit7_function_add() - Add a new function, similar to create_function
- runkit7_function_copy() - Copy a function to a new function name
- runkit7_function_rename() - Change a function's name
- runkit7_function_remove() - Remove a function definition
- runkit7_method_redefine() - Dynamically changes the code of the given method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-function-redefine.php
