# runkit7_method_remove

Source: https://devdocs.io/php/function.runkit7-method-remove

(PECL runkit7 >= Unknown)

runkit7_method_remove — Dynamically removes the given method

### Description

```
runkit7_method_remove(string $class_name, string $method_name): bool
```

Note: This function cannot be used to manipulate the currently running (or chained) method.

### Parameters

The class in which to remove the method

The name of the method to remove

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 runkit7_method_remove() example

```
<?php
class Example {
    function foo() {
        return "foo!\n";
    }

    function bar() {
        return "bar!\n";
    }
}

// Remove the 'foo' method
runkit7_method_remove(
    'Example',
    'foo'
);

echo implode(' ', get_class_methods('Example'));

?>
```

The above example will output:

```
bar
```

### See Also

- runkit7_method_add() - Dynamically adds a new method to a given class
- runkit7_method_copy() - Copies a method from class to another
- runkit7_method_redefine() - Dynamically changes the code of the given method
- runkit7_method_rename() - Dynamically changes the name of the given method
- runkit7_function_remove() - Remove a function definition

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-method-remove.php
