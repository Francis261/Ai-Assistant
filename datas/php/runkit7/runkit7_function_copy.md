# runkit7_function_copy

Source: https://devdocs.io/php/function.runkit7-function-copy

(PECL runkit7 >= Unknown)

runkit7_function_copy — Copy a function to a new function name

### Description

```
runkit7_function_copy(string $source_name, string $target_name): bool
```

### Parameters

Name of the existing function

Name of the new function to copy the definition to

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 A runkit7_function_copy() example

```
<?php
function original() {
  echo "In a function\n";
}
runkit7_function_copy('original','duplicate');
original();
duplicate();
?>
```

The above example will output:

```
In a function
In a function
```

### See Also

- runkit7_function_add() - Add a new function, similar to create_function
- runkit7_function_redefine() - Replace a function definition with a new implementation
- runkit7_function_rename() - Change a function's name
- runkit7_function_remove() - Remove a function definition

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-function-copy.php
