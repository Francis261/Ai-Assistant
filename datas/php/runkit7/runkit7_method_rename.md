# runkit7_method_rename

Source: https://devdocs.io/php/function.runkit7-method-rename

(PECL runkit7 >= Unknown)

runkit7_method_rename — Dynamically changes the name of the given method

### Description

```
runkit7_method_rename(string $class_name, string $source_method_name, string $target_method_name): bool
```

Note: This function cannot be used to manipulate the currently running (or chained) method.

### Parameters

The class in which to rename the method

The name of the method to rename

The new name to give to the renamed method

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 runkit7_method_rename() example

```
<?php
class Example {
    function foo() {
        return "foo!\n";
    }
}

// Rename the 'foo' method to 'bar'
runkit7_method_rename(
    'Example',
    'foo',
    'bar'
);

// output renamed function
echo (new Example)->bar();
?>
```

The above example will output:

```
foo!
```

### See Also

- runkit7_method_add() - Dynamically adds a new method to a given class
- runkit7_method_copy() - Copies a method from class to another
- runkit7_method_redefine() - Dynamically changes the code of the given method
- runkit7_method_remove() - Dynamically removes the given method
- runkit7_function_rename() - Change a function's name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-method-rename.php
