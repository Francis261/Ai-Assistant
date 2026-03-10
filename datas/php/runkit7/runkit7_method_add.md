# runkit7_method_add

Source: https://devdocs.io/php/function.runkit7-method-add

(PECL runkit7 >= Unknown)

runkit7_method_add — Dynamically adds a new method to a given class

### Description

```
runkit7_method_add(
 string $class_name,
 string $method_name,
 string $argument_list,
 string $code,
 int $flags = RUNKIT7_ACC_PUBLIC,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

```
runkit7_method_add(
 string $class_name,
 string $method_name,
 Closure $closure,
 int $flags = RUNKIT7_ACC_PUBLIC,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

### Parameters

The class to which this method will be added

The name of the method to add

Comma-delimited list of arguments for the newly-created method

The code to be evaluated when method_name is called

A closure that defines the method.

The type of method to create, can be RUNKIT7_ACC_PUBLIC, RUNKIT7_ACC_PROTECTED or RUNKIT7_ACC_PRIVATE optionally combined via bitwise OR with RUNKIT7_ACC_STATIC

The doc comment of the method.

The return type of the method.

Whether the method behaves as if it were declared in a file with strict_types=1

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 runkit7_method_add() example

```
<?php
class Example {
    function foo() {
        echo "foo!\n";
    }
}

// create an Example object
$e = new Example();

// Add a new public method
runkit7_method_add(
    'Example',
    'add',
    '$num1, $num2',
    'return $num1 + $num2;',
    RUNKIT7_ACC_PUBLIC
);

// add 12 + 4
echo $e->add(12, 4);
?>
```

The above example will output:

```
16
```

### See Also

- runkit7_method_copy() - Copies a method from class to another
- runkit7_method_redefine() - Dynamically changes the code of the given method
- runkit7_method_remove() - Dynamically removes the given method
- runkit7_method_rename() - Dynamically changes the name of the given method
- runkit7_function_add() - Add a new function, similar to create_function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-method-add.php
